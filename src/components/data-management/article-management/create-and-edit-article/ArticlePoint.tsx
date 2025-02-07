'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import styled from 'styled-components';

import { Flex, Grid, IconButton, Text } from '@/libs/primitives';
import CustomAddItem from '@/libs/shared/custom-add-item/CustomAddItem';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { PlacesOptions } from '@/types/data-management/article';

const ArticlePoint = () => {
  const { setValue, watch, control } = useFormContext();
  const [point, setPoint] = useState<number | string>();

  const mainPlaceId = watch('places')?.find((place: PlacesOptions) => place.placeRelationType === 'MAIN')?.placeId;

  // const addArticlePoint = () => {
  //   setValue('places', point);
  //   setPoint('');
  // };

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
        {/* <TextField type='number' value={point} onChange={e => setPoint(e.target.value)} placeholder='آیدی نقطه مرتبط اصلی' disabled={Boolean(watch('places'))} />
        <IconButton type='button' variant='soft' size={'3'} onClick={() => addArticlePoint()} disabled={Boolean(watch('places'))} style={{ marginBottom: '10px' }}>
          <PlusIcon />
        </IconButton> */}
        <Controller
          name='places'
          control={control}
          render={({ field }) => <CustomAddItem {...field} disabled={Boolean(mainPlaceId)} placeholder='آیدی نقطه مرتبط اصلی' fieldType='number' onClick={() => addArticlePoint()} />}
        />
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
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
            نقطه ی مرتبط موجود نیست
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
