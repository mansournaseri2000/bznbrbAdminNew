'use client';

import React, { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

import styled from 'styled-components';

import { Flex, IconButton, TextField } from '@/libs/primitives';
import { Search } from '@/public/icon';
import { Boxshadow, colorPalette } from '@/theme';

type CustomSearchProps = {
  placeholder: string;
  onClick: () => void;
  defaultValue?: string;
};

const CustomSearch = forwardRef<HTMLDivElement, CustomSearchProps>(({ placeholder, defaultValue, onClick, ...rest }, ref) => {
  const { setValue } = useFormContext();
  return (
    <Wrapper {...rest} ref={ref} height={'fit-content'}>
      <CustomTextField
        {...rest}
        ref={ref as any}
        placeholder={placeholder}
        variant='surface'
        defaultValue={defaultValue}
        onChange={() => {
          setValue('page', 1);
        }}
      />
      <IconButton size={'4'} variant='soft' onClick={onClick}>
        <Search />
      </IconButton>
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
  padding-inline-start: 1rem;
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
