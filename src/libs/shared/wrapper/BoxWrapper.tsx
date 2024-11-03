'use client';

import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { Flex, Grid, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type BoxWrapperProps = {
  hero: string;
  children: ReactNode;
};

const BoxWrapper = (props: BoxWrapperProps) => {
  return (
    <Wrapper>
      <Flex className='style' p={'8px 16px'}>
        <Text {...typoVariant.title2} style={{ color: colorPalette.gray[1] }}>
          {props.hero}
        </Text>
      </Flex>
      <Grid gap={'16px'} p={'24px 16px 16px 16px'}>
        {props.children}
      </Grid>
    </Wrapper>
  );
};

export default BoxWrapper;

const Wrapper = styled(Grid)`
  border-radius: 8px;
  border: 1px solid ${colorPalette.gray[6]};
  min-height: 100px;
  .style {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    height: fit-content;
    background-color: ${colorPalette.blue[10]};
  }
`;
