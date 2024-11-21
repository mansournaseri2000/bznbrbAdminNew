'use client';

import { styled } from 'styled-components';

import { colorPalette } from '@/theme';

import { Flex } from '../primitives';

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
