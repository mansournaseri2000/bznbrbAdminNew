'use client';

import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import Image from 'next/image';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import imageCompression from 'browser-image-compression';

import { editFeatureGroup, FeatureGroupUploaderParams, UploaderSvgForFeatureGroup, UploadImageForFeatureGroup } from '@/api/additional-detail';
import { Box, Flex, IconButton, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import Uploader from '@/libs/shared/uploader/Uploader';
import { Update } from '@/public/icon';
import { colorPalette } from '@/theme';
import { FeaturesResponse } from '@/types/additional-detail/additional-detail';

type Props = {
  data: FeaturesResponse;
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'edit' }>>;
};

interface FeatureFormData {
  imageFile: File | null;
  iconFile: File | null;
  name: string;
  pic: string;
  icon: string;
  localPic: string;
  localIcon: string;
  isResetPic: boolean;
  isResetIcon: boolean;
}

const EditFeatureModal = ({ setIsOpen, data }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const methods = useForm<FeatureFormData>({
    defaultValues: {
      imageFile: null,
      iconFile: null,
      pic: Boolean(data?.banner) ? data.banner : '',
      icon: Boolean(data?.icon) ? data?.icon : '',
      localPic: Boolean(data?.banner) ? data?.banner : '',
      localIcon: Boolean(data?.icon) ? data?.icon : '',
      name: data?.name,
      isResetPic: data.banner ? false : true,
      isResetIcon: data.icon ? false : true,
    },
  });
  const { control, watch, setValue } = methods;
  const queryClient = useQueryClient();

  /* 
    ****
    Services
    ****_____________________________________________________________________________
   */

  // ******  image and svg uploader services  ******
  const { mutate: uploadImageMutate } = useMutation({
    mutationFn: async (body: FeatureGroupUploaderParams) => await UploadImageForFeatureGroup(body),
  });

  const { mutate: uploadIconMutate } = useMutation({
    mutationFn: async (body: FeatureGroupUploaderParams) => await UploaderSvgForFeatureGroup(body),
  });

  // ******  modal action service  ******
  const { mutate: editFeatureMutate, isPending: editFeaturePending } = useMutation({
    mutationFn: async () => await editFeatureGroup(data.id, watch('name') as any),
    onSuccess: localData => {
      if (localData.status === true) {
        const localImage = watch('imageFile');
        const localIcon = watch('iconFile');
        queryClient.invalidateQueries({ queryKey: ['features'] });

        if (localImage) {
          uploadImageMutate({
            feature_groupId: String(data.id),
            file: localImage,
            type: 'FEATURE_GROUP',
          });
        }

        if (localIcon) {
          uploadIconMutate({
            feature_groupId: String(data.id),
            file: localIcon,
            type: 'FEATURE_GROUP',
          });
        }

        queryClient.invalidateQueries({ queryKey: ['features'] });
        ToastSuccess(' ویژگی مورد نظر با موفقیت ویرایش شد');
        setIsOpen({ key: 'edit', isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });
  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const compressImage = async (file: File) => {
    if (file.type === 'image/svg+xml') {
      return file;
    }
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    try {
      return await imageCompression(file, options);
    } catch (error) {
      console.error('Image compression error:', error);
      return file;
    }
  };

  const imageOnDrop = async (files: File[], onChange: (value: File) => void) => {
    if (files && files[0]) {
      const selectedImage = files[0];
      const compressedImage = await compressImage(selectedImage);
      onChange(URL.createObjectURL(compressedImage) as any);
      setValue('localPic', URL.createObjectURL(compressedImage) as any);
      setValue('imageFile', compressedImage as any);
    }
  };

  const iconOnDrop = async (files: File[], onChange: (value: File) => void) => {
    if (files && files[0]) {
      const selectedImage = files[0];
      const compressedImage = await compressImage(selectedImage);
      onChange(URL.createObjectURL(compressedImage) as any);
      setValue('localIcon', URL.createObjectURL(compressedImage) as any);
      setValue('iconFile', compressedImage as any);
    }
  };
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <Flex direction={'column'} align={'center'} p={'12px 16px'} gap={'4'}>
        <Flex gap={'3'}>
          {/*
            Modal for add image
           *****  When we don't have image   *****
           _______________________________________________________________________________
           */}
          {!watch('pic') ? (
            <Controller
              name='pic'
              control={control}
              render={({ field }) => (
                <Dropzone
                  onDrop={files => imageOnDrop(files, field.onChange)}
                  accept={{
                    'image/*': ['.jpeg', '.png'],
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input type='file' {...getInputProps()} />
                      <Uploader type='pic' />
                    </div>
                  )}
                </Dropzone>
              )}
            />
          ) : (
            /*
             Modal for edit image
             *****  When we have a image and want to update it  *****
             _______________________________________________________________________________
             */
            <Box width={'160px'} height={'160px'} position={'relative'} style={{ border: `1px dashed ${colorPalette.blue[8]}`, borderRadius: 8 }}>
              <Image src={watch('isResetPic') === false ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${watch('pic')}` : watch('localPic')} alt='' fill style={{ objectFit: 'cover', borderRadius: 8 }} />
              <Controller
                name='pic'
                control={control}
                render={({ field }) => (
                  <Dropzone
                    onDrop={files => imageOnDrop(files, field.onChange)}
                    accept={{
                      'image/*': ['.jpeg', '.png'],
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()}>
                        <input type='file' {...getInputProps()} />

                        <IconButton
                          onClick={() => {
                            setValue('isResetPic', true);
                          }}
                          style={{ position: 'absolute', bottom: 0, borderRadius: 8 }}
                        >
                          <Update />
                        </IconButton>
                      </div>
                    )}
                  </Dropzone>
                )}
              />
            </Box>
          )}
          {/*
           Modal for add icon
           *****  When we don't have icon   *****
           * _______________________________________________________________________________
           */}
          {!watch('icon') ? (
            <Controller
              name='icon'
              control={control}
              render={({ field }) => (
                <Dropzone
                  onDrop={files => iconOnDrop(files, field.onChange)}
                  accept={{
                    'image/svg+xml': ['.svg'],
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input type='file' {...getInputProps()} />

                      <Uploader type='icon' />
                    </div>
                  )}
                </Dropzone>
              )}
            />
          ) : (
            /*
             Modal for edit icon
             *****  When we have a icon and want to update it  *****
             _______________________________________________________________________________
             */
            <Flex width={'160px'} height={'160px'} justify={'center'} align={'center'} position={'relative'} style={{ border: `1px dashed ${colorPalette.blue[8]}`, borderRadius: 8 }}>
              <Image
                width={64}
                height={64}
                src={watch('isResetIcon') === false ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${watch('icon')}` : watch('localIcon')}
                alt=''
                style={{ objectFit: 'cover', borderRadius: 8 }}
              />
              <Controller
                name='icon'
                control={control}
                render={({ field }) => (
                  <Dropzone
                    onDrop={files => iconOnDrop(files, field.onChange)}
                    accept={{
                      'image/svg+xml': ['.svg'],
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()}>
                        <input type='file' {...getInputProps()} />

                        <IconButton
                          onClick={() => {
                            setValue('isResetIcon', true);
                          }}
                          style={{ position: 'absolute', bottom: 0, right: 0, borderRadius: 8 }}
                        >
                          <Update />
                        </IconButton>
                      </div>
                    )}
                  </Dropzone>
                )}
              />
            </Flex>
          )}
        </Flex>
        <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='' style={{ width: '50%', margin: '0 auto' }} />} />
      </Flex>
      <ModalAction submitButtonText='ثبت ' closeButtonText='لغو' onCloseButton={() => setIsOpen({ key: 'edit', isOpen: false })} onSubmit={() => editFeatureMutate()} isLoading={editFeaturePending} />
    </FormProvider>
  );
};

export default EditFeatureModal;
