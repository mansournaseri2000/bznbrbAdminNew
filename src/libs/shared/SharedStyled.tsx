'use client';

import { styled } from 'styled-components';

import { Boxshadow, colorPalette } from '@/theme';

import { Flex, TextField } from '../primitives';

export const Badge = styled(Flex)`
  padding: 2px 12px;
  border-radius: 8px;
  background-color: ${colorPalette.gray[3]};
  font-size: 10px;
  align-items: center;
`;

export const Dot = styled.div<{ color?: string }>`
  height: 0.1px;
  border-top: ${({ color }) => (color ? `1px dashed ${color}` : `1px dashed ${colorPalette.gray[12]}`)};
  width: -webkit-fill-available;
  opacity: 30%;
`;

export const InputWrapper = styled(Flex)`
  max-height: 48px;
  align-items: center;
  border: 1px solid ${colorPalette.gray[7]};
  border-radius: 12px;
  &:focus-within {
    background-color: ${colorPalette.blue[2]};
    box-shadow: ${Boxshadow.shadow1};
    border: 1px solid ${colorPalette.gray[3]};
  }
`;

export const CustomTextField = styled(TextField)`
  &.rt-TextFieldRoot:where(.rt-variant-surface) {
    border: none;
    outline: none;
    box-shadow: none;
    margin-block-end: -10px;
    background-color: transparent !important;
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
