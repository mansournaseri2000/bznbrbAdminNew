'use client';

import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import { useRouter } from '@bprogress/next';
import styled from 'styled-components';

import { Flex, IconButton, Text } from '@/libs/primitives';
import { MenuIcon, TriangleLeft } from '@/public/icon';
import { Boxshadow, colorPalette } from '@/theme';
import { breakpoints } from '@/theme/breakpoints';
import { typoVariant } from '@/theme/typo-variants';

import MobileSidebar from './MobileSidebar';

type HeaderProps = {
  title: string;
  isNavigation: boolean;
};

const Header = (props: HeaderProps) => {
  const { title, isNavigation } = props;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <>
      <Root>
        <Container>
          <Flex align={"center"} gap={"16px"}>
            <HamburgerButton variant='surface' onClick={toggleDrawer}>
              <MenuIcon />
            </HamburgerButton>
            <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
              {title}
            </Text>
          </Flex>

          {isNavigation && (
            <IconButton size={'3'} variant='surface' onClick={() => router.back()}>
              <TriangleLeft color='#373737' />
            </IconButton>
          )}
        </Container>
      </Root>
      <DrawerStyle open={isOpen} onClose={toggleDrawer} direction='right'>
        <MobileSidebar isMobile />
      </DrawerStyle>
    </>
  );
};

export default Header;

const Root = styled.header`
  padding: 14.5px 24px;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid ${colorPalette.gray[6]};
  background-color: ${colorPalette.gray[1]};
  box-shadow: ${Boxshadow.shadow1};
  z-index: 10;
  @media (min-width: ${breakpoints.desktop}) {
    padding: 14.5px 100px 14.5px 24px;
  }
`;

const Container = styled(Flex)`
  max-width: 1920px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const HamburgerButton = styled(IconButton)`
  display: flex;
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const DrawerStyle = styled(Drawer)`
  width: max-content !important;
  border-bottom-left-radius: 8px !important;
  border-top-left-radius: 8px !important;
`;
