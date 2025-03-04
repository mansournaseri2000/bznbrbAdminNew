'use client';

import React, { forwardRef } from 'react';

import { TextArea as RadixTextArea } from '@radix-ui/themes';
import styled from 'styled-components';

import { ErrorText } from '@/libs/shared';
import { Boxshadow, colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

// import { ErrorText } from '@/libs/shared';
// Assuming you have an ErrorText component
import { Grid, Text } from '../index';

// Assuming you have a Flex component for layout

/**
 * Props
 * _______________________________________________________________________________
 */
type TextAreaComponentProps = {
  label?: string;
  selectedValue?: boolean;
  errorText?: string;
  placeholder: string;
} & React.ComponentPropsWithoutRef<typeof RadixTextArea>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaComponentProps>(({ placeholder, errorText, label, selectedValue, ...rest }, ref) => {
  return (
    <Grid pb={'10px'} width={'100%'} position={'relative'}>
      {selectedValue && (
        <Text
          style={{ paddingInline: '8px', color: colorPalette.gray[10], position: 'absolute', top: '-10px', right: 12, backgroundColor: colorPalette.gray[1], borderRadius: 4 }}
          {...typoVariant.body3}
        >
          {label}
        </Text>
      )}
      <StyledTextAreaRoot size={'3'} ref={ref} {...rest} placeholder={placeholder}></StyledTextAreaRoot>
      {errorText && <ErrorText text={errorText} />}
    </Grid>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;

const StyledTextAreaRoot = styled(RadixTextArea)`
  width: -webkit-fill-available;
  border: 1px solid ${colorPalette.gray[3]};
  border-radius: 8px;
  background-color: ${colorPalette.gray[1]};

  &.rt-TextAreaRoot:where(.rt-variant-surface) {
    --text-field-focus-color: none;
    font-size: 14px;
  }

  @media (hover: hover) {
    &:where(:hover) {
      background-color: ${colorPalette.blue[2]};
    }
  }

  &:focus-within {
    background-color: ${colorPalette.blue[2]};
    box-shadow: ${Boxshadow.shadow1};
  }

  & .rt-TextAreaInput {
    padding-block-start: 12px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;
