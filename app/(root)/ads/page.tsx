'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAdsPages } from '@/api/ads';
import AdPageCard from '@/components/ads/AdPageCard';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

export default function Ads() {
  /**
   * Services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['ads-page'], queryFn: async () => await getAdsPages() });
  console.log('DATA', data);
  /**
   * Loading & Error
   * _______________________________________________________________________________
   */
  if (isLoading || isFetching) return <Spinner style={{ margin: '50px auto', scale: 2 }} />;
  if (!data || isError) return ToastError('مشکلی پیش آمده.لطفا مجددا تلاش نمایید');
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title='مدیریت تبلیغات' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>

        <Grid width={'100%'} columns={{ initial: '1', sm: '2' }} gap={'5'}>
          {data.map((item, index) => (
            <AdPageCard key={index} holdersCount={item.holdersCount} adKey={item.key} label={item.label} latestUpdatedAt={item.latestUpdatedAt} type='banner' path={`/ads/${item.key}`} />
          ))}
        </Grid>
        </Grid>
      </Box>
    </Flex>
  );
}
