'use client';

import React, { forwardRef, ReactNode } from 'react';

import { TextField as RadixTextField } from '@radix-ui/themes';
import styled from 'styled-components';

import { ErrorText } from '@/libs/shared';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import { Grid, Text } from '../index';

/**
 * props
 * _______________________________________________________________________________
 */
type TextFieldComponentProps = {
  title?: string;
  errorText?: string;
  placeholder: string;
  icon?: ReactNode; // Dynamic icon prop
} & React.ComponentPropsWithoutRef<typeof RadixTextField.Root>;

const TextFieldComponent = forwardRef<HTMLInputElement, TextFieldComponentProps>(({ placeholder, icon, errorText, title, ...rest }, ref) => {
  return (
    <Grid pb={'10px'} width={'100%'} position={'relative'}>
      <Text style={{ paddingRight: '10px' }} {...typoVariant.body1}>
        {title}
      </Text>
      <Root size={'3'} ref={ref} {...rest} placeholder={placeholder}>
        {icon && <RadixTextField.Slot>{icon}</RadixTextField.Slot>}
      </Root>
      <ErrorText text={errorText} />
    </Grid>
  );
});

TextFieldComponent.displayName = 'TextFieldComponent';

export default TextFieldComponent;

const Root = styled(RadixTextField.Root)`
  width: -webkit-fill-available;
  border: 1px solid ${colorPalette.gray[3]};
  background-color: ${colorPalette.gray[1]};
  border-radius: 8px;
  color: ${colorPalette.gray[12]};

  &.rt-TextFieldRoot:where(.rt-variant-surface) {
    --text-field-focus-color: none;
    height: 48px;
    font-size: 14px;
  }

  & .rt-TextFieldInput {
    &::placeholder {
      font-size: 12px;
    }
  }
`;
