import React from 'react';

import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function AdvertizementOtherPages() {
  return (
    <Flex direction={'column'}>
      <Header title='' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          other route
        </Grid>
      </Box>
    </Flex>
  );
}
