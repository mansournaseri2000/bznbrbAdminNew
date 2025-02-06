'use client';

import React from 'react';

import Image from 'next/image';

import { Box, Checkbox, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Download, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  picture: string;
  description: string;
  isTop: boolean;
};

const ImageCard = ({ picture, description }: Props) => {
  /**
   * Methods
   * _______________________________________________________________________________
   */
  const handleDownload = () => {
    const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL_image}${picture}`;
    window.open(imageUrl, '_blank');
  };
  return (
    <Grid width={'100%'} p={'12px'} gap={'10px'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Box width={'100%'} height={'200px'} position={'relative'}>
        <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${picture}`} alt='تصویر مکان ارسال شده' fill style={{ borderRadius: 8 }} />
      </Box>
      <Text {...typoVariant.body2} style={{ color: colorPalette.gray[11], width: 'fit-content' }}>
        {description}
      </Text>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Checkbox label='تصویر برتر' />
        <Flex align={'center'} gap={'10px'}>
          <IconButton size={'3'} onClick={handleDownload}>
            <Download />
          </IconButton>
          <IconButton size={'3'} colorVariant='PINK' variant='surface' disabled>
            <Trash />
          </IconButton>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default ImageCard;
