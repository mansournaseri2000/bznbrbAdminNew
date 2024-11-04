'use client';

import React, { useState } from 'react';

import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

import { Flex, Grid, Text } from '@/libs/primitives';
import { TriangleUp } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type AccordionWrapperProps = {
  hero: string;
  children: React.ReactNode;
};

const containerVariants: Variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

const AccordionWrapper = (props: AccordionWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper isOpen={isOpen}>
      <Flex className='style' width={'100%'} justify={'between'} align={'center'} p={'8px 16px'} onClick={toggleAccordion}>
        <Text {...typoVariant.title2} style={{ color: colorPalette.gray[1] }}>
          {props.hero}
        </Text>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 12, backgroundColor: colorPalette.blue[9], padding: '8px' }}
        >
          <TriangleUp />
        </motion.div>
      </Flex>
      <motion.div variants={containerVariants} initial='closed' animate={isOpen ? 'open' : 'closed'} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }} layout>
        <Grid gap={'16px'} p={'24px 16px 16px 16px'}>
          {props.children}
        </Grid>
      </motion.div>
    </Wrapper>
  );
};

export default AccordionWrapper;

const Wrapper = styled(Grid)<{ isOpen: boolean }>`
  border-radius: 8px;
  border: 1px solid ${colorPalette.gray[6]};
  .style {
    border-radius: ${({ isOpen }) => (isOpen ? '8px 8px 0px 0px' : '8px')};
    height: fit-content;
    background-color: ${colorPalette.blue[10]};
    cursor: pointer;
  }
`;
