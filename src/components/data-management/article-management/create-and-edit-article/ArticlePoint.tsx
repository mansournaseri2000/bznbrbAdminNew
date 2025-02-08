'use client';

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { PlusIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

import { Flex, Grid, IconButton, Text, TextField } from '@/libs/primitives';
import { Close } from '@/public/icon';
import { Boxshadow, colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const ArticlePoint = () => {
  const { setValue, watch } = useFormContext();
  const [mainPoint, setMainPoint] = useState(Boolean(watch('mainPoint')) ? watch('mainPoint') : '');

  const removeArticlePoint = () => {
    setValue('mainPoint', null);
    setMainPoint('');
  };

  return (
    <Grid width={'100%'} gapY={'5'}>
      <Flex width={'40%'} align={'center'} gap={'3'}>
        <Wrapper height={'fit-content'} gap={'2'} disabled={Boolean(watch('mainPoint'))}>
          <CustomTextField placeholder='آیدی نقطه مرتبط اصلی' value={mainPoint} disabled={Boolean(watch('mainPoint'))} type={'number'} onChange={e => setMainPoint(e.target.value)} variant='surface' />
          <IconButton
            onClick={() => {
              setValue('mainPoint', mainPoint);
              setMainPoint('');
            }}
            size={'4'}
            type='button'
            className='icon-button'
            variant='surface'
            disabled={Boolean(watch('mainPoint'))}
          >
            <PlusIcon style={{ color: colorPalette.pink[9] }} />
          </IconButton>
        </Wrapper>
      </Flex>
      {Boolean(watch('mainPoint')) ? (
        <Flex width={'fit-content'} gap={'3'} p={'9.5px 16px'} align={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
            {watch('mainPoint')}
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

const CustomTextField = styled(TextField)`
  &.rt-TextFieldRoot:where(.rt-variant-surface) {
    border: none;
    outline: none;
    box-shadow: none;
    margin-block-end: -10px;
  }
  &:focus-within {
    outline: none !important;
    border: none !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  @media (hover: hover) {
    background-color: transparent !important;
  }
`;

const Wrapper = styled(Flex)<{ disabled: boolean }>`
  width: 100%;
  align-items: center;
  border: 1px solid ${colorPalette.gray[7]};
  background-color: ${({ disabled }) => (disabled ? colorPalette.gray[5] : 'transparent')};
  border-radius: 12px;
  padding: 6px;
  &:focus-within {
    background-color: ${colorPalette.blue[2]};
    box-shadow: ${Boxshadow.shadow1};
    border: 1px solid ${colorPalette.gray[3]};
  }
  .icon-button {
    background-color: ${({ disabled }) => (disabled ? colorPalette.gray[5] : 'transparent')};
    @media (hover: hover) {
      background-color: transparent !important;
    }
  }
`;
