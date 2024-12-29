'use client';

import { ReactNode } from 'react';

import styled from 'styled-components';

import Sidebar from './Sidebar';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar />
      <Main>{children}</Main>
    </>
  );
};

export default RootLayout;

export const Main = styled.main`
  min-height: calc(100vh - 240px);
`;
