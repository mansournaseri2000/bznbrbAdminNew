'use client';

import React from 'react';



// import AdPageCard from '@/components/advertizement/AdPageCard';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function CitiesPage() {
  /**
   * Const and Variables
   * _______________________________________________________________________________

  /**
   * Services
   * _______________________________________________________________________________
   */
  /**
   * Loading & Error
   * _______________________________________________________________________________
   */

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title='تبلیغات شهرستان' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} columns={'2'} gap={'5'}>
          {/* <AdPageCard  /> */}s
        </Grid>
      </Box>
    </Flex>
  );
}
