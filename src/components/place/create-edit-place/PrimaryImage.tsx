import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import Image from 'next/image';

import { Box, Button, Flex, Grid, Heading, IconButton, Text, TextArea, TextField } from '@/libs/primitives';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const PrimaryImage = () => {
  // TODO: define props for image
  const methods = useForm({ defaultValues: { text: '', description: '' } });
  const { control } = methods;

  return (
    <>
      <Flex direction={'column'} gap={'6'} align={'center'} py={'87.5px'}>
        <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
          هنوز تصویر شاخصی اضافه نشده است.
        </Heading>
        <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
          دقت داشته باشید که تصویر شاخص اولین تصویر نقطه و تصویری است که بر روی کارت <br /> نقطه نمایش داده می شود!
        </Text>
        <Button size={'3'}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}>افزودن تصویر شاخص</Text>
          </Flex>
        </Button>
      </Flex>
      <FormProvider {...methods}>
        <Grid width={'100%'} gapX={'10px'} p={'12px'} style={{ gridTemplateColumns: 'auto 2fr auto', border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
          <Box width={'610px'} height={'342px'} position={'relative'}>
            <Image src={'/image/add-point-image.png'} alt='تصویر شاخص' fill style={{ borderRadius: 8 }} />
          </Box>
          <Flex direction={'column'} gap={'2'}>
            <Controller name='text' control={control} render={({ field }) => <TextField {...field} placeholder='Alt Text' style={{ borderRadius: 12 }} />} />
            <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' rows={6} style={{ borderRadius: 12 }} />} />
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
      </FormProvider>
    </>
  );
};

export default PrimaryImage;
