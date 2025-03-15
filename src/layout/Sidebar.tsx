'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { sidebarOptions } from '@/constants/sidebar';
import { Flex, Grid, Text } from '@/libs/primitives';
import { useUser } from '@/libs/providers/AuthProvider';
import { BznText, Exit, ProfileLogo } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import SidebarItems from './SidebarItems';

type Props = {
  isMobile: boolean;
};

const Sidebar = ({ isMobile }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isExpanded, setIsExpanded] = useState(false);
  const { dispatch } = useUser();
  const activeSegment = useSelectedLayoutSegment();

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <SidebarWrapper
      onHoverStart={!isMobile ? () => setIsExpanded(true) : undefined}
      onHoverEnd={!isMobile ? () => setIsExpanded(false) : undefined}
      initial={{ width: isMobile ? '260px' : '80px' }}
      animate={{ width: isExpanded || isMobile ? '260px' : '80px' }}
      transition={{ duration: 0.3 }}
    >
      <Container mx={'auto'} height={'100%'}>
        <Grid width={'100%'}>
          <Flex height={'100%'} direction='column' p={'4'} gap={'4'}>
            <Link href={''}>
              <ProfileLogo width={'48px'} height={'32px'} />
              <CollapseWrapper
                animate={{
                  maxWidth: isExpanded || isMobile ? '100%' : '1px',
                  opacity: isExpanded || isMobile ? 1 : 0,
                }}
                initial={{ maxWidth: '0px', opacity: 0 }}
                transition={{
                  maxWidth: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.2, ease: 'easeInOut' },
                }}
              >
                <BznText width={'113px'} height={'32px'} cursor={'pointer'} />
              </CollapseWrapper>
            </Link>
            {sidebarOptions.map((item, index) => (
              <SidebarItems key={index} {...(item as any)} isExpanded={isExpanded} activeSegment={activeSegment} isMobile={isMobile} />
            ))}
          </Flex>
        </Grid>
        <Grid width={'fit-content'}>
          <Flex height={'fit-content'} gap={'2'} p={'4'}>
            <Flex px={'4'} gap={'2'} align={'center'} onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <Exit width={'16px'} height={'16px'} />
              <CollapseWrapper
                animate={{
                  maxWidth: isExpanded || isMobile ? '100%' : '1px',
                  opacity: isExpanded || isMobile ? 1 : 0,
                }}
                initial={{ maxWidth: '0px', opacity: 0 }}
                transition={{
                  maxWidth: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.2, ease: 'easeInOut' },
                }}
              >
                <Text {...typoVariant.body3} style={{ color: colorPalette.pink[11] }}>
                  خروج از حساب کاربری
                </Text>
              </CollapseWrapper>
            </Flex>
          </Flex>
        </Grid>
      </Container>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${colorPalette.gray[2]};
  border: 1px solid ${colorPalette.gray[6]};
  overflow-y: auto;
  border-radius: 16px 0px 0px 16px;
  z-index: 100;
`;

const Container = styled(Grid)`
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
  align-content: space-between;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CollapseWrapper = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
