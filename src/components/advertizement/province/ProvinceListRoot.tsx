'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getProvinceListForAdvertizement } from '@/api/ads';
import AdPageCard2 from '@/components/advertizement/AdPageCard2';
import { Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

export const ProvinceListRoot = () => {
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
        />
      ))}
    </Grid>
  );
};
export default ProvinceListRoot;
