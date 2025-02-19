'use client';

import React from 'react';

import AdsContainer from '@/components/advertizement/AdsContainer';
import CitiesListContainer from '@/components/advertizement/CitiesListContainer';
import { cityAdOptions } from '@/constants/ads';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function CitiesManagementPage({ params }: { params: { slug: string[] } }) {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const pageType = params.slug[0];
  console.log('pageType', pageType);

  const renderElement = () => {
    switch (pageType) {
      case 'cities-list':
        return <CitiesListContainer />;
      case 'ad-list-city':
        return <AdsContainer data={cityAdOptions} />;
    }
  };
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title={''} isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          {renderElement()}
        </Grid>
      </Box>
    </Flex>
  );
}
