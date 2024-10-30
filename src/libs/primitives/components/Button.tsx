// 'use client';
// import React, { ForwardedRef } from 'react';
// import { Button } from '@radix-ui/themes';
// import { styled } from 'styled-components';
// import { colorPalette } from '@/theme';
// type color = 'PINK' | 'BLACK' | 'BLUE' | 'GREEN';
// type AppButtonProps = React.ComponentProps<typeof Button> & {
//   children: React.ReactNode;
//   colorVariant?: color;
// };
// const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(({ colorVariant = 'GREEN', children, ...props }: AppButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
//   <ButtonStyle colorVariant={colorVariant} ref={forwardedRef as any} {...props}>
//     {children}
//   </ButtonStyle>
// ));
// AppButton.displayName = 'Button';
// export default AppButton;
// const ButtonStyle = styled(Button)<{ colorVariant: color }>`
//   /*************************************************************************************************
//  *                                                                                                 *
//  * soft-variant                                                                                    *
//  *                                                                                                 *
//  ***************************************************************************************************/
//   cursor: pointer;
//   &.rt-Button:where(.rt-r-size-4):where(.rt-variant-soft) {
//     border-radius: 12px;
//     background-color: ${colorPalette.turquoise[9]} !important;
//     padding: 12px 20px;
//     margin: 0;
//     color: ${colorPalette.gray[1]};
//     max-height: 42px;
//   }
//   &.rt-Button:where(.rt-r-size-4):where(.rt-variant-solid) {
//     border-radius: 12px;
//     background-color: ${colorPalette.gray[1]};
//     margin: 0;
//     color: ${colorPalette.turquoise[9]};
//     border: 1px solid ${colorPalette.turquoise[9]};
//     max-height: 40px;
//   }
//   &.rt-Button:where(.rt-r-size-4):where(.rt-variant-surface) {
//     border-radius: 12px;
//     background-color: ${colorPalette.gray[1]};
//     margin: 0;
//     color: ${colorPalette.turquoise[9]};
//     box-shadow: none;
//     padding: 12px 20px;
//   }
// `;
'use client';

import React, { ForwardedRef } from 'react';

import { Button } from '@radix-ui/themes';
import { styled } from 'styled-components';

import { Boxshadow, colorPalette } from '@/theme';

// 'use client';
// import React, { ForwardedRef } from 'react';
// import { Button } from '@radix-ui/themes';
// import { styled } from 'styled-components';
// import { colorPalette } from '@/theme';
// type color = 'PINK' | 'BLACK' | 'BLUE' | 'GREEN';
// type AppButtonProps = React.ComponentProps<typeof Button> & {
//   children: React.ReactNode;
//   colorVariant?: color;
// };
// const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(({ colorVariant = 'GREEN', children, ...props }: AppButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
//   <ButtonStyle colorVariant={colorVariant} ref={forwardedRef as any} {...props}>
//     {children}
//   </ButtonStyle>
// ));
// AppButton.displayName = 'Button';
// export default AppButton;
// const ButtonStyle = styled(Button)<{ colorVariant: color }>`
//   /*************************************************************************************************
//  *                                                                                                 *
//  * soft-variant                                                                                    *
//  *                                                                                                 *
//  ***************************************************************************************************/
//   cursor: pointer;
//   &.rt-Button:where(.rt-r-size-4):where(.rt-variant-soft) {
//     border-radius: 12px;
//     background-color: ${colorPalette.turquoise[9]} !important;
//     padding: 12px 20px;
//     margin: 0;
//     color: ${colorPalette.gray[1]};
//     max-height: 42px;
//   }
//   &.rt-Button:where(.rt-r-size-4):where(.rt-variant-solid) {
//     border-radius: 12px;
//     background-color: ${colorPalette.gray[1]};
//     margin: 0;
//     color: ${colorPalette.turquoise[9]};
//     border: 1px solid ${colorPalette.turquoise[9]};
//     max-height: 40px;
//   }
//   &.rt-Button:where(.rt-r-size-4):where(.rt-variant-surface) {
//     border-radius: 12px;
//     background-color: ${colorPalette.gray[1]};
//     margin: 0;
//     color: ${colorPalette.turquoise[9]};
//     box-shadow: none;
//     padding: 12px 20px;
//   }
// `;

// 'use client';

// import React, { ForwardedRef } from 'react';

// import { Button } from '@radix-ui/themes';
// import { styled } from 'styled-components';

// import { colorPalette } from '@/theme';

// type color = 'PINK' | 'BLACK' | 'BLUE' | 'GREEN';

// type AppButtonProps = React.ComponentProps<typeof Button> & {
//   children: React.ReactNode;
//   colorVariant?: color;
// };

// const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(({ colorVariant = 'GREEN', children, ...props }: AppButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
//   <ButtonStyle colorVariant={colorVariant} ref={forwardedRef as any} {...props}>
//     {children}
//   </ButtonStyle>
// ));

// AppButton.displayName = 'Button';

// export default AppButton;

// const ButtonStyle = styled(Button)<{ colorVariant: color }>`
//   /*************************************************************************************************
//  *                                                                                                 *
//  * soft-variant                                                                                    *
//  *                                                                                                 *
//  ***************************************************************************************************/

//   cursor: pointer;
//   &.rt-Button:where(.rt-r-size-4):where(.rt-variant-soft) {
//     border-radius: 12px;
//     background-color: ${colorPalette.turquoise[9]} !important;
//     padding: 12px 20px;
//     margin: 0;
//     color: ${colorPalette.gray[1]};
//     max-height: 42px;
//   }

//   &.rt-Button:where(.rt-r-size-4):where(.rt-variant-solid) {
//     border-radius: 12px;
//     background-color: ${colorPalette.gray[1]};
//     margin: 0;
//     color: ${colorPalette.turquoise[9]};
//     border: 1px solid ${colorPalette.turquoise[9]};
//     max-height: 40px;
//   }

//   &.rt-Button:where(.rt-r-size-4):where(.rt-variant-surface) {
//     border-radius: 12px;
//     background-color: ${colorPalette.gray[1]};
//     margin: 0;
//     color: ${colorPalette.turquoise[9]};
//     box-shadow: none;
//     padding: 12px 20px;
//   }
// `;

type color = 'PINK' | 'BLACK' | 'BLUE';

type AppButtonProps = React.ComponentProps<typeof Button> & {
  children: React.ReactNode;
  colorVariant?: color;
};

const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(({ colorVariant = 'BLUE', children, ...props }: AppButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => (
  <ButtonStyle colorVariant={colorVariant} ref={forwardedRef as any} {...props}>
    {children}
  </ButtonStyle>
));

AppButton.displayName = 'Button';

export default AppButton;

const ButtonStyle = styled(Button)<{ colorVariant: color }>`
  /*************************************************************************************************
 *                                                                                                 *
 * soft-variant                                                                                    *
 *                                                                                                 *
 ***************************************************************************************************/

  &.rt-Button:where(.rt-variant-soft) {
    outline: none;
    margin: 0;
    border-radius: 12px;
    background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[9] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[9])};

    span {
      color: ${colorPalette.gray[1]};
    }

    &:where(:focus-visible) {
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

  &.rt-Button:where(.rt-variant-solid) {
    outline: none;
    margin: 0;
    border-radius: 12px;
    span {
      color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[11] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[11])};
    }

    border: ${({ colorVariant }) =>
      colorVariant === 'BLUE' ? `1px solid ${colorPalette.blue[9]}` : colorVariant === 'BLACK' ? `1px solid ${colorPalette.gray[11]}` : colorVariant === 'PINK' && `1px solid ${colorPalette.pink[9]}`};

    background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.gray[1] : colorVariant === 'BLACK' ? colorPalette.gray[1] : colorVariant === 'PINK' && colorPalette.gray[1])};

    &:where(:focus-visible) {
      box-shadow: ${Boxshadow.shadow1};
      background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[3] : colorVariant === 'BLACK' ? colorPalette.gray[3] : colorVariant === 'PINK' && colorPalette.pink[3])};
    }
    @media (hover: hover) {
      &:where(:hover) {
        background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[3] : colorVariant === 'BLACK' ? colorPalette.gray[3] : colorVariant === 'PINK' && colorPalette.pink[3])};
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

  &.rt-Button:where(.rt-variant-ghost) {
    margin: 0;
    outline: none;
    border-radius: 12px;

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

  &.rt-Button:where(.rt-variant-surface) {
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
  }
  @media (hover: hover) {
    &:where(:hover) {
      background-color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[3] : colorVariant === 'BLACK' ? colorPalette.gray[3] : colorVariant === 'PINK' && colorPalette.pink[3])};

      span {
        color: ${({ colorVariant }) => (colorVariant === 'BLUE' ? colorPalette.blue[11] : colorVariant === 'BLACK' ? colorPalette.gray[11] : colorVariant === 'PINK' && colorPalette.pink[11])};
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
  &.rt-Button:where(.rt-r-size-4) {
    padding: 13.5px 16px;
  }

  /*Medium-size _______________________________________________________________________________*/
  &.rt-Button:where(.rt-r-size-3) {
    padding: 9.5px 16px;
  }

  /*Small-size _______________________________________________________________________________*/
  &.rt-Button:where(.rt-r-size-2) {
    padding: 7px 16px;
  }
`;
