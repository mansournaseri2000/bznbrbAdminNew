'use client';

import React, { forwardRef } from 'react';

import { PlusIcon } from '@radix-ui/react-icons';
import { Spinner } from '@radix-ui/themes';
import styled from 'styled-components';

import { Flex, IconButton, TextField } from '@/libs/primitives';
import { Boxshadow, colorPalette } from '@/theme';

type CustomAddItemProps = {
  placeholder: string;
  onClick: VoidFunction;
  defaultValue?: string;
  isLoading?: boolean;
};

const CustomAddItem = forwardRef<HTMLInputElement, CustomAddItemProps>(({ placeholder, defaultValue, isLoading, onClick, ...rest }, ref) => {
  return (
    <Wrapper height={'fit-content'} gap={'2'}>
      <CustomTextField {...rest} ref={ref} placeholder={placeholder} variant='surface' defaultValue={defaultValue} />
      {isLoading ? (
        <Spinner style={{ marginLeft: 20 }} />
      ) : (
        <IconButton size={'4'} className='icon-button' variant='surface' onClick={onClick}>
          <PlusIcon style={{ color: colorPalette.pink[9] }} />
        </IconButton>
      )}
    </Wrapper>
  );
});

CustomAddItem.displayName = 'CustomAddItem';

export default CustomAddItem;

const Wrapper = styled(Flex)`
  width: 100%;
  align-items: center;
  border: 1px solid ${colorPalette.gray[7]};
  border-radius: 12px;
  padding: 6px;
  &:focus-within {
    background-color: ${colorPalette.blue[2]};
    box-shadow: ${Boxshadow.shadow1};
    border: 1px solid ${colorPalette.gray[3]};
  }
  .icon-button {
    @media (hover: hover) {
      background-color: transparent !important;
    }
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
