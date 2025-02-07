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
  disabled?: boolean;
  fieldType?: 'number' | 'search' | 'time' | 'text' | 'hidden' | 'tel' | 'url' | 'email' | 'date' | 'datetime-local' | 'month' | 'password' | 'week' | undefined;
};

const CustomAddItem = forwardRef<HTMLInputElement, CustomAddItemProps>(({ placeholder, defaultValue, fieldType, disabled, isLoading, onClick, ...rest }, ref) => {
  return (
    <Wrapper height={'fit-content'} gap={'2'} disabled={disabled as any}>
      <CustomTextField {...rest} ref={ref} placeholder={placeholder} disabled={disabled} type={fieldType} variant='surface' defaultValue={defaultValue} />
      {isLoading ? (
        <Spinner style={{ marginLeft: 20 }} />
      ) : (
        <IconButton size={'4'} type='button' className='icon-button' variant='surface' disabled={disabled} onClick={onClick}>
          <PlusIcon style={{ color: colorPalette.pink[9] }} />
        </IconButton>
      )}
    </Wrapper>
  );
});

CustomAddItem.displayName = 'CustomAddItem';

export default CustomAddItem;

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
