import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import Image from 'next/image';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import imageCompression from 'browser-image-compression';

import { editCategory, Param, UploadIcon, UploadImage } from '@/api/additional-detail';
import { Box, Flex, IconButton, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import UploaderCard from '@/libs/shared/uploader/UploaderCard';
import { Update } from '@/public/icon';
import { colorPalette } from '@/theme';
import { ChildrenDetail } from '@/types/additional-detail/additional-detail';

type Props = {
  data: ChildrenDetail;
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'edit-subCategory' }>>;
};

interface CategoryFormData {
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

const EditSubCategoryModal = ({ data, setIsOpen }: Props) => {
  //   /*
  //    *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
  //    */
  const methods = useForm<CategoryFormData>({
    defaultValues: {
      imageFile: null,
      iconFile: null,
      pic: Boolean(data?.banner) ? data.banner : '',
      icon: Boolean(data?.icon) ? data?.icon : '',
      localPic: Boolean(data?.banner) ? data?.banner : '',
      localIcon: Boolean(data?.icon) ? data?.icon : '',
      name: data?.name,
      isResetPic: Boolean(data?.banner) ? false : true,
      isResetIcon: Boolean(data?.icon) ? false : true,
    },
  });
  const { control, watch, setValue } = methods;
  const queryClient = useQueryClient();

  console.log(watch(), 'watch');

  //   /**
  //    * Services
  //    * _______________________________________________________________________________
  //    */

  const { mutate: uploadImageMutate } = useMutation({
    mutationFn: async (body: Param) => await UploadImage(body),
  });

  const { mutate: uploadIconMutate } = useMutation({
    mutationFn: async (body: Param) => await UploadIcon(body),
  });

  const { mutate: editSubCategoryMutate, isPending: editSubCategoryPending } = useMutation({
    mutationFn: async () => await editCategory(data.id, watch('name') as any),
    onSuccess: localData => {
      if (localData.status === true) {
        const localImage = watch('imageFile');
        const localIcon = watch('iconFile');
        queryClient.invalidateQueries({ queryKey: ['single-category'] });
        queryClient.invalidateQueries({ queryKey: ['categories'] });

        if (localImage) {
          uploadImageMutate({
            categoryId: String(data.id),
            file: localImage,
            type: 'CATEGORY',
          });
        }

        if (localIcon) {
          uploadIconMutate({
            categoryId: String(data.id),
            file: localIcon,
            type: 'CATEGORY',
          });
        }
        queryClient.invalidateQueries({ queryKey: ['single-category'] });
        queryClient.invalidateQueries({ queryKey: ['categories'] });
        ToastSuccess('دسته بندی مورد نظر با موفقیت ویرایش شد');
        setIsOpen({ key: 'edit-subCategory', isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

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

  return (
    <FormProvider {...methods}>
      <Flex direction={'column'} align={'center'} p={'12px 16px'} gap={'4'}>
        <Flex direction={'column'} align={'center'} p={'12px 16px'} gap={'18px'}>
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
                        <UploaderCard type='pic' />
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
                <Image
                  src={watch('isResetPic') === false ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${watch('pic')}` : watch('localPic')}
                  alt=''
                  fill
                  style={{ objectFit: 'cover', borderRadius: 8 }}
                />
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

                        <UploaderCard type='icon' />
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
        </Flex>
        <Box width={'50%'}>
          <Controller name='name' control={control} render={({ field }) => <TextField {...field} label='نام زیر دسته بندی' placeholder='نام زیر دسته بندی' selectedValue={Boolean(field.value)} />} />
        </Box>
      </Flex>
      <ModalAction
        submitButtonText='ثبت '
        closeButtonText='لغو'
        onCloseButton={() => setIsOpen({ key: 'edit-subCategory', isOpen: false })}
        onSubmit={() => editSubCategoryMutate()}
        isLoading={editSubCategoryPending}
      />
    </FormProvider>
  );
};

export default EditSubCategoryModal;
