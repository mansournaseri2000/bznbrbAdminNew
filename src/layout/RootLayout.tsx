'use client';

import { ReactNode } from 'react';

import styled from 'styled-components';

import { Grid } from '@/libs/primitives';

import Sidebar from './Sidebar';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Grid display={{ initial: 'none', lg: 'grid' }}>
        <Sidebar isMobile={false} />
      </Grid>

      <Main>{children}</Main>
    </>
  );
};

export default RootLayout;

export const Main = styled.main`
  min-height: calc(100vh - 240px);
  /* max-width: 1920px; */
  /* margin: 0 auto; */
`;
