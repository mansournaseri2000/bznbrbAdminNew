'use client';

import { ReactNode } from 'react';

import dynamic from 'next/dynamic';

import styled from 'styled-components';

import Header from './Header';

const Sidebar = dynamic(() => import('@/layout/Sidebar').then(module => module.default), { ssr: false });

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
