import React, { ReactNode, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';

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
};

export const urlToObject = async (image: string) => {
  const response = await fetch(image);
  const blob = await response.blob();
  const file = new File([blob], `${image}`, { type: 'image/*' });
  return file;
};

const ImagePicker = ({ name, children, errorText }: Props) => {
  const { control, setValue } = useFormContext();
  const [image, setImage] = useState<File | null>(null);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (params: UploadImageParams) => UploadImage(params),
    onSuccess: async data => {
      if (data.status === true) {
        ToastSuccess('عکس مورد نظر با موفقیت ثبت شد.');
        queryClient.invalidateQueries({ queryKey: ['image-gallery'] });
        setValue('isLoading', true);
      } else {
        ToastError(' امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err, 'useRemovePlace');
    },
  });

  // const { mutate: createPlaceMutate, isPending: createPlaceIsPending } = useMutation({
  //   mutationFn: async () => createPlace({ name: watch('name') } as any),
  //   onSuccess: async data => {
  //     if (data.status === true) {
  //       const cityID = data.data.id;

  //       if (cityID) {
  //         setValue('cityId', cityID);
  //         mutate({
  //           files: image as File,
  //           placeId: 13849,
  //           type: 'GALLERY',
  //         });
  //       }
  //     } else {
  //       ToastError('لطفا دوباره امتحان نمایید');
  //     }
  //   },
  //   onError: err => {
  //     console.log(err, 'useRemovePlace');
  //   },
  // });

  const onDrop = (files: File[], onChange: (value: File) => void) => {
    if (files && files[0]) {
      const selectedImage = files[0];
      onChange(selectedImage);
      setImage(selectedImage);
      mutate({
        files: image as File,
        placeId: 13849,
        type: 'GALLERY',
      });
      setValue('isLoading', true);
      // createPlaceMutate();
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
