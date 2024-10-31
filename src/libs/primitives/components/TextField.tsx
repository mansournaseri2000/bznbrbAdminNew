'use client';

import React, { forwardRef, ReactNode } from 'react';

import { TextField as RadixTextField } from '@radix-ui/themes';
import styled from 'styled-components';

import { ErrorText } from '@/libs/shared';
import { Boxshadow, colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import { Grid, Text } from '../index';

/**
 * props
 * _______________________________________________________________________________
 */

type color = 'PINK' | 'BLACK' | 'BLUE';

type TextFieldComponentProps = {
  title?: string;
  errorText?: string;
  error?: boolean;
  placeholder: string;
  icon?: ReactNode; // Dynamic icon prop
  colorVariant?: color;
} & React.ComponentPropsWithoutRef<typeof RadixTextField.Root>;

const TextFieldComponent = forwardRef<HTMLInputElement, TextFieldComponentProps>(({ colorVariant = 'BLUE', placeholder, icon, errorText, title, error = false, ...rest }, ref) => {
  return (
    <Grid pb={'10px'} width={'100%'} position={'relative'}>
      <Text style={{ paddingRight: '10px' }} {...typoVariant.body1}>
        {title}
      </Text>
      <Root colorVariant={colorVariant} size={'3'} error={error} ref={ref} {...rest} placeholder={placeholder}>
        {icon && <RadixTextField.Slot>{icon}</RadixTextField.Slot>}
      </Root>
      <ErrorText text={errorText} />
    </Grid>
  );
});

TextFieldComponent.displayName = 'TextFieldComponent';

export default TextFieldComponent;

const Root = styled(RadixTextField.Root)<{ error: boolean; colorVariant: color }>`
  width: -webkit-fill-available;
  border: ${({ error }) => (!error ? `1px solid ${colorPalette.gray[3]}` : `1px solid ${colorPalette.pink[9]}`)};
  background-color: ${colorPalette.gray[1]};
  border-radius: 8px;
  color: ${colorPalette.gray[11]};

  &.rt-TextFieldRoot:where(.rt-variant-surface) {
    --text-field-focus-color: none;
    height: 48px;
    font-size: 14px;

    @media (hover: hover) {
      &:where(:hover) {
        background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[2] : colorVariant === 'PINK' ? colorPalette.pink[2] : colorVariant === 'BLACK' && colorPalette.gray[2])};
      }
    }
    /* TODO: FIX Box shadow issue when clicked */

    &:focus-within {
      background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[2] : colorVariant === 'PINK' ? colorPalette.pink[2] : colorVariant === 'BLACK' && colorPalette.gray[2])};
      box-shadow: ${Boxshadow.shadow1};
    }
  }

  & .rt-TextFieldInput {
    &::placeholder {
      font-size: 14px;
    }

    &:disabled {
      background-color: ${colorPalette.gray[5]};
      &:where(:hover) {
        span {
          color: ${colorPalette.gray[9]};
        }
      }
    }
  }
`;
