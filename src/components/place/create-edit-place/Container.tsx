'use client';

import React, { forwardRef, ReactNode, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { Flex, Grid, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  title: string;
  height: string;
  children: ReactNode;
};

const Container = forwardRef<HTMLDivElement, Props>(({ title, height, children }, ref) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsExpand(!isExpand);
    }
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Root onClick={handleExpand} ref={ref} isExpand={isExpand} gap={'16px'}>
      <Flex
        style={{
          cursor: 'pointer',
          backgroundColor: colorPalette.turquoise[11],
          borderRadius: '8px',
        }}
        onClick={handleExpand}
        p={'16px'}
      >
        <Text style={{ color: colorPalette.gray[1] }} onClick={handleExpand}>
          {title}
        </Text>
      </Flex>
      <AnimatePresence initial={false}>
        {isExpand && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <Content px={'16px'} height={height} isExpand={isExpand}>
              {children}
            </Content>
          </motion.div>
        )}
      </AnimatePresence>
    </Root>
  );
});

export default Container;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Root = styled(Grid)<{ isExpand: boolean }>`
  max-height: ${({ isExpand }) => (isExpand ? 'max-content' : '57px')};

  .style {
    display: ${({ isExpand }) => (isExpand ? 'block' : 'none')};
  }
`;

const Content = styled(Grid)<{ isExpand: boolean; height: string }>`
  border-radius: 8px;
  padding-block: 16px;
  overflow: auto;
  border: 1.5px solid #0000004e;
`;
