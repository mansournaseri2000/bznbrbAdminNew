'use client';

import React from 'react';

import styled from 'styled-components';

import { Box } from '@/libs/primitives';
import { AuthBackground } from '@/public/icon';
import { colorPalette } from '@/theme';



const AuthRoot = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Container>
      {children}
      <Box width={'321px'} height={'404px'} position={'absolute'} left={'0'} overflow={'hidden'} bottom={'0'}>
        <AuthBackground width={'100%'} height={'100%'} style={{ opacity: '5%' }} />
      </Box>
    </Container>
  );
};

export default AuthRoot;

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colorPalette.gray[1]};
  position: relative;
`;
