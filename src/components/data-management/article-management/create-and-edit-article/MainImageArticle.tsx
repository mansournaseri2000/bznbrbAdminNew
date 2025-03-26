'use client';

import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import imageCompression from 'browser-image-compression';

import { removeImage, updateMainImageInfo, updateMainImageInfoBody, UploadImageArticle, UploadImageArticleBody } from '@/api/data-management';
import { Box, Button, Flex, Grid, Heading, IconButton, Modal, SelectItem, SelectRoot, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Camera, Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  picture: any;
  constant: any;
  articleData: any;
};

const MainImageArticle = ({ constant, picture, articleData }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [town, setTown] = useState<any>([]);
  const [status, setStatus] = useState<'create' | 'edit'>('create');
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({
    defaultValues: {
      imageFile: null,
      pic: picture ? picture : '',
      localPic: '',
      provinceId: articleData?.picInfo?.picProvince ? articleData?.picInfo?.picProvince : '',
      cityID: articleData?.picInfo?.picCity ? articleData?.picInfo?.picCity : '',
      townId: articleData?.picInfo?.picTown ? articleData?.picInfo?.picTown : '',
      alt: articleData?.picInfo?.alt ? articleData?.picInfo?.alt : '',
      description: articleData?.picInfo?.description ? articleData?.picInfo?.description : '',
      brief: articleData?.picInfo?.summery ? articleData?.picInfo?.summery : '',
      isReset: picture ? true : false,
      town: '',
    },
  });
  const { control, watch, setValue } = methods;
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
      }
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (body: UploadImageArticleBody) => UploadImageArticle(body),
    onSuccess: async data => {
      console.log(data, 'datadatadatadatadata');
      if (data.data.statusCode === 201) {
        queryClient.invalidateQueries({ queryKey: ['article-data'] });
        ToastSuccess('تصویر ارسالی با موفقیت اپلود شد');
        setIsOpen(false);
      }
    },
  });
  const onSubmit = () => {
    if (status === 'create') {
      mutate({
        articleImageType: 'MAIN',
        type: 'ARTICLE',
        alt: watch('alt'),
        description: watch('description'),
        file: watch('imageFile') as any,
        articleId: articleData?.id,
        slug: watch('alt'),
        summery: watch('brief'),
        townId: Number(watch('townId')),
      });
    } else {
      updateInfo({
        alt: watch('alt'),
        description: watch('description'),
        id: articleData.picInfo.id,
        summery: watch('brief'),
        townId: Number(watch('townId')),
        type: 'ARTICLE',
      });
    }
  };

  const { mutate: removeImageMutate, isPending: removeImageIsPending } = useMutation({
    mutationFn: async (id: number) => removeImage(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['article-data'] });
        setIsOpenModal(false);
        ToastSuccess('زیر دسته بندی مورد نظر با موفقیت حذف شد');
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  /**f
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

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

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      ToastSuccess('لینک با موفقیت کپی شد!');
    });
  };

  /**
   * template
   * _______________________________________________________________________________
   */
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
            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${picture}`} alt='تصویر شاخص' fill style={{ borderRadius: 8 }} />
          </Box>
          <Flex direction={'column'} gap={'2'}>
            <Text onClick={() => handleCopyToClipboard(`${process.env.NEXT_PUBLIC_BASE_URL_image2}${picture}`)} {...typoVariant.body1} style={{ color: colorPalette.gray[11], cursor: 'pointer' }}>
              {`${process.env.NEXT_PUBLIC_BASE_URL_image2}${picture}`}
            </Text>
            <Controller name='alt' control={control} render={({ field }) => <TextField {...field} readOnly placeholder='Alt Text' style={{ borderRadius: 12 }} />} />
            <Controller name='description' control={control} render={({ field }) => <TextArea {...field} readOnly placeholder='توضیحات تصویر' rows={6} style={{ borderRadius: 12 }} />} />
          </Flex>
          <Flex direction={'column'} gap={'4'} px={'10px'}>
            <IconButton
              size={'4'}
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
            {Boolean(picture) === false && Boolean(watch('localPic')) === false ? (
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
                  <Image src={watch('isReset') ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${picture}` : watch('localPic')} alt='' fill style={{ borderRadius: 8, objectFit: 'fill' }} />
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
            onCloseButton={() => setIsOpen(false)}
            onSubmit={onSubmit}
            isDisableSubmitBtn={!Boolean(watch('townId'))}
            isLoading={isPending || updateInfoIsPending}
          />
        </>
      </Modal>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <Grid gapY={'24px'} p={'5'}>
          <Text>آیا از حذف این تصویر اطمینان دارید؟ </Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button type='button' onClick={() => removeImageMutate(Number(articleData.picInfo.id))} variant='soft' size={'4'}>
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

export default MainImageArticle;

/**
 * styled-component
 * _______________________________________________________________________________
 */
