'use client';

import React, { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { Flex, IconButton, Text, TextField } from '@/libs/primitives';
import { Search } from '@/public/icon';
import { Boxshadow, colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type CustomSearchProps = {
  placeholder: string;
  defaultValue?: string;
  type?: 'search' | 'input';
  inputType?: 'text' | 'number';
};

const CustomSearch = forwardRef<HTMLDivElement, CustomSearchProps>(({ placeholder, defaultValue, type = 'search', inputType, ...rest }, ref) => {
  const queryClient = useQueryClient();
  const { setValue } = useFormContext();
  return (
    <Wrapper {...rest} ref={ref} height={'fit-content'}>
      <CustomTextField {...rest} ref={ref as any} placeholder={placeholder} variant='surface' defaultValue={defaultValue} type={inputType} />
      {type === 'search' && (
        <IconButton
          size={'4'}
          variant='soft'
          onClick={() => {
            setValue('page', 1);
            queryClient.invalidateQueries({ queryKey: ['article-list'] });
            queryClient.invalidateQueries({ queryKey: ['user-list'] });
          }}
        >
          <Search />
        </IconButton>
      )}
      {type === 'input' && (
        <Text {...typoVariant.body2} style={{ color: colorPalette.pink[9], marginInlineEnd: 16 }}>
          ریال
        </Text>
      )}
    </Wrapper>
  );
});

CustomSearch.displayName = 'CustomSearch';

export default CustomSearch;

const Wrapper = styled(Flex)`
  max-height: 48px;
  align-items: center;
  border: 1px solid ${colorPalette.gray[7]};
  border-radius: 12px;
  padding-inline-start: 8px;
  &:focus-within {
    background-color: ${colorPalette.blue[2]};
    box-shadow: ${Boxshadow.shadow1};
    border: 1px solid ${colorPalette.gray[3]};
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
