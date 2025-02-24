'use client';

import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { PlusIcon } from '@radix-ui/react-icons';
import imageCompression from 'browser-image-compression';

import { Box, Button, Flex, Grid, Heading, IconButton, Modal, SelectItem, SelectRoot, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Camera, Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { GalleryDetail } from '@/types/additional-detail/additional-detail';
import { Province } from '@/types/place/place-constant';

type Props = {
  gallery: GalleryDetail[];
  constantData: Province[];
};

const ProvinceGallery = ({ gallery, constantData }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<any>(null);
  const methods = useForm({
    defaultValues: {
      pic: currentItem?.path ? currentItem?.path : '',
      localPic: '',
      provinceId: '',
      cityID: '',
      town: '',
      alt: currentItem?.alt ? currentItem?.alt : '',
      description: currentItem?.description ? currentItem?.description : '',
      brief: '',
      isReset: currentItem?.path ? true : false,
    },
  });
  const { control, watch, setValue } = methods;
  const city = constantData.filter((item: any) => item.id === Number(watch('provinceId')))[0]?.Cities;
  /**
   * Methods
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
    }
  };
  useEffect(() => {
    if (currentItem) {
      setValue('pic', currentItem?.path);
      setValue('alt', currentItem?.alt);
      setValue('description', currentItem?.description);
      setValue('isReset', currentItem?.path ? true : false);
    }
  }, [currentItem]);

  console.log(gallery,"gallerygallery");
  
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      {/*
       * When there are no photos in the gallery
       * _______________________________________________________________________________
       */}
      {gallery.length === 0 ? (
        <Flex direction={'column'} align={'center'} gap={'6'} p={'87.5px 12px'}>
          <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
            هنوز تصویری اضافه نشده است.
          </Heading>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
            تصاویری که در این قسمت قرار می دهید در برنامه های اخیر کاربران به صورت رندوم <br /> نمایش داده می شوند.
          </Text>
          <Button size={'4'} onClick={() => setIsOpen(true)}>
            <Flex align={'center'} gap={'2'}>
              <PlusIcon width={16} height={16} style={{ color: colorPalette.blue[10] }} />
              <Text {...typoVariant.body1}> افزودن تصویر به گالری</Text>
            </Flex>
          </Button>
        </Flex>
      ) : (
        // When there is a photo in the gallery
        <Grid width={'100%'} gapY={'5'}>
          <Button
            variant='ghost'
            size={'3'}
            style={{ width: 'fit-content', paddingBlock: '11.5px' }}
            onClick={() => {
              setCurrentItem(null);
              setIsOpen(true);
            }}
          >
            <Flex align={'center'} gap={'2'}>
              <PlusIcon width={16} height={16} style={{ color: colorPalette.blue[10] }} />
              <Text {...typoVariant.body1}>افزودن تصویر</Text>
            </Flex>
          </Button>
          {gallery.map((item, index) => {
            return (
              <Grid key={index} width={'100%'} gapX={'10px'} p={'12px'} style={{ gridTemplateColumns: 'auto 2fr auto', border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
                <Box width={'328px'} height={'200px'} position={'relative'}>
                  <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${item.path}`} alt='تصویر نقطه' fill style={{ borderRadius: 8 }} />
                </Box>
                <Flex direction={'column'} gap={'2'}>
                  <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11], marginTop: '10px' }}>
                    {item.path}
                  </Text>
                  <Flex direction={'column'} mt={'12px'}>
                    <TextField readOnly value={item.alt} placeholder='Alt Text' style={{ borderRadius: 12 }} />
                    <TextField value={item.description} placeholder='توضیحات تصویر' readOnly style={{ borderRadius: 12 }} />
                  </Flex>
                </Flex>
                <Flex direction={'column'} gap={'4'}>
                  <IconButton
                    size={'3'}
                    type='button'
                    onClick={() => {
                      setCurrentItem(item);
                      setIsOpen(true);
                    }}
                  >
                    <Pencil />
                  </IconButton>

                  <IconButton size={'3'} variant='surface' colorVariant='PINK'>
                    <Trash />
                  </IconButton>
                </Flex>
              </Grid>
            );
          })}
        </Grid>
      )}

      {/*
       * Modal
       * _______________________________________________________________________________
       */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='تصویر گالری استان' handleClose={() => setIsOpen(false)} />
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
                  <Image src={watch('isReset') ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${currentItem?.path}` : watch('localPic')} alt='' fill style={{ borderRadius: 8, objectFit: 'fill' }} />
                </Box>
                <Grid width={'100%'} gap={'5'} columns={'3'}>
                  <Controller
                    name='provinceId'
                    control={control}
                    render={({ field }) => (
                      <SelectRoot
                        {...field}
                        value={watch('provinceId')}
                        onValueChange={val => {
                          field.onChange(val);
                          setValue('cityID', '');
                        }}
                        placeholder={'استان'}
                      >
                        {constantData.map((item: any) => {
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
                        value={watch('cityID')}
                        onValueChange={val => {
                          field.onChange(val);
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
                  <Controller name='town' control={control} render={({ field }) => <TextField {...field} placeholder='شهر' />} />
                </Grid>
                <Controller name='alt' control={control} render={({ field }) => <TextField {...field} placeholder='متن جایگزین' />} />
                <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' rows={6} />} />
                <Controller name='brief' control={control} render={({ field }) => <TextArea {...field} placeholder='شزح مختصر' rows={6} />} />
              </>
            )}
          </Grid>
          <ModalAction submitButtonText='ثبت و ارسال' closeButtonText='لفو و بازگشت' onCloseButton={() => setIsOpen(false)} />
        </>
      </Modal>
    </>
  );
};

export default ProvinceGallery;
