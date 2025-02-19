'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getCityListById } from '@/api/ads';
import { Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

import AdPageCard2 from './AdPageCard2';

const CitiesListContainer = () => {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const params = useParams();
  const cityId = params.slug[2];
  /**
   * Services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['banner-provinces'], queryFn: async () => await getCityListById(Number(cityId)) });

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
      {data?.provinces?.map((item, index) => (
        <AdPageCard2
          key={index}
          type='simple'
          name={item.provinceName}
          latestUpdatedAt={item.lastUpdated}
          emptyBanners={item.bannerCount}
          path={`/advertizement/ads-provinces/cities/ad-list-city/${item.cityId}`}
        />
      ))}
    </Grid>
  );
};

export default CitiesListContainer;
