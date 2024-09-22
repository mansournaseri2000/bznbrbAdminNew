'use client';

import React, { ForwardedRef } from 'react';

import { Button } from '@radix-ui/themes';
import { styled } from 'styled-components';

import { colorPalette } from '@/theme';

type AppButtonProps = React.ComponentProps<typeof Button> & {
  children: React.ReactNode;
};

const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ children, ...props }: AppButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
    <ButtonStyle ref={forwardedRef} {...props}>
      {children}
    </ButtonStyle>
  )
);

AppButton.displayName = 'Button';

export default AppButton;

const ButtonStyle = styled(Button)`
  cursor: pointer;
  &.rt-Button:where(.rt-r-size-4):where(.rt-variant-soft) {
    border-radius: 12px;
    background-color: ${colorPalette.turquoise[9]} !important;
    padding: 12px 20px;
    margin: 0;
    color: ${colorPalette.gray[1]};
    max-height: 42px;
  }

  &.rt-Button:where(.rt-r-size-4):where(.rt-variant-solid) {
    border-radius: 12px;
    background-color: ${colorPalette.gray[1]};
    margin: 0;
    color: ${colorPalette.turquoise[9]};
    border: 1px solid ${colorPalette.turquoise[9]};
    max-height: 40px;
  }

  &.rt-Button:where(.rt-r-size-4):where(.rt-variant-surface) {
    border-radius: 12px;
    background-color: ${colorPalette.gray[1]};
    margin: 0;
    color: ${colorPalette.turquoise[9]};
    box-shadow: none;
    padding: 12px 20px;
  }
`;
