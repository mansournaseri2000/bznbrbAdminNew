'use client';

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import styled from 'styled-components';

import { Flex, Grid, IconButton, Text } from '@/libs/primitives';
import CustomAddItem from '@/libs/shared/custom-add-item/CustomAddItem';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { PlacesOptions } from '@/types/data-management/article';

const ArticlePoint = () => {
  const { setValue, watch } = useFormContext();
  const [point, setPoint] = useState<number | string>();

  const mainPlaceId = watch('places')?.find((place: PlacesOptions) => place.placeRelationType === 'MAIN')?.placeId;

  const addArticlePoint = () => {
    if (!point) return;

    const newPlace: PlacesOptions = {
      placeId: Number(point),
      placeRelationType: 'MAIN',
    };

    const currentPlaces: PlacesOptions[] = watch('places') || [];

    setValue('places', [...currentPlaces, newPlace]);
    setPoint('');
  };

  const removeArticlePoint = () => {
    setValue('places', null);
  };

  return (
    <Grid width={'100%'} gapY={'5'}>
      <Flex width={'40%'} align={'center'} gap={'3'}>
        <CustomAddItem disabled={Boolean(mainPlaceId)} placeholder='آیدی نقطه مرتبط اصلی' fieldType='number' onChange={e => setPoint(e.target.value)} onClick={() => addArticlePoint()} />
      </Flex>
      {Boolean(watch('places')) ? (
        <Flex width={'fit-content'} gap={'3'} p={'9.5px 16px'} align={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
            {mainPlaceId}
          </Text>
          <IconButton size={'1'} variant='surface' onClick={() => removeArticlePoint()}>
            <CustomClose />
          </IconButton>
        </Flex>
      ) : (
        <Flex>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11], marginRight: 8 }}>
            در حال حاضر نقطه ای وجود ندارد
          </Text>
        </Flex>
      )}
    </Grid>
  );
};

export default ArticlePoint;

const CustomClose = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
