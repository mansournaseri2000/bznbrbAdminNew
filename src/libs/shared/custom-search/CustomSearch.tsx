'use client';

import React from 'react';

import styled from 'styled-components';

import { Flex, IconButton, TextField } from '@/libs/primitives';
import { Search } from '@/public/icon';
import { Boxshadow, colorPalette } from '@/theme';

type Props = {
  placeholder: string;
  onClick: () => void;
};

const CustomSearch = (props: Props) => {
  const { placeholder, onClick } = props;
  return (
    <Wrapper>
      <CustomTextField placeholder={placeholder} variant='surface' />
      <IconButton size={'4'} variant='soft' onClick={onClick}>
        <Search />
      </IconButton>
    </Wrapper>
  );
};

export default CustomSearch;

const Wrapper = styled(Flex)`
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
