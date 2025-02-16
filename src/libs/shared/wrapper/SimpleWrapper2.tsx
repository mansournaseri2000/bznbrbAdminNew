import React from 'react';

import { Flex, Grid, Heading } from '@/libs/primitives';
import { colorPalette } from '@/theme';

type Props = {
  hero: string;
  type: 'readOnly' | 'changeAble';
  children: React.ReactNode;
};

const SimpleWrapper2 = ({ hero, type, children }: Props) => {
  return (
    <Grid width={'100%'} style={{ borderRadius: 8, border: `1px solid ${colorPalette.gray[6]}` }}>
      <Flex
        width={'100%'}
        justify={'between'}
        align={'center'}
        p={'8px 16px'}
        style={{ height: 'fit-content', backgroundColor: type === 'changeAble' ? colorPalette.blue[4] : colorPalette.gray[3], borderRadius: '8px 8px 0px 0px' }}
      >
        <Heading as='h6' style={{ color: colorPalette.gray[11], fontWeight: 700, fontSize: '16px', lineHeight: '27px' }}>
          {hero}
        </Heading>
      </Flex>
      <Grid gap={'16px'} p={'24px 16px 16px 16px'} style={{ backgroundColor: colorPalette.gray[2] }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SimpleWrapper2;
