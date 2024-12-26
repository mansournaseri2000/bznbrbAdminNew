'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getBannerPageById } from '@/api/ads';
import { Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

import AdPageCard from './AdPageCard';

const CitiesListContainer = () => {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const params = useParams();
  const cityId = params.slug[2];
  console.log('🚀 ~ CitiesListContainer ~ cityId:', cityId);
  /**
   * Services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['banner-provinces'], queryFn: async () => await getBannerPageById(Number(cityId)) });

  console.log('CITY DATA', data);
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
      {data.provinces.map((item, index) => (
        <AdPageCard
          key={index}
          type='banner'
          label={item.cityName}
          latestUpdatedAt={item.lastUpdated}
          holdersCount={item.bannerCount}
          adKey='city'
          path={`/ads/province/city/cities-ad/${item.cityId}`}
        />
      ))}
    </Grid>
  );
};

export default CitiesListContainer;
