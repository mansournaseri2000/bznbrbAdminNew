'use client';

import React, { ForwardedRef } from 'react';

import { Button, Flex } from '@radix-ui/themes';
import { styled } from 'styled-components';

import { ArrowLeftCustomButton } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import Text from '../typography/Text';

type color = 'PINK' | 'BLACK' | 'BLUE';

type AppButtonProps = React.ComponentProps<typeof Button> & {
  value: string;
  error: boolean;
  isFill: boolean;
  errorText?: string;
  selectedValue?: string;
  colorVariant?: color;
};

const CustomPlannerButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ selectedValue, errorText, isFill, error, value, colorVariant = 'BLUE', ...props }: AppButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
    <ButtonStyle type='button' isFill={isFill} error={error} ref={forwardedRef as any} variant='outline' colorVariant={colorVariant} {...props}>
      <Flex justify={'between'} align={'center'} width={'100%'}>
        <Text {...typoVariant.body2}>{selectedValue ? selectedValue : value}</Text>
        <ArrowLeftCustomButton style={{ scale: 1.5 }} />
      </Flex>
      <Text {...typoVariant.description2} style={{ color: colorPalette.pink[9], position: 'absolute', bottom: -20, right: 10 }}>
        {errorText}
      </Text>
    </ButtonStyle>
  )
);

CustomPlannerButton.displayName = 'Button';

export default CustomPlannerButton;

const ButtonStyle = styled(Button)<{ error: boolean; isFill: boolean; colorVariant: color }>`
  position: relative;
  border-radius: 12px;
  path {
    fill: ${colorPalette.pink[9]};
  }
  /*************************************************************************************************
 *                                                                                                 *
 * outline-variant                                                                                    *
 *                                                                                                 *
 ***************************************************************************************************/

  &.rt-Button:where(.rt-variant-outline) {
    width: 100%;
    outline: none;
    box-shadow: none;
    margin: 0;
    /* border-radius: 8px; */

    border: ${({ error }) => (!error ? `1px solid ${colorPalette.gray[7]}` : `1px solid ${colorPalette.pink[9]}`)};
    background-color: ${({ error }) => (!error ? colorPalette.gray[1] : colorPalette.gray[2])};

    span {
      color: ${({ isFill }) => (!isFill ? colorPalette.gray[9] : colorPalette.gray[11])};
    }

    &:where(:focus-visible) {
      background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[2] : colorVariant === 'PINK' ? colorPalette.pink[2] : colorVariant === 'BLACK' && colorPalette.gray[2])};
      span {
        color: ${colorPalette.gray[9]};
      }
    }
    @media (hover: hover) {
      &:where(:hover) {
        background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[2] : colorVariant === 'PINK' ? colorPalette.pink[2] : colorVariant === 'BLACK' && colorPalette.gray[2])};
        span {
          color: ${colorPalette.gray[9]};
        }
      }
    }

    &:where([data-disabled]) {
      background-color: ${colorPalette.gray[5]};

      /* &:where(:hover) {
        span {
          color: ${colorPalette.gray[9]};
        }
      } */
    }
  }

  /*************************************************************************************************
 *                                                                                                 *
 * button-sizing                                                                                 *
 *                                                                                                 *
 ***************************************************************************************************/

  /* large-size _______________________________________________________________________________*/
  &.rt-Button:where(.rt-r-size-4) {
    padding: 16px 13.5px;
  }
`;
