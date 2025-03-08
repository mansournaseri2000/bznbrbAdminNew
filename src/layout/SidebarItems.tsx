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
  activeSegment: string;
};

const containerVariants: Variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

const SidebarItems = (props: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { isExpanded, text, Icon, type, items, path, activeSegment } = props;
  const [isOpen, setIsOpen] = useState(false);
  const currentRoute = type === 'collapse' ? activeSegment === path?.substring(1) : items?.some(item => activeSegment === item.path.split('/')[1]);

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const toggleSidebarItems = () => {
    setIsOpen(!isOpen);
  };
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Container>
      <Link href={path && type === 'collapse' ? path : ''} data-disable-nprogress={true}>
        <Flex width={'100%'} minWidth={'50px'} gap={'2'} px={'4'} py={'11px'} align={'center'} style={{ backgroundColor: currentRoute ? colorPalette.blue[9] : 'transparent', borderRadius: 12 }}>
          <StyledIcon isActive={currentRoute as any}>
            <Icon />
          </StyledIcon>
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
            <Flex width={'100%'} align={'center'} justify={'between'}>
              <Text {...typoVariant.body3} style={{ color: currentRoute ? colorPalette.gray[1] : colorPalette.gray[11] }}>
                {text}
              </Text>
              {type === 'expand' && (
                <CustomIconButton variant='surface' size={'1'} type='button' onClick={() => toggleSidebarItems()}>
                  {isOpen ? (
                    <MinusIcon style={{ color: currentRoute ? colorPalette.gray[1] : colorPalette.gray[11] }} />
                  ) : (
                    <PlusIcon style={{ color: currentRoute ? colorPalette.gray[1] : colorPalette.gray[11] }} />
                  )}
                </CustomIconButton>
              )}
            </Flex>
          </CollapseWrapper>
        </Flex>
      </Link>
      {type === 'expand' && (
        <motion.div
          variants={containerVariants}
          initial='closed'
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden', paddingRight: 24, paddingBlockStart: currentRoute ? 8 : 0 }}
          layout
        >
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

const StyledIcon = styled(Box)<{ isActive: boolean }>`
  width: 16px;
  height: 16px;
  svg {
    width: 16px;
    height: 16px;
    path {
      fill: ${({ isActive }) => (isActive ? colorPalette.gray[1] : colorPalette.gray[11])};
    }
  }
`;

const CustomIconButton = styled(IconButton)`
  &:where(:hover) {
    svg {
      path {
        fill: ${colorPalette.gray[11]};
      }
    }
  }
`;
