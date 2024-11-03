import React from 'react';

import { Flex, Grid } from '@/libs/primitives';
import BoxWrapper from '@/libs/shared/wrapper/BoxWrapper';

export default function Test() {
  return (
    <Grid width={'100%'} height={'100vh'} justify={'center'} align={'center'} p={'9'}>
      <BoxWrapper hero='تست نرم افزار'>
        <Flex>sw</Flex>
      </BoxWrapper>
    </Grid>
  );
}
