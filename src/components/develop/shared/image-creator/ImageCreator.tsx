import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { Box, Flex, Grid, IconButton, TextArea, TextField } from '@/libs/primitives';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';

const ImageCreator = () => {
  const methods = useForm({ defaultValues: { link: '', text: '', description: '' } });
  const { control } = methods;
  return (
    <Grid width={'100%'} gapX={'10px'} p={'12px'} style={{ gridTemplateColumns: 'auto 2fr auto', border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Box width={'328px'} height={'200px'} position={'relative'}>
        <Image src={'/image/add-point-image.png'} alt='تصویر نقطه' fill style={{ borderRadius: 8 }} />
      </Box>
      <Flex direction={'column'} gap={'2'}>
        <Controller name='link' control={control} render={({ field }) => <TextField {...field} placeholder='link' style={{ borderRadius: 12 }} />} />
        <Controller name='text' control={control} render={({ field }) => <TextField {...field} placeholder='Alt Text' style={{ borderRadius: 12 }} />} />
        <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' style={{ height: 88, borderRadius: 12 }} />} />
      </Flex>
      <Flex direction={'column'} gap={'4'}>
        {/* TODO: change to upload file */}
        <IconButton size={'3'} type='button'>
          <Pencil />
        </IconButton>
        <IconButton size={'3'} variant='surface' colorVariant='PINK'>
          <Trash />
        </IconButton>
      </Flex>
    </Grid>
  );
};

export default ImageCreator;
