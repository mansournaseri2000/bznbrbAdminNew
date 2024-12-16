import React from 'react';

import { Flex, Grid, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  hero: string;
  iconContent?: React.ReactNode;
  children: React.ReactNode;
  data?: any;
};

const SimpleWrapper = ({ hero, iconContent, children, data }: Props) => {
  return (
    <Grid width={'100%'} style={{ borderRadius: 12, border: `1px solid ${colorPalette.gray[6]}` }}>
      <Flex width={'100%'} align={'center'} justify={'between'} px={'4'} py={'2'} style={{ borderBottom: `1px solid ${colorPalette.gray[6]}` }}>
        <Text {...typoVariant.title2} style={{ color: colorPalette.gray[11], fontWeight: 700 }}>
          {hero}
        </Text>
        {data?.length !== 0 && <>{iconContent}</>}
      </Flex>
      <Grid width={'100%'} p={'4'} gapY={'5'}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SimpleWrapper;
