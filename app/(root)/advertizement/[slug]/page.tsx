'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAdsHolders } from '@/api/ads';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function AdvertizementPageTypes({ params }: { params: { slug: string } }) {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const pageType = params.slug;

  /**
   * Services
   * _______________________________________________________________________________
   */

  const { data } = useQuery({ queryKey: ['ads-page-type'], queryFn: async () => await getAdsHolders(pageType) });
  console.log('DATA', data);

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title='' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          {/* <AdsContainer data={data} /> */}s
        </Grid>
      </Box>
    </Flex>
  );
}
