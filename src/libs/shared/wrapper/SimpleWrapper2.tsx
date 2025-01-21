import React from 'react';

import { Flex, Grid, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  hero: string;
  type: 'readOnly' | 'changeAble';
  children: React.ReactNode;
};

const SimpleWrapper2 = ({ hero, type,children }: Props) => {
  return (
    <Grid width={'100%'} style={{ borderRadius: 8, border: `1px solid ${colorPalette.gray[6]}` }}>
      <Flex
        width={'100%'}
        justify={'between'}
        align={'center'}
        p={'8px 16px'}
        style={{ height: 'fit-content', backgroundColor: type === 'changeAble' ? colorPalette.blue[4] : colorPalette.gray[3], borderRadius: '8px 8px 0px 0px' }}
      >
        <Text {...typoVariant.title2} style={{ color: colorPalette.gray[11] }}>
          {hero}
        </Text>
      </Flex>
      <Grid gap={'16px'} p={'24px 16px 16px 16px'}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SimpleWrapper2;
