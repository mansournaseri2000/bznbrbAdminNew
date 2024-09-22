'use client';

import React, { forwardRef } from 'react';

import { Slider as RadixSlider } from '@radix-ui/themes';
import styled from 'styled-components';

import { ErrorText } from '@/libs/shared';
import { colorPalette } from '@/theme';

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
  --slider-track-color: red;
  --slider-thumb-color: red;
  --slider-thumb-border-radius: 50%;
  --slider-thumb-border: 2px solid red;

  .rt-SliderTrack {
    height: 8px;
    background-color: ${colorPalette.gray[1]};
  }

  .rt-SliderThumb {
    background-color: red;
    border: var(--slider-thumb-border);
    border-radius: var(--slider-thumb-border-radius);
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
  }

  &.rt-Slider:where(.rt-variant-surface) {
    --slider-focus-color: none;
  }

  & .rt-SliderThumb {
    border: 1px solid red;
    color: red;
  }

  .rt-SliderThumb::after {
    background-color: ${colorPalette.amber[6]};
  }
  &.rt-SliderRoot:where(.rt-variant-surface) :where(.rt-SliderRange) {
    background-color: ${colorPalette.turquoise[9]};
  }
`;
