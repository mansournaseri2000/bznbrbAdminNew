'use client';

import React, { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { PlusIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

import { Flex, Grid, IconButton, Text, TextField } from '@/libs/primitives';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const RelatedPoint = () => {
  const { setValue, watch, control } = useFormContext();
  const [pointId, setPointId] = useState<number | string>('');
  const placeRelationType = useWatch({ control, name: 'placeRelationType' }) || [];

  const handleRemove = (id: number) => {
    const filteredItems = placeRelationType.filter((item: number) => item !== id);
    setValue('placeRelationType', filteredItems);
  };

  return (
    <Grid width='100%' gapY='5'>
      <Flex width='50%' align='center' gap='3'>
        <TextField type='number' value={pointId} onChange={e => setPointId(e.target.value)} placeholder='آیدی نقطه مرتبط اصلی' />
        <IconButton
          type='button'
          variant='soft'
          size='3'
          style={{ marginBottom: '10px' }}
          onClick={() => {
            if (pointId) {
              const newPoints = [...(watch('placeRelationType') || []), Number(pointId)];
              setValue('placeRelationType', newPoints); // Update react-hook-form state
              setPointId(''); // Reset input
            }
          }}
        >
          <PlusIcon />
        </IconButton>
      </Flex>

      {placeRelationType.length > 0 ? (
        <Flex width='100%' gap='3' wrap='wrap'>
          {placeRelationType.map((p: number) => (
            <Flex key={p} width='fit-content' gap='3' p='9.5px 16px' align='center' style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                {p}
              </Text>
              <IconButton size='1' variant='surface' onClick={() => handleRemove(p)}>
                <CustomCloseIcon />
              </IconButton>
            </Flex>
          ))}
        </Flex>
      ) : (
        <Flex p='54.5px 16px' style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
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
