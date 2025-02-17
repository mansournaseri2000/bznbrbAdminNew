'use client';

import React, { ReactNode } from 'react';
import Dropzone from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import { Controller, useFormContext } from 'react-hook-form';


import { Flex } from '../primitives';
import ErrorText from './ErrorText';

type Props = {
  name: string;
  localPath: string;
  children: ReactNode;
  defaultImage?: string;
  errorText?: string;
  style?: React.CSSProperties;
  resetStore:string
};

export const urlToObject = async (image: string) => {
  const response = await fetch(image);
  const blob = await response.blob();
  const file = new File([blob], `${image}`, { type: 'image/*' });
  return file;
};

const ImagePicker2 = ({ name, children, errorText, style, localPath ,resetStore }: Props) => {
  const { control, setValue } = useFormContext();

  // Compress image before setting it to form state
  const compressImage = async (file: File) => {
    if (file.type === 'image/svg+xml') {
      return file; // Skip compression for SVGs
    }
    const options = {
      maxSizeMB: 1, // Maximum file size in MB
      maxWidthOrHeight: 800, // Max width or height in pixels
      useWebWorker: true,
    };

    try {
      return await imageCompression(file, options);
    } catch (error) {
      console.error('Image compression error:', error);
      return file; // Return the original file if compression fails
    }
  };

  const onDrop = async (files: File[], onChange: (value: File) => void) => {
    if (files && files[0]) {
      const selectedImage = files[0];
      const compressedImage = await compressImage(selectedImage);
      onChange(URL.createObjectURL(compressedImage) as any);
      setValue(name, compressedImage); 
      setValue(localPath, URL.createObjectURL(compressedImage) as any);
      setValue(resetStore, false);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Flex width={'max-content'} position={'relative'} direction={'column'} style={style}>
          <Dropzone
            onDrop={files => {
              onDrop(files, field.onChange);
            }}
            accept={{
              'image/jpeg': ['.jpeg', '.jpg'],
              'image/png': ['.png'],
              'image/svg+xml': ['.svg'],
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input type='file' {...getInputProps()} />
                <Flex gap={'2'} justify={'center'} direction={'column'} align={'center'}>
                  {children}
                </Flex>
              </div>
            )}
          </Dropzone>
          {errorText && <ErrorText text={errorText} />}
        </Flex>
      )}
    />
  );
};

export default ImagePicker2;
