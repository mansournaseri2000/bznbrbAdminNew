'use client';

import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { PlusIcon } from '@radix-ui/react-icons';
import { CopyIcon } from '@radix-ui/react-icons';
// import { useQueryClient } from '@tanstack/react-query';
import imageCompression from 'browser-image-compression';

import { Box, Button, Flex, Grid, Heading, IconButton, Modal, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Camera, Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  data: {
    id: number;
    path: string | null;
    page: string;
    position: string;
    description: string | null;
    alt: string | null;
    slug: string | null;
    summery: string | null;
    website: string | null;
    socialMedia: string | null;
    sponsor: string | null;
  };
};

const AdsDetailCard = ({ data }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [status, setStatus] = useState<'create' | 'edit'>('create');
  const [isOpen, setIsOpen] = useState(false);

  const methods = useForm<any>({
    defaultValues: {
      imageFile: status === 'edit' ? data.path : null,
      localPic: '',
      description: status === 'edit' ? data.description : '',
      alt: status === 'edit' ? data.alt : '',
      slug: status === 'edit' ? data.slug : '',
      summery: status === 'edit' ? data.summery : '',
      website: status === 'edit' ? data.website : '',
      socialMedia: status === 'edit' ? data.socialMedia : '',
      sponsor: status === 'edit' ? data.sponsor : '',
      isReset: true,
    },
  });
  const { control, watch, setValue } = methods;
  // const queryClient = useQueryClient();

  useEffect(() => {
    setValue('imageFile', status === 'edit' ? data.path : null);
    setValue('description', status === 'edit' ? data.description : '');
    setValue('alt', status === 'edit' ? data.alt : '');
    setValue('slug', status === 'edit' ? data.slug : '');
    setValue('summery', status === 'edit' ? data.summery : '');
    setValue('website', status === 'edit' ? data.website : '');
    setValue('socialMedia', status === 'edit' ? data.socialMedia : '');
    setValue('sponsor', status === 'edit' ? data.sponsor : '');
    setValue('isReset', true);
  }, [status]);

  console.log(data?.path, 'pathpathpath');

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
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

  const onSubmit = () => {};

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <>
      {!Boolean(data?.path) && (
        <Flex align={'center'} position={'relative'} minHeight={'200px'} p={'16px'} justify={'center'} style={{ borderRadius: '8px', border: `1px dashed ${colorPalette.blue[9]}` }}>
          <Text style={{ position: 'absolute', color: colorPalette.gray[8], right: '20px', fontSize: '90px' }}>{'A22'}</Text>
          <Flex
            gap={'4px'}
            align={'center'}
            onClick={() => {
              setStatus('create');
              setIsOpen(true);
            }}
            style={{ cursor: 'pointer' }}
          >
            <PlusIcon stroke={colorPalette.blue[7]} />
            <Text {...typoVariant.body1} style={{ color: colorPalette.blue[11] }}>
              افزودن آگهی
            </Text>
          </Flex>
        </Flex>
      )}
      {Boolean(data?.path) && (
        <Grid p={'16px'} style={{ borderRadius: '8px', border: `1px solid ${colorPalette.gray[6]}` }}>
          <Flex width={'100%'} align={'center'} justify={'between'}>
            <Heading style={{ color: colorPalette.gray[11], fontSize: '32px', fontWeight: 500, lineHeight: '37.5px' }}>{data.position}</Heading>
            <Flex align={'center'} gap={'4'}>
              <IconButton
                size={'3'}
                onClick={() => {
                  setStatus('edit');
                  setIsOpen(true);
                }}
              >
                <Pencil />
              </IconButton>
              <IconButton size={'3'} variant='surface'>
                <Trash />
              </IconButton>
            </Flex>
          </Flex>
          <Flex width={'100%'} gap={'10px'}>
            <Box width={'400px'} height={'200px'} position={'relative'}>
              <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${data.path}`} alt={String(data?.alt)} fill style={{ borderRadius: 8, objectFit: 'cover', objectPosition: 'center' }} />
            </Box>
            <Flex width={'77.5%'} direction={'column'} mt={'2'} style={{ justifyContent: 'space-between' }}>
              <Flex direction={'column'} gap={'3'}>
                <TextField placeholder='متن چایگزین' readOnly style={{ borderRadius: 12 }} />
                <TextArea placeholder='توضیحات تصویر' readOnly style={{ borderRadius: 12 }} />
              </Flex>
              {data.slug && (
                <Flex p={'12px 16px'} gap={'2'} align={'center'}>
                  <IconButton variant='surface' size={'1'}>
                    <CopyIcon style={{ color: colorPalette.blue[10] }} />
                  </IconButton>
                  <Text {...typoVariant.body3} style={{ color: colorPalette.blue[11] }}>
                    {data.slug}
                  </Text>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Grid>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader
          title={status === 'create' ? 'افزودن آگهی' : 'ویرایش آگهی'}
          handleClose={() => {
            setIsOpen(false);
          }}
        />
        <Grid minHeight={'286px'} p={'4'} gapY={'5'}>
          {Boolean(data?.path) === false && Boolean(watch('localPic')) === false ? (
            <Controller
              name={'imageFile'}
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
                          <Button size={'3'} type='button' style={{ width: 'fit-content' }}>
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
                <Image src={watch('isReset') ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${data?.path}` : watch('localPic')} alt='ugliglhglk' fill style={{ borderRadius: 8, objectFit: 'fill' }} />
              </Box>

              <Grid width={'100%'} gap={'5'} columns={'3'}>
                <Controller name='sponsor' control={control} render={({ field }) => <TextField {...field} placeholder='نام اسپانسر' />} />
                <Controller name='website' control={control} render={({ field }) => <TextField {...field} placeholder='سایت' />} />
                <Controller name='socialMedia' control={control} render={({ field }) => <TextField {...field} placeholder='شبکه اجتماعی' />} />
              </Grid>
              <Controller name='alt' control={control} render={({ field }) => <TextField {...field} placeholder='متن جایگزین' />} />
              <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' rows={6} />} />
              <Controller name='brief' control={control} render={({ field }) => <TextArea {...field} placeholder='شزح مختصر' rows={6} />} />
            </>
          )}
        </Grid>
        <ModalAction
          submitButtonText='ثبت و ارسال'
          closeButtonText='لفو و بازگشت'
          onCloseButton={() => {
            setIsOpen(false);
          }}
          isDisableSubmitBtn={false}
          onSubmit={onSubmit}
          isLoading={false}
          isSubmit={false}
        />
      </Modal>
    </>
  );
};

export default AdsDetailCard;

/**
 * styled-component
 * _______________________________________________________________________________
 */
