'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getProvinceListForAdvertizement } from '@/api/ads';
import { Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

import AdPageCard from './AdPageCard';

const ProvinceListContainer = () => {
  /**
   * Services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['provinces'], queryFn: async () => await getProvinceListForAdvertizement() });

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
    <Grid width={'100%'} columns={'2'} gap={'5'}>
      {data.provinces.map(Item => (
        <AdPageCard type='province_list' key={Item.id} label={Item.name} holdersCount={Item.bannerCount} latestUpdatedAt={Item.lastUpdated} path={`/ads/province/province-ad/${Item.id}`} />
      ))}
    </Grid>
  );
};

export default ProvinceListContainer;
