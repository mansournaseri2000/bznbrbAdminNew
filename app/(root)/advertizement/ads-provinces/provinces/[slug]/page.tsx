import React from 'react';

import AdsContainer from '@/components/advertizement/AdsContainer';
import { provinceAdOptions } from '@/constants/ads';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function ProvinceAds() {
  return (
    <Flex direction={'column'}>
      <Header title={'تست'} isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <AdsContainer data={provinceAdOptions} />
        </Grid>
      </Box>
    </Flex>
  );
}
