import React, { forwardRef } from 'react';

import { Button as RadixButton, ButtonProps as RadixButtonProps } from '@radix-ui/themes';
import styled from 'styled-components';

import { Flex, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  isSelected: boolean;
  dayID: number;
  title: string;
  value: string;
} & RadixButtonProps;

const DayListCard = forwardRef<HTMLButtonElement, Props>(({ value, title, isSelected, ...rest }, ref) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <RadixButton
      style={{
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: '#fff',
        height: 'max-content',
        padding: '7px',
        minWidth: '80px',
      }}
      variant='soft'
      ref={ref}
      {...rest}
    >
      <Flex direction={'column'} gap={'5px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          {title}
        </Text>
        <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
          {value}
        </Text>
      </Flex>
      <SelectedFlag isSelected={isSelected} />
    </RadixButton>
  );
});

export default DayListCard;

const SelectedFlag = styled.div<{ isSelected: boolean }>`
  border-radius: 4px, 4px, 0px, 0px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  background-color: ${colorPalette.pink[9]};
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: 0;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
