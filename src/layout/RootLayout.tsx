'use client';

import { ReactNode } from 'react';

import styled from 'styled-components';

import { Box, Flex, Grid } from '@/libs/primitives';

import Header from './Header';
// import Menu from './Menu';
import Sidebar from './Sidebar';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header title='نقطه' isNavigation />
      <Sidebar />
      <Main>{children}</Main>
    </>
  );
};

export default RootLayout;

export const Main = styled.main`
  min-height: calc(100vh - 240px);
  padding: 24px 100px 24px 24px;
`;
