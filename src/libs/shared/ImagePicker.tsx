import React, { ReactNode } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UploadImage, UploadImageParams } from '@/api/place';

import { Flex } from '../primitives';
import ErrorText from './ErrorText';
import { ToastError, ToastSuccess } from './toast/Toast';

type Props = {
  name: string;
  children: ReactNode;
  defaultImage?: string;
  errorText?: string;
  placeID: number;
  type: 'MAIN' | 'GALLERY';
};

export const urlToObject = async (image: string) => {
  const response = await fetch(image);
  const blob = await response.blob();
  const file = new File([blob], `${image}`, { type: 'image/*' });
  return file;
};

const ImagePicker = ({ name, children, errorText, placeID, type = 'GALLERY' }: Props) => {
  const { control, setValue } = useFormContext();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (params: UploadImageParams) => UploadImage(params),
    onSuccess: async data => {
      if (data.status === true) {
        ToastSuccess('عکس مورد نظر با موفقیت ثبت شد.');
        await Promise.all([queryClient.invalidateQueries({ queryKey: ['image-gallery'] }), queryClient.invalidateQueries({ queryKey: ['all-places'] })]);
        setValue('isLoading', false);
      } else {
        ToastError(' امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err, 'useRemovePlace');
    },
    retry: 5,
  });

  const onDrop = (files: File[], onChange: (value: File) => void) => {
    if (files && files[0]) {
      const selectedImage = files[0];
      onChange(selectedImage);
      setValue('uploadImage', selectedImage);
      mutate({
        files: selectedImage as File,
        placeId: placeID,
        type: type,
      });

      setValue('isLoading', true);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Flex height={'fit-content'} width={'fit-content'} position={'relative'} direction={'column'}>
          <Dropzone
            onDrop={files => onDrop(files, field.onChange)}
            accept={{
              'image/*': ['.jpeg', '.png'],
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} type='file' />
                <Flex>{children}</Flex>
              </div>
            )}
          </Dropzone>
          {errorText && <ErrorText text={errorText} />}
        </Flex>
      )}
    />
  );
};

export default ImagePicker;
