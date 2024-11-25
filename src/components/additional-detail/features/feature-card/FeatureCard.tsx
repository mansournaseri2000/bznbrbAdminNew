'use client';

import React, { useState } from 'react';

import { Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import FeatureModal from '../feature-modal/FeatureModal';

type Props = {
  title: string;
};

const FeatureCard = (props: Props) => {
  const { title } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Grid width={'100%'} maxWidth={'120px'} p={'12px 20px'} gapY={'4'} justify={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
        <Text {...typoVariant.description1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
          {title}
        </Text>
        <Flex align={'center'} gap={'4'}>
          <IconButton variant='surface' onClick={() => setIsOpen(true)}>
            <Pencil />
          </IconButton>
          <IconButton variant='surface'>
            <Trash />
          </IconButton>
        </Flex>
      </Grid>
      <FeatureModal isOpen={isOpen} setIsOpen={setIsOpen} type='edit_feature' />
    </>
  );
};

export default FeatureCard;
