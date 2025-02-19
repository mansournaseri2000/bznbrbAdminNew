'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getProvinceListForAdvertizement } from '@/api/ads';
import AdPageCard2 from '@/components/advertizement/AdPageCard2';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

export default function AdsProvinces() {
  /**
   * Services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['provinces'], queryFn: async () => await getProvinceListForAdvertizement() });

  /**
   * Loading & Error
   * _______________________________________________________________________________
   */
  if (isLoading || isFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 2.5 }} />
      </Flex>
    );
  if (!data || isError) return ToastError('مشکلی پیش آمده.لطفا مجددا تلاش نمایید');
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title='تبلیغات استان ها' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} columns={'2'} gap={'5'}>
          {data.provinces.map((item, index) => (
            <AdPageCard2
              key={index}
              type='province_list'
              name={item.name}
              emptyBanners={item.bannerCount}
              path='/advertizement/ads-provinces/provinces/province-ads'
              cityPath={`/advertizement/ads-provinces/cities/cities-list/${item.id}`}
              latestUpdatedAt={item.lastUpdated}
              // path={`/advertizement/ads-provinces/provinces/`}
              // cityPath={`/advertizement/ads-provinces/cities/${item.id}`}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
}
