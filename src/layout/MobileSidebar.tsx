'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import styled from 'styled-components';

import { sidebarOptions } from '@/constants/sidebar';
import { Flex, Grid, Text } from '@/libs/primitives';
import { useUser } from '@/libs/providers/AuthProvider';
import { BznText, Exit } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import SidebarItems from './SidebarItems';

type Props = {
  isMobile: boolean;
};

const MobileSidebar = ({ isMobile }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
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
    <Container mx={'auto'} height={'100%'}>
      <Grid width={'100%'}>
        <Flex height={'100%'} direction='column' p={'4'} gap={'4'}>
          <Link href={''} >
            <CollapseWrapper style={{ margin: 'auto' }}>
              <BznText width={'113px'} height={'32px'} cursor={'pointer'} />
            </CollapseWrapper>
          </Link>
          {sidebarOptions.map((item, index) => (
            <SidebarItems key={index} {...(item as any)} activeSegment={activeSegment} isMobile={isMobile} />
          ))}
        </Flex>
      </Grid>
      <Grid width={'fit-content'}>
        <Flex height={'fit-content'} gap={'2'} p={'4'}>
          <Flex px={'4'} gap={'2'} align={'center'} onClick={handleLogout} style={{ cursor: 'pointer' }}>
            <Exit width={'16px'} height={'16px'} />
            <CollapseWrapper>
              <Text {...typoVariant.body3} style={{ color: colorPalette.pink[11] }}>
                خروج از حساب کاربری
              </Text>
            </CollapseWrapper>
          </Flex>
        </Flex>
      </Grid>
    </Container>
  );
};

export default MobileSidebar;

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

const CollapseWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
