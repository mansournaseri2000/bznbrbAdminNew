'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

import { Box, Container, Flex, IconButton, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { SidebarOptionsDetail } from '@/types/layout/sidebar';

type Props = SidebarOptionsDetail & {
  isExpanded?: boolean;
};

const containerVariants: Variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

const SidebarItems = (props: Props) => {
  const { isExpanded, text, Icon, type, items, path } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebarItems = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Link href={path && type === 'collapse' ? path : ''}>
        {/* style={{ border: '2px solid red' }} */}
        <Flex width={'100%'} gap={'2'} px={'4'} py={'11px'} align={'center'}>
          <Box width={'16px'} height={'16px'}>
            <Icon />
          </Box>
          <CollapseWrapper
            animate={{
              maxWidth: isExpanded ? '100%' : '1px',
              opacity: isExpanded ? 1 : 0,
            }}
            initial={{ maxWidth: '0px', opacity: 0 }}
            transition={{
              maxWidth: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.2, ease: 'easeInOut' },
            }}
            style={{ width: isExpanded ? '100%' : 'auto' }}
          >
            {/*  style={{ border: '2px solid blue' }} */}
            <Flex width={'100%'} align={'center'} justify={'between'}>
              <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
                {text}
              </Text>
              {type === 'expand' && (
                <IconButton variant='surface' size={'1'} type='button' onClick={() => toggleSidebarItems()}>
                  {isOpen ? <MinusIcon style={{ color: colorPalette.gray[11] }} /> : <PlusIcon style={{ color: colorPalette.gray[11] }} />}
                </IconButton>
              )}
            </Flex>
          </CollapseWrapper>
        </Flex>
      </Link>
      {type === 'expand' && (
        <motion.div variants={containerVariants} initial='closed' animate={isOpen ? 'open' : 'closed'} transition={{ duration: 0.3 }} style={{ overflow: 'hidden', paddingRight: 24 }} layout>
          {items?.map((item, index) => (
            <Link key={index} href={item.path} style={{ padding: '12px 24px 12px 16px', borderRight: `1px solid ${colorPalette.gray[6]}` }}>
              <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
                {item.text}
              </Text>
            </Link>
          ))}
        </motion.div>
      )}
    </Container>
  );
};

export default SidebarItems;

const CollapseWrapper = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
