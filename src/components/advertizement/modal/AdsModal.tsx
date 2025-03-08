import React, { useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import imageCompression from 'browser-image-compression';

import { Box, Button, Flex, Grid, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { Camera, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  type: 'create' | 'edit';
  isOpen: boolean;
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
    townId: number | null;
    cityId: number | null;
    provincesId: number | null;
    categoryId: number | null;
  };
  onSubmit: (obj: any) => void;
  onClose: () => void;
  isLoading: boolean;
};

const AdsModal = ({ type, data, onClose, onSubmit, isLoading }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const methods = useForm({
    defaultValues: {
      alt: type === 'edit' ? data.alt : '',
      description: type === 'edit' ? data.description : '',
      imageFile: type === 'edit' ? data.path : null,
      isReset: true,
      localPic: '',
      summery: type === 'edit' ? data.summery : '',
      website: type === 'edit' ? data.website : '',
      socialMedia: type === 'edit' ? data.socialMedia : '',
      sponsor: type === 'edit' ? data.sponsor : '',
      page: data.page,
      holder: data.position,
      townId: data.townId,
      provinceId: data.provincesId,
      cityId: data.cityId,
      categoryId: data.categoryId,
    },
  });

  const { setValue, watch, control } = methods;

  /**
   * Hooks
   * _______________________________________________________________________________
   */
  useEffect(() => {
    setValue('imageFile', type === 'edit' ? data.path : null);
    setValue('description', type === 'edit' ? data.description : '');
    setValue('alt', type === 'edit' ? data.alt : '');
    setValue('summery', type === 'edit' ? data.summery : '');
    setValue('website', type === 'edit' ? data.website : '');
    setValue('socialMedia', type === 'edit' ? data.socialMedia : '');
    setValue('sponsor', type === 'edit' ? data.sponsor : '');
    setValue('isReset', true);
  }, [type]);

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
      setValue('imageFile', compressedImage as any);
    }
  };

  const handleOnSubmit = () => {
    onSubmit(watch());
  };

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
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
              {type === 'create' && (
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
                    name={'localPic'}
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
              <Controller
                name='sponsor'
                control={control}
                render={({ field }) => <TextField {...field} label='نام اسپانسر' placeholder='نام اسپانسر' selectedValue={Boolean(field.value)} value={field.value ?? ''} />}
              />

              <Controller
                name='website'
                control={control}
                render={({ field }) => <TextField {...field} label='سایت' placeholder='سایت' selectedValue={Boolean(field.value)} value={field.value ?? ''} />}
              />
              <Controller
                name='socialMedia'
                control={control}
                render={({ field }) => <TextField {...field} label='شبکه اجتماعی' placeholder='شبکه اجتماعی' selectedValue={Boolean(field.value)} value={field.value ?? ''} />}
              />
            </Grid>
            <Controller
              name='alt'
              control={control}
              render={({ field }) => <TextField {...field} label='متن جایگزین' placeholder='متن جایگزین' selectedValue={Boolean(field.value)} value={field.value ?? ''} />}
            />
            <Controller
              name='description'
              control={control}
              render={({ field }) => <TextArea {...field} label='توضیحات تصویر' placeholder='توضیحات تصویر' selectedValue={Boolean(field.value)} rows={6} value={field.value ?? ''} />}
            />
            <Controller
              name='summery'
              control={control}
              render={({ field }) => <TextArea {...field} label='شرح مختصر' placeholder='شزح مختصر' selectedValue={Boolean(field.value)} rows={6} value={field.value ?? ''} />}
            />
          </>
        )}
      </Grid>
      <ModalAction submitButtonText='ثبت و ارسال' closeButtonText='لفو و بازگشت' isDisableSubmitBtn={false} isSubmit={false} onSubmit={handleOnSubmit} onCloseButton={onClose} isLoading={isLoading} />
    </>
  );
};

export default AdsModal;
