'use client';

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { PlusIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

import { Flex, Grid, IconButton, Text, TextField } from '@/libs/primitives';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const RelatedPoint = () => {
  const { setValue } = useFormContext();
  const [points, setPoints] = useState<number[]>([]);
  const [point, setPoint] = useState<number | string>('');

  const addRelatedPoint = () => {
    if (point) {
      const newPoints = [...points, Number(point)];
      setPoints(newPoints);
      setValue('places', newPoints);
      setPoint('');
    }
  };

  const removeRelatedPoint = (index: number) => {
    const newPoints = points.filter((_, i) => i !== index);
    setPoints(newPoints);
    setValue('places', newPoints);
  };
  return (
    <Grid width={'100%'} gapY={'5'}>
      <Flex width={'50%'} align={'center'} gap={'3'}>
        <TextField type='number' value={point} onChange={e => setPoint(e.target.value)} placeholder='آیدی نقطه مرتبط اصلی' />
        <IconButton type='button' variant='soft' size={'3'} onClick={addRelatedPoint} style={{ marginBottom: '10px' }}>
          <PlusIcon />
        </IconButton>
      </Flex>
      {points.length > 0 ? (
        <Flex width={'100%'} gap={'3'} wrap={'wrap'}>
          {points.map((p, index) => (
            <Flex key={index} width={'fit-content'} gap={'3'} p={'9.5px 16px'} align={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                {p}
              </Text>
              <IconButton size={'1'} variant='surface' onClick={() => removeRelatedPoint(index)}>
                <CustomCloseIcon />
              </IconButton>
            </Flex>
          ))}
        </Flex>
      ) : (
        <Flex p={'54.5px 16px'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
          <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
            هنوز نقطه ای اضافه نشده است.
          </Text>
        </Flex>
      )}
    </Grid>
  );
};

export default RelatedPoint;

const CustomCloseIcon = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
