'use client';

import React, { ForwardedRef } from 'react';

import { IconButton } from '@radix-ui/themes';
import { styled } from 'styled-components';

import { Boxshadow, colorPalette } from '@/theme';

// Importing IconButton from Radix UI

type color = 'PINK' | 'BLACK' | 'BLUE';

type AppIconButtonProps = React.ComponentProps<typeof IconButton> & {
  children: React.ReactNode; // Allow any React nodes as children
  colorVariant?: color;
};

const AppIconButton = React.forwardRef<HTMLButtonElement, AppIconButtonProps>(({ colorVariant = 'BLUE', children, ...props }: AppIconButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
  <ButtonStyle colorVariant={colorVariant} ref={forwardedRef as any} {...props}>
    {children} {/* Render children inside the button */}
  </ButtonStyle>
));

AppIconButton.displayName = 'IconButton';

export default AppIconButton;

const ButtonStyle = styled(IconButton)<{ colorVariant: color }>`
  /*************************************************************************************************
 *                                                                                                 *
 * soft-variant                                                                                    *
 *                                                                                                 *
 ***************************************************************************************************/

  /* default-with out sizing ________________________________________________________________________*/
  &.rt-IconButton:where(.rt-variant-soft) {
    outline: none;
    margin: 0;
    border-radius: 12px;
    background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[9] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[9])};
    path {
      fill: ${colorPalette.gray[1]};
    }

    &:where(:focus-visible) {
      outline: 2px solid ${colorPalette.blue[10]};
      box-shadow: ${Boxshadow.shadow1};
      background-color: ${({ colorVariant }) =>
        colorVariant === 'BLUE' ? colorPalette.blue[10] : colorVariant === 'BLACK' ? colorPalette.gray[12] : colorVariant === 'PINK' && colorPalette.pink[10]};
      span {
        color: ${colorPalette.gray[1]};
      }
    }
    @media (hover: hover) {
      &:where(:hover) {
        background-color: ${({ colorVariant }) =>
          colorVariant === 'BLUE' ? colorPalette.blue[10] : colorVariant === 'BLACK' ? colorPalette.gray[12] : colorVariant === 'PINK' && colorPalette.pink[10]};
        span {
          color: ${colorPalette.gray[1]};
        }
      }
    }

    &:where([data-disabled]) {
      color: ${colorPalette.gray[8]};
      background-color: ${colorPalette.gray[3]};

      &:where(:hover) {
        span {
          color: ${colorPalette.gray[8]};
        }
      }
    }
  }

  /*************************************************************************************************
 *                                                                                                 *
 * solid-variant                                                                                   *
 *                                                                                                 *
 ***************************************************************************************************/
  /* default-with out sizing ________________________________________________________________________*/
  &.rt-IconButton:where(.rt-variant-solid) {
    outline: none;
    margin: 0;
    border-radius: 12px;
    background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.gray[1] : colorVariant === 'BLACK' ? colorPalette.gray[1] : colorVariant === 'PINK' && colorPalette.gray[1])};
    border: ${({ colorVariant }) =>
      colorVariant === 'BLUE' ? `1px solid ${colorPalette.blue[9]}` : colorVariant === 'BLACK' ? `1px solid ${colorPalette.gray[11]}` : colorVariant === 'PINK' && `1px solid ${colorPalette.pink[9]}`};
    span {
      color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[11] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[11])};
    }

    &:where(:focus-visible) {
      box-shadow: ${Boxshadow.shadow1};
      background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[3] : colorVariant === 'BLACK' ? colorPalette.gray[3] : colorVariant === 'PINK' && colorPalette.pink[3])};
      border: ${({ colorVariant }) =>
        colorVariant === 'BLUE'
          ? `1px solid ${colorPalette.blue[9]}`
          : colorVariant === 'BLACK'
          ? `1px solid ${colorPalette.gray[11]}`
          : colorVariant === 'PINK' && `1px solid ${colorPalette.pink[9]}`};
      span {
        color: ${colorPalette.blue[11]};
      }
    }
    @media (hover: hover) {
      &:where(:hover) {
        background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[3] : colorVariant === 'BLACK' ? colorPalette.gray[3] : colorVariant === 'PINK' && colorPalette.pink[3])};
        /* border: 1px solid ${colorPalette.blue[9]}; */
        span {
          color: ${colorPalette.blue[11]};
        }
      }
    }

    &:where([data-disabled]) {
      color: ${colorPalette.gray[8]};
      background-color: ${colorPalette.gray[3]};

      &:where(:hover) {
        span {
          color: ${colorPalette.gray[8]};
        }
      }
    }
  }

  /*************************************************************************************************
 *                                                                                                 *
 * ghost-variant                                                                                 *
 *                                                                                                 *
 ***************************************************************************************************/

  &.rt-IconButton:where(.rt-variant-ghost) {
    margin: 0;
    outline: none;
    border-radius: 12px;
    /* width: auto; */

    background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[3] : colorVariant === 'BLACK' ? colorPalette.gray[2] : colorVariant === 'PINK' && colorPalette.pink[2])};
    span {
      color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[11] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[11])};
    }

    &:where(:focus-visible) {
      box-shadow: ${Boxshadow.shadow1};
      background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[4] : colorVariant === 'BLACK' ? colorPalette.gray[4] : colorVariant === 'PINK' && colorPalette.pink[4])};
      span {
        color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[11] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[11])};
      }
    }
    @media (hover: hover) {
      &:where(:hover) {
        background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[4] : colorVariant === 'BLACK' ? colorPalette.gray[4] : colorVariant === 'PINK' && colorPalette.pink[4])};
        span {
          color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[11] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[11])};
        }
      }
    }

    &:where([data-disabled]) {
      color: ${colorPalette.gray[8]};
      background-color: ${colorPalette.gray[3]};

      &:where(:hover) {
        span {
          color: ${colorPalette.gray[8]};
        }
      }
    }
  }
  /*************************************************************************************************
 *                                                                                                 *
 * surface-variant                                                                                 *
 *                                                                                                 *
 ***************************************************************************************************/

  &.rt-IconButton:where(.rt-variant-surface) {
    outline: none;
    border: none;
    margin: 0;
    border-radius: 12px;
    box-shadow: none;
    background-color: rgba(243, 251, 250, 0);

    span {
      color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[11] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[11])};
    }

    &:where(:focus-visible) {
      box-shadow: ${Boxshadow.shadow1};
      background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[3] : colorVariant === 'BLACK' ? colorPalette.gray[3] : colorVariant === 'PINK' && colorPalette.pink[3])};
      span {
        color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[11] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[11])};
      }
    }
    @media (hover: hover) {
      &:where(:hover) {
        background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[3] : colorVariant === 'BLACK' ? colorPalette.gray[3] : colorVariant === 'PINK' && colorPalette.pink[3])};
        span {
          color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[11] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[11])};
        }
      }
    }

    &:where([data-disabled]) {
      color: ${colorPalette.gray[8]};
      background-color: ${colorPalette.gray[3]};

      &:where(:hover) {
        span {
          color: ${colorPalette.gray[8]};
        }
      }
    }
  }

  /*************************************************************************************************
 *                                                                                                 *
 * button-sizing                                                                                 *
 *                                                                                                 *
 ***************************************************************************************************/

  /* large-size _______________________________________________________________________________*/
  &.rt-IconButton:where(.rt-r-size-4) {
    padding: 16px;
    border-radius: 12px;
  }

  /* large-Medium _______________________________________________________________________________*/
  &.rt-Button:where(.rt-r-size-3) {
    padding: 12px;
  }

  /* large-Small _______________________________________________________________________________*/
  &.rt-Button:where(.rt-r-size-2) {
    padding: 8px;
  }
`;
