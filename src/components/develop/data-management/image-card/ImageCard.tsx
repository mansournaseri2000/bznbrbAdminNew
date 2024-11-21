import React from 'react';

import Image from 'next/image';

import { Box, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Download, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  image: string;
  title: string;
};

const ImageCard = ({ image, title }: Props) => {
  return (
    <Grid width={'100%'} p={'12px'} gap={'10px'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Box width={'100%'} height={'200px'} position={'relative'}>
        <Image src={image} alt='تصویر مکان ارسال شده' fill style={{ borderRadius: 8 }} />
      </Box>
      <Text {...typoVariant.body2} style={{ color: colorPalette.gray[11], width: 'fit-content' }}>
        {title}
      </Text>
      <Flex align={'center'} gap={'10px'}>
        <IconButton size={'3'}>
          <Download />
        </IconButton>
        <IconButton size={'3'} colorVariant='PINK' variant='surface'>
          <Trash />
        </IconButton>
      </Flex>
    </Grid>
  );
};

export default ImageCard;
