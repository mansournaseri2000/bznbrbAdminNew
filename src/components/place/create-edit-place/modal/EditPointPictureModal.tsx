import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import imageCompression from 'browser-image-compression';

import { Box, Button, Flex, Grid, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { Camera } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  state: string;
  originPic: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditPointPictureModal = ({ setIsOpen, originPic }: Props) => {
  const methods = useForm({ defaultValues: { pic: '', localPic: '', province: '', city: '', town: '', alternativeText: '', description: '', briefDescription: '' } });
  const { control, watch, setValue } = methods;

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
      // setValue(name, compressedImage);
      // setValue(resetStore, false);
    }
  };
  return (
    <>
      <Grid minHeight={'286px'} p={'4'} gapY={'5'}>
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

        {Boolean(watch('pic')) && (
          <>
            <Box width={'538px'} height={'350px'} position={'relative'} style={{ borderRadius: 8, border: `1px solid ${colorPalette.gray[3]}` }}>
              <Image src={originPic ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${originPic}` : watch('localPic')} alt='' fill style={{ borderRadius: 8, objectFit: 'fill' }} />
            </Box>
            <Grid width={'100%'} gap={'5'} columns={'3'}>
              <Controller name='province' control={control} render={({ field }) => <TextField {...field} placeholder='استان' />} />
              <Controller name='city' control={control} render={({ field }) => <TextField {...field} placeholder='شهرستان' />} />
              <Controller name='town' control={control} render={({ field }) => <TextField {...field} placeholder='شهر' />} />
            </Grid>
            <Controller name='alternativeText' control={control} render={({ field }) => <TextField {...field} placeholder='متن جایگزین' />} />
            <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' rows={6} />} />
            <Controller name='briefDescription' control={control} render={({ field }) => <TextArea {...field} placeholder='شزح مختصر' rows={6} />} />
          </>
        )}
      </Grid>
      <ModalAction submitButtonText='ثبت و ارسال' closeButtonText='لفو و بازگشت' onCloseButton={() => setIsOpen(false)} />
    </>
  );
};

export default EditPointPictureModal;
