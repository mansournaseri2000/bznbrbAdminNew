'use client';

import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { PlusIcon } from '@radix-ui/react-icons';
import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import imageCompression from 'browser-image-compression';

import { deleteProvinceItems, provinceUploder, provinceUploderBody } from '@/api/additional-detail';
import { Box, Button, Flex, Grid, Heading, IconButton, Modal, Text } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Camera, Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  image: string;
  id: number;
};

const ProvinceImage = ({ image, id }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpenRemove, setIsOpenRemove] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const methods = useForm({
    defaultValues: {
      pic: image ? image : '',
      imageFile: null,
      localPic: '',
      provinceId: '',
      cityID: '',
      town: '',
      alt: '',
      description: '',
      brief: '',
      isReset: image ? true : false,
    },
  });
  const { control, watch, setValue } = methods;

  /**
   * methods
   * _______________________________________________________________________________
   */
  const { mutate, isPending } = useMutation({
    mutationFn: async (body: provinceUploderBody) => provinceUploder(body),
    onSuccess: async data => {
      if (data.statusCode === 201) {
        queryClient.invalidateQueries({ queryKey: ['province-images'] });
        ToastSuccess('تصویر ارسالی با موفقیت اپلود شد');
        setIsOpen(false);
      } else {
        ToastError('خطایی رخ داده دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: deleteVectorMutate, isPending: deleteVectorPending } = useMutation({
    mutationFn: async () => await deleteProvinceItems({ id: id, type: 'PIC' }),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['province-images'] });
        ToastSuccess('نصویر مورد نظر با موفقیت حذف شد');
      } else {
        ToastError('مشکلی پیش آمده است . مجددا تلاش کنید');
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

  const onSubmit = () => {
    mutate({
      file: watch('imageFile') as any,
      position: 'picture',
      provinceId: id,
    });
  };
  return (
    <>
      {image ? (
        <Grid p={'10px'} gapY={'10px'}>
          <Flex width={'100%'} align={'center'} justify={'center'}>
            <Box width={'100%'} height={'288px'} position={'relative'}>
              <Image src={image ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${image}` : ''} alt='' fill style={{ borderRadius: '8px' }} />
            </Box>
          </Flex>
          <Flex align={'center'} justify={'end'} gap={'4'}>
            <IconButton size={'3'} colorVariant='PINK' variant='surface' type='button' onClick={() => setIsOpenRemove(true)}>
              <Trash width={16} height={16} />
            </IconButton>
            <IconButton size={'3'} type='button' onClick={() => setIsOpen(true)}>
              <Pencil width={16} height={16} />
            </IconButton>
          </Flex>
        </Grid>
      ) : (
        <Flex direction={'column'} align={'center'} gap={'6'} p={'87.5px 12px'}>
          <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
            هنوز تصویری اضافه نشده است.
          </Heading>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
            دقت داشته باشید که تصویر استان در اسلایدر استان‌ها و هدر صفحه استان‌ها نمایش داده <br /> می‌شود!
          </Text>
          <Button size={'4'} onClick={() => setIsOpen(true)}>
            <Flex align={'center'} gap={'2'}>
              <PlusIcon width={16} height={16} style={{ color: colorPalette.blue[10] }} />
              <Text {...typoVariant.body1}> افزودن تصویر استان</Text>
            </Flex>
          </Button>
        </Flex>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title=' تصویر استان' handleClose={() => setIsOpen(false)} />
        <>
          <Grid minHeight={'286px'} p={'4'} gapY={'5'}>
            {Boolean(image) === false && Boolean(watch('localPic')) === false ? (
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
                  <Image src={watch('isReset') ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${image}` : watch('localPic')} alt='' fill style={{ borderRadius: 8 }} />
                </Box>
              </>
            )}
          </Grid>
          <ModalAction submitButtonText='ثبت و ارسال' closeButtonText='لفو و بازگشت' onCloseButton={() => setIsOpen(false)} onSubmit={onSubmit} isLoading={isPending} />
        </>
      </Modal>

      <Modal isOpen={isOpenRemove} onClose={() => setIsOpenRemove(false)}>
        <Grid gapY={'24px'} p={'5'}>
          <Text>آیا از حذف این تصویر اظمینان دارید؟ </Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button onClick={() => deleteVectorMutate()} variant='soft' size={'4'}>
              <Text {...typoVariant.body3}>{deleteVectorPending ? <Spinner /> : 'بله'}</Text>
            </Button>
            <Button type='button' onClick={() => setIsOpenRemove(false)} variant='solid' size={'4'}>
              <Text {...typoVariant.body3}>خیر</Text>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default ProvinceImage;
