'use client';

import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { PlusIcon } from '@radix-ui/react-icons';
import imageCompression from 'browser-image-compression';

import { Box, Button, Flex, Grid, Heading, IconButton, Modal, SelectRoot, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Camera, Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  image: string;
};

const ProvinceImage = ({ image }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const methods = useForm({
    defaultValues: {
      pic: image ? image : '',
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
  return (
    <>
      {image ? (
        <Grid p={'10px'} gapY={'10px'}>
          <Flex width={'100%'} align={'center'} justify={'center'}>
            <Box width={'179px'} height={'288px'} position={'relative'}>
              <Image src={image ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${image}` : ''} alt='' fill objectFit='cover' />
            </Box>
          </Flex>
          <Flex align={'center'} justify={'end'} gap={'4'}>
            <IconButton size={'3'} colorVariant='PINK' variant='surface' type='button'>
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
                  <Image src={watch('isReset') ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${image}` : watch('localPic')} alt='' fill style={{ borderRadius: 8, objectFit: 'fill' }} />
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
                        disabled
                      ></SelectRoot>
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
                      ></SelectRoot>
                    )}
                  />
                  <Controller name='town' control={control} render={({ field }) => <TextField {...field} placeholder='شهر' disabled style={{ marginTop: '5px' }} />} />
                </Grid>
                <Controller name='alt' control={control} render={({ field }) => <TextField {...field} placeholder='متن جایگزین' disabled />} />
                <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' rows={6} disabled />} />
                <Controller name='brief' control={control} render={({ field }) => <TextArea {...field} placeholder='شزح مختصر' rows={6} disabled />} />
              </>
            )}
          </Grid>
          <ModalAction submitButtonText='ثبت و ارسال' closeButtonText='لفو و بازگشت' onCloseButton={() => setIsOpen(false)} />
        </>
      </Modal>
    </>
  );
};

export default ProvinceImage;
