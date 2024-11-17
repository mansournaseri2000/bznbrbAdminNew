'use client';

import React, { ForwardedRef, ReactNode } from 'react';

import { GridProps } from '@radix-ui/themes';
import styled from 'styled-components';

import { Flex, Grid, Heading } from '@/libs/primitives';
import { colorPalette } from '@/theme';

type BoxWrapperProps = {
  hero: string;
  children: ReactNode;
} & GridProps;

const BoxWrapper = React.forwardRef<HTMLDivElement, BoxWrapperProps>(({ hero, children, ...props }: BoxWrapperProps, forwardRef: ForwardedRef<HTMLDivElement>) => (
  <Wrapper ref={forwardRef} {...props}>
    <Flex className='style' p={'8px 16px'}>
      <Heading as='h6' size={'6'} style={{ color: colorPalette.gray[1], fontWeight: 700 }}>
        {hero}
      </Heading>
    </Flex>
    <Grid gap={'16px'} p={'24px 16px 16px 16px'}>
      {children}
    </Grid>
  </Wrapper>
));

export default BoxWrapper;

const Wrapper = styled(Grid)`
  background-color: ${colorPalette.gray[2]};
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
