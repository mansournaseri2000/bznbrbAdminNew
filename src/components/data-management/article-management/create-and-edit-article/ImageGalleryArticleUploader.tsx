'use client';

import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import imageCompression from 'browser-image-compression';

import { updateMainImageInfo, updateMainImageInfoBody, UploadImageArticle, UploadImageArticleBody } from '@/api/data-management';
import { Box, Button, Flex, Grid, Modal, SelectItem, SelectRoot, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Camera, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  currentItem: any;
  handleCloseModal: any;
  articleId: number;
  constant: any;
  isOpen: any;
  resetCurrentItem: any;
  status: any;
};

const ImageGalleryArticleUploader = ({ currentItem, handleCloseModal, articleId, constant, isOpen, resetCurrentItem, status }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const queryClient = useQueryClient();
  const methods = useForm({
    defaultValues: {
      town: '',
      localPic: '',
      imageFile: null,
      pic: currentItem?.path ? currentItem?.path : '',
      provinceId: currentItem?.provinceId ? currentItem.provinceId : '',
      cityID: currentItem?.cityId ? currentItem.cityId : '',
      townId: currentItem?.townId ? currentItem.townId : '',
      alt: currentItem?.alt ? currentItem?.alt : '',
      description: currentItem?.description ? currentItem?.description : '',
      brief: currentItem?.summery ? currentItem.summery : '',
      isReset: currentItem?.path ? true : false,
    },
  });
  const { control, watch, setValue, reset } = methods;
  const cityStore = constant.provinces.filter((item: any) => item.id === Number(watch('provinceId')))[0]?.Cities;
  const [town, setTown] = useState<any>([]);

  /**
   * useEffect
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

  const onDrop = async (files: File[], onChange: (value: File) => void) => {
    if (files && files[0]) {
      const selectedImage = files[0];
      const compressedImage = await compressImage(selectedImage);
      onChange(URL.createObjectURL(compressedImage) as any);
      setValue('localPic', URL.createObjectURL(compressedImage) as any);
      setValue('isReset', false);
      setValue('imageFile', compressedImage as any);
    }
  };
  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  const { mutate: updateInfo, isPending: updateInfoIsPending } = useMutation({
    mutationFn: async (body: updateMainImageInfoBody) => updateMainImageInfo(body),
    onSuccess: async data => {
      if (data.statusCode === 200) {
        queryClient.invalidateQueries({ queryKey: ['article-image-gallery'] });
        ToastSuccess('مشخصات تصویر با موفقیت به روز شد');
        handleCloseModal();
        resetCurrentItem();
      }
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (body: UploadImageArticleBody) => UploadImageArticle(body),
    onSuccess: async data => {
      if (data.data.statusCode === 201) {
        queryClient.invalidateQueries({ queryKey: ['article-image-gallery'] });
        ToastSuccess('تصویر ارسالی با موفقیت اپلود شد');
        handleCloseModal();
        resetCurrentItem();
        reset({
          localPic: '',
        });
      } else {
        ToastError(data.data.message);
      }
    },
  });

  const onSubmit = () => {
    if (status === 'create') {
      mutate({
        articleImageType: 'GALLERY',
        type: 'ARTICLE',
        alt: watch('alt'),
        description: watch('description'),
        file: watch('imageFile') as any,
        articleId: articleId,
        slug: watch('alt'),
        summery: watch('brief'),
        townId: Number(watch('townId')),
      });
    } else {
      updateInfo({
        alt: watch('alt'),
        description: watch('description'),
        id: currentItem.id,
        summery: watch('brief'),
        townId: Number(watch('townId')),
        type: 'ARTICLE',
      });
    }
  };

  useEffect(() => {
    const cityID = watch('cityID');
    const provinceID = watch('provinceId');

    if (cityID && provinceID) {
      const province = constant.provinces.find((item: any) => item.id === Number(provinceID));

      if (province) {
        const city = province.Cities?.find((item: any) => item.id === Number(cityID));

        if (city) {
          setTown(city.Town ?? []); // Ensure it's an array
        }
      }
    }
  }, [watch('cityID'), watch('provinceId')]);

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        resetCurrentItem();
        handleCloseModal();
      }}
    >
      <ModalHeader
        title='تصاویر'
        handleClose={() => {
          resetCurrentItem();
          handleCloseModal();
        }}
      />
      <>
        <Grid minHeight={'286px'} p={'4'} gapY={'5'}>
          {Boolean(currentItem?.path) === false && Boolean(watch('localPic')) === false ? (
            <Controller
              name={'pic'}
              control={control}
              render={({ field }) => (
                <Flex width={'max-content'} position={'relative'} direction={'column'}>
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
                          <Button size={'3'} style={{ width: 'fit-content' }}>
                            <Flex align={'center'} gap={'2'}>
                              <Camera />
                              <Text {...typoVariant.body1}>ارسال تصویر</Text>
                            </Flex>
                          </Button>
                        </Flex>
                      </div>
                    )}
                  </Dropzone>
                </Flex>
              )}
            />
          ) : (
            <>
              <Box width={'538px'} height={'350px'} position={'relative'} style={{ borderRadius: 8, border: `1px solid ${colorPalette.gray[3]}` }}>
                {status === 'create' && (
                  <Flex
                    width={'30px'}
                    height={'30px'}
                    justify={'center'}
                    align={'center'}
                    style={{ cursor: 'pointer', position: 'absolute', backgroundColor: colorPalette.gray[3], borderRadius: '4px', border: `1px solid ${colorPalette.pink[9]}`, zIndex: '10' }}
                    left={'0'}
                    top={'0'}
                  >
                    <Controller
                      name={'pic'}
                      control={control}
                      render={({ field }) => (
                        <Flex width={'max-content'} position={'relative'} direction={'column'}>
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
                                  <Trash />
                                </Flex>
                              </div>
                            )}
                          </Dropzone>
                        </Flex>
                      )}
                    />
                  </Flex>
                )}
                <Image src={watch('isReset') ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${currentItem?.path}` : watch('localPic')} alt='' fill style={{ borderRadius: 8, objectFit: 'fill' }} />
              </Box>
              <Grid width={'100%'} gap={'5'} columns={'3'}>
                <Controller
                  name='provinceId'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      label='استان'
                      placeholder={'استان'}
                      selectedValue={Boolean(field.value)}
                      value={String(watch('provinceId'))}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('cityID', '');
                        setValue('townId', '');
                      }}
                    >
                      {constant.provinces.map((item: any) => {
                        return (
                          <SelectItem key={item.id} value={String(item.id)}>
                            {item.name}
                          </SelectItem>
                        );
                      })}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='cityID'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      label='شهرستان'
                      placeholder={'شهرستان'}
                      selectedValue={Boolean(field.value)}
                      disabled={!Boolean(watch('provinceId'))}
                      value={String(watch('cityID'))}
                      onValueChange={val => {
                        field.onChange(val);
                        setValue('townId', '');
                      }}
                    >
                      {cityStore?.map((item: any) => {
                        return (
                          <SelectItem key={item.id} value={String(item.id)}>
                            {item.name}
                          </SelectItem>
                        );
                      })}
                    </SelectRoot>
                  )}
                />
                <Controller
                  name='townId'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      label='شهر'
                      placeholder={'شهر'}
                      selectedValue={Boolean(field.value)}
                      disabled={!Boolean(watch('provinceId')) || !Boolean(watch('cityID'))}
                      value={String(watch('townId'))}
                      onValueChange={val => {
                        field.onChange(val);
                      }}
                    >
                      {town?.map((item: any) => {
                        return (
                          <SelectItem key={item.id} value={String(item.id)}>
                            {item.name}
                          </SelectItem>
                        );
                      })}
                    </SelectRoot>
                  )}
                />
              </Grid>
              <Controller name='alt' control={control} render={({ field }) => <TextField {...field} label='متن جایگزین' placeholder='متن جایگزین' selectedValue={Boolean(field.value)} />} />
              <Controller
                name='description'
                control={control}
                render={({ field }) => <TextArea {...field} label='توضیحات تصویر' placeholder='توضیحات تصویر' selectedValue={Boolean(field.value)} rows={6} />}
              />
              <Controller name='brief' control={control} render={({ field }) => <TextArea {...field} label='شرح مختصر' placeholder='شرح مختصر' selectedValue={Boolean(field.value)} rows={6} />} />
            </>
          )}
        </Grid>
        <ModalAction
          submitButtonText='ثبت و ارسال'
          closeButtonText='لفو و بازگشت'
          onCloseButton={() => {
            resetCurrentItem();
            handleCloseModal();
          }}
          isDisableSubmitBtn={!Boolean(watch('townId'))}
          onSubmit={onSubmit}
          isLoading={isPending || updateInfoIsPending}
        />
      </>
    </Modal>
  );
};

export default ImageGalleryArticleUploader;

/**
 * styled-component
 * _______________________________________________________________________________
 */
