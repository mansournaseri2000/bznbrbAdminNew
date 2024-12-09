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
  title?: string;
  errorText?: string;
  placeholder: string;
} & React.ComponentPropsWithoutRef<typeof RadixTextArea>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaComponentProps>(({ placeholder, errorText, title, ...rest }, ref) => {
  return (
    <Grid pb={'10px'} width={'100%'} position={'relative'}>
      <Text style={{ paddingRight: '10px' }} {...typoVariant.body1}>
        {title}
      </Text>
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
  /* min-height: 144px; */
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
    &::placeholder {
      font-size: 12px;
    }
  }
`;
