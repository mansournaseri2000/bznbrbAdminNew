'use client';

import React, { forwardRef } from 'react';

import { Slider as RadixSlider } from '@radix-ui/themes';
import styled from 'styled-components';

import { ErrorText } from '@/libs/shared';

import { Flex } from '../index';

/**
 * Props
 * _______________________________________________________________________________
 */
type SliderComponentProps = {
  errorText?: string;
} & React.ComponentPropsWithoutRef<typeof RadixSlider>;

const SliderComponent = forwardRef<HTMLDivElement, SliderComponentProps>(({ errorText, ...rest }, ref) => {
  return (
    <Flex pb={'10px'} width={'100%'} position={'relative'}>
      <StyledSlider ref={ref} {...rest} />
      <ErrorText text={errorText} />
    </Flex>
  );
});

SliderComponent.displayName = 'SliderComponent';

export default SliderComponent;

const StyledSlider = styled(RadixSlider)`
  width: -webkit-fill-available;
  --slider-thumb-size: 16px;
  --slider-track-height: 4px;
  --slider-track-color: #e2e8f0;
  --slider-thumb-color: #fcfcfd;
  --slider-thumb-border-radius: 50%;
  --slider-thumb-border: 2px solid #1a202c;

  .rt-SliderTrack {
    background-color: var(--slider-track-color);
    height: var(--slider-track-height);
  }

  .rt-SliderThumb {
    background-color: var(--slider-thumb-color);
    border: var(--slider-thumb-border);
    border-radius: var(--slider-thumb-border-radius);
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
  }

  &.rt-Slider:where(.rt-variant-surface) {
    --slider-focus-color: none;
  }
`;
