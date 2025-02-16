'use client';

import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import imageCompression from 'browser-image-compression';

import { removeMainImage, updateMainImageInfo, updateMainImageInfoBody, UploadMainImage, UploadMainImageParams } from '@/api/place';
import { Box, Button, Flex, Grid, Heading, IconButton, Modal, SelectItem, SelectRoot, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Camera, Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Picture } from '@/types/place/find-place';

type Props = {
  picture: Picture;
  constant: any;
  placeData: any;
};

const PrimaryImage = ({ picture, constant, placeData }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [town, setTown] = useState<any>([]);
  const [status, setStatus] = useState<'create' | 'edit'>('create');
  const imageData = placeData.pictures.filter((item: any) => item.type === 'MAIN')[0];
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({
    defaultValues: {
      imageFile: null,
      pic: Boolean(imageData) ? imageData.path : '',
      localPic: '',
      provinceId: Boolean(imageData?.provinceId) ? imageData.provinceId : '',
      cityID: Boolean(imageData?.cityID) ? imageData.cityId : '',
      townId: Boolean(imageData?.townId) ? imageData.townId : '',
      isReset: picture?.path ? true : false,

      alt: Boolean(imageData?.alt) && imageData.alt !== 'null' ? imageData.alt : '',
      description: Boolean(imageData?.description) && imageData.description !== 'null' ? imageData.description : '',
      brief: Boolean(imageData?.brief) && imageData.brief !== 'null' ? imageData.brief : '',
    },
  });
  const { control, watch, setValue, reset } = methods;
  const city = constant.provinces.filter((item: any) => item.id === Number(watch('provinceId')))[0]?.Cities;

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

  const { mutate: updateInfo, isPending: updateInfoIsPending } = useMutation({
    mutationFn: async (body: updateMainImageInfoBody) => updateMainImageInfo(body),
    onSuccess: async data => {
      if (data.statusCode === 200) {
        queryClient.invalidateQueries({ queryKey: ['place'] });
        ToastSuccess('مشخصات تصویر با موفقیت به روز شد');
        setIsOpen(false);
      } else {
        ToastError('خطایی رخ داده دوباره تلاش نمایید');
      }
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (UploadMainImageParams: UploadMainImageParams) => UploadMainImage(UploadMainImageParams),
    onSuccess: async data => {
      if (data.statusCode === 201) {
        queryClient.invalidateQueries({ queryKey: ['place'] });
        ToastSuccess('تصویر ارسالی با موفقیت اپلود شد');
        setIsOpen(false);
      } else {
        ToastError('خطایی رخ داده دوباره تلاش نمایید');
      }
    },
  });

  const onSubmit = () => {
    if (status === 'create') {
      mutate({
        type: 'MAIN',
        alt: watch('alt'),
        description: watch('description'),
        file: watch('imageFile') as any,
        placeId: placeData.id,
        slug: watch('alt'),
        summery: watch('brief'),
        townId: Number(watch('townId')),
      });
    } else {
      updateInfo({
        alt: watch('alt'),
        description: watch('description'),
        id: imageData.id,
        summery: watch('brief'),
        townId: Number(watch('townId')),
        type: 'PLACE',
      });
    }
  };

  const { mutate: removeImageMutate, isPending: removeImageIsPending } = useMutation({
    mutationFn: async (id: number) => removeMainImage(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['place'] });
        setIsOpenModal(false);
        ToastSuccess('زیر دسته بندی مورد نظر با موفقیت حذف شد');
        reset({
          alt: '',
          brief: '',
          cityID: '',
          description: '',
          localPic: '',
          provinceId: '',
          townId: '',
        });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

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

  return (
    <>
      {!picture ? (
        <Flex direction={'column'} gap={'6'} align={'center'} py={'87.5px'}>
          <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
            هنوز تصویر شاخصی اضافه نشده است.
          </Heading>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
            دقت داشته باشید که تصویر شاخص اولین تصویر نقطه و تصویری است که بر روی کارت <br /> نقطه نمایش داده می شود!
          </Text>

          <Button
            size={'4'}
            type='button'
            onClick={() => {
              setStatus('create');
              setIsOpen(true);
              setValue('localPic', '');
            }}
          >
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن تصویر شاخص</Text>
            </Flex>
          </Button>
        </Flex>
      ) : (
        <Grid width={'100%'} gapX={'10px'} p={'12px'} style={{ gridTemplateColumns: 'auto 2fr auto', border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
          <Box width={'610px'} height={'342px'} position={'relative'}>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${picture.path}`} alt='تصویر شاخص' fill style={{ borderRadius: 8 }} />
          </Box>
          <Flex direction={'column'} gap={'2'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
              {imageData.path}
            </Text>
            <Controller name='alt' control={control} render={({ field }) => <TextField readOnly {...field} placeholder='Alt Text' style={{ borderRadius: 12 }} />} />
            <Controller name='description' control={control} render={({ field }) => <TextArea readOnly {...field} placeholder='توضیحات تصویر' rows={6} style={{ borderRadius: 12 }} />} />
          </Flex>
          <Flex direction={'column'} gap={'4'} px={'10px'}>
            <IconButton
              size={'3'}
              type='button'
              onClick={() => {
                setStatus('edit');
                setIsOpen(true);
              }}
            >
              <Pencil />
            </IconButton>

            <IconButton
              size={'3'}
              variant='ghost'
              type='button'
              colorVariant='PINK'
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              <Trash height={24} />
            </IconButton>
          </Flex>
        </Grid>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='تصویر شاخص' handleClose={() => setIsOpen(false)} />
        <>
          <Grid minHeight={'286px'} p={'4'} gapY={'5'}>
            {Boolean(picture?.path) === false && Boolean(watch('localPic')) === false ? (
              <Controller
                name={'pic'}
                control={control}
                render={({ field }) => (
                  <Flex width={'max-content'} position={'relative'} direction={'column'}>
                    <Dropzone
                      onDrop={files => onDrop(files, field.onChange)}
                      accept={{
                        'image/*': ['.jpeg', '.png'],
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()}>
                          <input type='file' {...getInputProps()} />
                          <Flex gap={'2'} justify={'center'} direction={'column'} align={'center'}>
                            <Button type='button' size={'3'} style={{ width: 'fit-content' }}>
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
                  {/* <Flex
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
                  </Flex> */}
                  <Image src={watch('isReset') ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${picture.path}` : watch('localPic')} alt='' fill style={{ borderRadius: 8, objectFit: 'fill' }} />
                </Box>
                <Grid width={'100%'} gap={'5'} columns={'3'}>
                  <Controller
                    name='provinceId'
                    control={control}
                    render={({ field }) => (
                      <SelectRoot
                        {...field}
                        value={String(watch('provinceId'))}
                        onValueChange={val => {
                          field.onChange(val);
                          setValue('cityID', '');
                          setValue('townId', '');
                        }}
                        placeholder={'استان'}
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
                        disabled={!Boolean(watch('provinceId'))}
                        value={String(watch('cityID'))}
                        onValueChange={val => {
                          field.onChange(val);
                          setValue('townId', '');
                        }}
                        placeholder={'شهرستان'}
                      >
                        {city?.map((item: any) => {
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
                        disabled={!Boolean(watch('provinceId')) || !Boolean(watch('cityID'))}
                        value={String(watch('townId'))}
                        onValueChange={val => {
                          field.onChange(val);
                        }}
                        placeholder={'شهر'}
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
                <Controller name='alt' control={control} render={({ field }) => <TextField {...field} placeholder='متن جایگزین' />} />
                <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' rows={6} />} />
                <Controller name='brief' control={control} render={({ field }) => <TextArea {...field} placeholder='شزح مختصر' rows={6} />} />
              </>
            )}
          </Grid>
          <ModalAction
            isDisableSubmitBtn={!Boolean(watch('townId'))}
            isLoading={isPending || updateInfoIsPending}
            submitButtonText='ثبت و ارسال'
            closeButtonText='لفو و بازگشت'
            onCloseButton={() => setIsOpen(false)}
            onSubmit={onSubmit}
            isSubmit={false}
          />
        </>
      </Modal>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <Grid gapY={'24px'} p={'5'}>
          <Text>آیا از حذف این تصویر اطمینان دارید؟ </Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button type='button' onClick={() => removeImageMutate(Number(imageData.id))} variant='soft' size={'4'}>
              <Text {...typoVariant.body3}>{removeImageIsPending ? <Spinner /> : 'بله'}</Text>
            </Button>
            <Button type='button' onClick={() => setIsOpenModal(false)} variant='solid' size={'4'}>
              <Text {...typoVariant.body3}>خیر</Text>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default PrimaryImage;
