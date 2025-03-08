'use client';

import React from 'react';

import { useRouter } from '@bprogress/next';
import styled from 'styled-components';

import { Flex, IconButton, Text } from '@/libs/primitives';
import { TriangleLeft } from '@/public/icon';
import { Boxshadow, colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type HeaderProps = {
  title: string;
  isNavigation: boolean;
};

const Header = (props: HeaderProps) => {
  const { title, isNavigation } = props;
  const router = useRouter();
  return (
    <Root>
      <Container>
        <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
          {title}
        </Text>
        {isNavigation && (
          <IconButton size={'3'} variant='surface' onClick={() => router.back()}>
            <TriangleLeft color='#373737' />
          </IconButton>
        )}
      </Container>
    </Root>
  );
};

export default Header;

const Root = styled.header`
  padding: 14.5px 100px 14.5px 24px;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid ${colorPalette.gray[6]};
  background-color: ${colorPalette.gray[1]};
  box-shadow: ${Boxshadow.shadow1};
  z-index: 10;
`;

const Container = styled(Flex)`
  max-width: 1920px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;
