'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAdsHolders } from '@/api/ads';
import AdsDetailCard from '@/components/advertizement/AdsDetailCard';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

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

  const { data, isLoading, isError, isFetching } = useQuery({ queryKey: ['ads-page-type'], queryFn: async () => await getAdsHolders(pageType) });

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */

  /**
   * Loading and Error
   * _______________________________________________________________________________
   */
  if (isLoading || isFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 2.5 }} />
      </Flex>
    );

  if (!data || isError) return ToastError('مشکلی پیش آمده . لطفا دوباره تلاش نمایید');

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title='' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <Grid gapY={'5'}>{data.map((item, index, array) => item && <AdsDetailCard key={index} data={array.length - 1 === index ? null : (item as any)} />)}</Grid>
        </Grid>
      </Box>
    </Flex>
  );
}
