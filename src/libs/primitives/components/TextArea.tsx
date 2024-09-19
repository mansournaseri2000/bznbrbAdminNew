'use client';

import React, { forwardRef } from 'react';

import { TextArea as RadixTextArea } from '@radix-ui/themes';
import styled from 'styled-components';

import { ErrorText } from '@/libs/shared';

// import { ErrorText } from '@/libs/shared';
// Assuming you have an ErrorText component
import { Flex } from '../index';

// Assuming you have a Flex component for layout

/**
 * Props
 * _______________________________________________________________________________
 */
type TextAreaComponentProps = {
  errorText?: string;
  placeholder: string;
} & React.ComponentPropsWithoutRef<typeof RadixTextArea>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaComponentProps>(
  ({ placeholder, errorText, ...rest }, ref) => {
    return (
      <Flex pb={'10px'} width={'100%'} position={'relative'}>
        <StyledTextAreaRoot size={'3'} ref={ref} {...rest} placeholder={placeholder}></StyledTextAreaRoot>
        {errorText && <ErrorText text={errorText} />}
      </Flex>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;

const StyledTextAreaRoot = styled(RadixTextArea)`
  width: -webkit-fill-available;
  border: 1px solid #00000033;
  border-radius: 8px;
  min-height: 144px;
  background-color: #fcfdfc;

  &.rt-TextAreaRoot:where(.rt-variant-surface) {
    --text-field-focus-color: none;
    font-size: 14px;
  }

  & .rt-TextAreaInput {
    &::placeholder {
      font-size: 12px;
    }
  }
`;