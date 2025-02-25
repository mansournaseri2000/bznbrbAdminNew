'use client';

import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { PlusIcon } from '@radix-ui/react-icons';
import { CopyIcon } from '@radix-ui/react-icons';
import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import imageCompression from 'browser-image-compression';

import { createAd, deleteAd, editAds } from '@/api/advertizement';
import { Box, Button, Flex, Grid, Heading, IconButton, Modal, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Camera, Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CreateAdBody, EditADsBody } from '@/types/advertizement/advertizement';

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
    townId: number | null;
    cityId: number | null;
    provincesId: number | null;
    categoryId: number | null;
  };
};

type ModalStateType = {
  isOpen: boolean;
  key: 'edit' | 'delete' | 'create';
};

const AdsDetailCard = ({ data }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const [modalState, setModalState] = useState<ModalStateType>({ isOpen: false, key: 'create' });
  const queryClient = useQueryClient();

  const methods = useForm<any>({
    defaultValues: {
      imageFile: modalState.key === 'edit' ? data.path : null,
      localPic: '',
      description: modalState.key === 'edit' ? data.description : '',
      alt: modalState.key === 'edit' ? data.alt : '',
      slug: modalState.key === 'edit' ? data.slug : '',
      summery: modalState.key === 'edit' ? data.summery : '',
      website: modalState.key === 'edit' ? data.website : '',
      socialMedia: modalState.key === 'edit' ? data.socialMedia : '',
      sponsor: modalState.key === 'edit' ? data.sponsor : '',
      isReset: true,
    },
  });
  const { control, watch, setValue } = methods;
  console.log('AdsDetailCardAdsDetailCardAdsDetailCardAdsDetailCard', data);

  /**
   * useEffect
   * _______________________________________________________________________________
   */
  useEffect(() => {
    setValue('imageFile', modalState.key === 'edit' ? data.path : null);
    setValue('description', modalState.key === 'edit' ? data.description : '');
    setValue('alt', modalState.key === 'edit' ? data.alt : '');
    setValue('slug', modalState.key === 'edit' ? data.slug : '');
    setValue('summery', modalState.key === 'edit' ? data.summery : '');
    setValue('website', modalState.key === 'edit' ? data.website : '');
    setValue('socialMedia', modalState.key === 'edit' ? data.socialMedia : '');
    setValue('sponsor', modalState.key === 'edit' ? data.sponsor : '');
    setValue('isReset', true);
  }, [modalState.key]);

  console.log('watch', watch());

  /**
   * services
   * _______________________________________________________________________________
   */
  const { mutate: editAdsMutate, isPending: editAdsPending } = useMutation({
    mutationFn: async (body: EditADsBody) => await editAds(body),
    onSuccess: data => {
      if (data.status) {
        queryClient.invalidateQueries({ queryKey: ['ads-page-type'] });
        ToastSuccess('آگهی مورد نظر با موفقیت ویرایش شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('مشکلی پیش آمده است. لطفا مجددا تلاش کنید');
      }
    },
  });

  const { mutate: createAdMutate, isPending: createAdPending } = useMutation({
    mutationFn: async (body: CreateAdBody) => await createAd(body),
    onSuccess: data => {
      if (data.status) {
        queryClient.invalidateQueries({ queryKey: ['ads-page-type'] });
        ToastSuccess('آگهی مورد نظر با موفقیت ایجاد شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('مشکلی پیش آمده است. لطفا مجددا تلاش کنید');
      }
    },
  });

  const { mutate: deleteAdsMutate, isPending: deleteAdsPending } = useMutation({
    mutationFn: async () => await deleteAd({ id: data.id, type: 'ADS' }),
    onSuccess: data => {
      if (data.status) {
        queryClient.invalidateQueries({ queryKey: ['ads-page-type'] });
        ToastSuccess('آگهی مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('مشکلی پیش آمده است. لطفا مجددا تلاش کنید');
      }
    },
  });

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

  const onSubmit = () => {
    if (modalState.key === 'edit') {
      editAdsMutate({
        id: data.id,
        type: 'ADS',
        alt: watch('alt'),
        description: watch('description'),
        summery: watch('summery'),
        townId: data.townId,
        socialMedia: watch('socialMedia'),
        sponsor: watch('sponsor'),
        website: watch('website'),
      });
    } else if (modalState.key === 'create') {
      createAdMutate({
        type: 'ADS',
        description: watch('description'),
        page: data.page,
        holder: data.position,
        alt: watch('alt'),
        slug: watch('slug'),
        summery: watch('summery'),
        file: watch('imageFile'),
        socialMedia: watch('socialMedia'),
        sponsor: watch('sponsor'),
        website: watch('website'),
        townId: data.townId,
        provinceId: data.provincesId,
        cityId: data.cityId,
        categoryId: data.categoryId,

      });
    }
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <>
      {!Boolean(data?.path) && (
        <Flex align={'center'} position={'relative'} minHeight={'200px'} p={'16px'} justify={'center'} style={{ borderRadius: '8px', border: `1px dashed ${colorPalette.blue[9]}` }}>
          <Text style={{ position: 'absolute', color: colorPalette.gray[8], right: '20px', fontSize: '90px' }}>{data?.position}</Text>
          <Flex gap={'4px'} align={'center'} onClick={() => setModalState({ isOpen: true, key: 'create' })} style={{ cursor: 'pointer' }}>
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
              <IconButton size={'3'} onClick={() => setModalState({ isOpen: true, key: 'edit' })}>
                <Pencil />
              </IconButton>
              <IconButton size={'3'} variant='surface' onClick={() => setModalState({ isOpen: true, key: 'delete' })}>
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
                <TextField placeholder='متن چایگزین' readOnly value={data.alt ?? ''} style={{ borderRadius: 12 }} />
                <TextArea placeholder='توضیحات تصویر' readOnly value={data.description ?? ''} style={{ borderRadius: 12 }} />
              </Flex>
              {data.path && (
                <Flex p={'12px 16px'} gap={'2'} align={'center'}>
                  <IconButton variant='surface' size={'1'}>
                    <CopyIcon style={{ color: colorPalette.blue[10] }} />
                  </IconButton>
                  <Text {...typoVariant.body3} style={{ color: colorPalette.blue[11] }}>
                    {data.path}
                  </Text>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Grid>
      )}
      {/*
       **
       * Modal
       * _______________________________________________________________________________
       */}
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {/*
         **
         * create and edit modal
         * _______________________________________________________________________________
         */}
        {modalState.key !== 'delete' && (
          <>
            <ModalHeader title={modalState.key === 'create' ? 'افزودن آگهی' : 'ویرایش آگهی'} handleClose={() => setModalState({ ...modalState, isOpen: false })} />
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
                    {modalState.key === 'create' && (
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
                  <Controller name='summery' control={control} render={({ field }) => <TextArea {...field} placeholder='شزح مختصر' rows={6} />} />
                </>
              )}
            </Grid>
            <ModalAction
              submitButtonText='ثبت و ارسال'
              closeButtonText='لفو و بازگشت'
              onCloseButton={() => setModalState({ ...modalState, isOpen: false })}
              isDisableSubmitBtn={false}
              onSubmit={onSubmit}
              isLoading={modalState.key === 'edit' ? editAdsPending : modalState.key === 'create' && createAdPending}
              isSubmit={false}
            />
          </>
        )}
        {/*
         **
         * delete modal
         * _______________________________________________________________________________
         */}
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>
              آیا از حذف آگهی <span style={{ fontWeight: 'bold', color: 'red' }}>{data.position}</span> اطمینان دارید؟
            </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteAdsMutate()}>
                <Text {...typoVariant.body3}>{deleteAdsPending ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
      </Modal>
    </>
  );
};

export default AdsDetailCard;

/**
 * styled-component
 * _______________________________________________________________________________
 */
