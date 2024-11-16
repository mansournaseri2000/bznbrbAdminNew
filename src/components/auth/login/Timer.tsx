'use client';

import { useEffect } from 'react';

import styled from 'styled-components';

import { useCountdown } from '@/libs/hooks';
import { Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

type TimerProps = {
  handleEndTime: (value: boolean) => void;
};

const Timer = ({ handleEndTime }: TimerProps) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { minutes, seconds, isEnded } = useCountdown(120000); // 2 minutes in milliseconds

  useEffect(() => {
    if (isEnded) {
      handleEndTime(true);
    }
  }, [isEnded]);

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
    <Root
      {...typoVariant.body2}
      style={{
        color: colorPalette.pink[11],
        paddingRight: '10px',
      }}
    >{`${minutes}:${seconds}`}</Root>
  );
};

export default Timer;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Text)`
  font-family: var(--yekan-font);
`;
