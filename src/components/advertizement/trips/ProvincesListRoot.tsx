'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import { useRouter } from '@bprogress/next';
import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getListByPageKey } from '@/api/advertizement';
import { Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

import AdsManagmentListCard from '../AdsManagmentListCard';

const ProvincesListRoot = () => {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const router = useRouter();
  const params = useParams();
  const pageType = params.slug[0];

  /**
   * services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['ads-list'], queryFn: async () => await getListByPageKey(pageType) });

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const handleRedirectAds = (provinceId: number) => {
    if (pageType === 'planner_trips') return `planner_trips/provinces/${provinceId}`;
    if (pageType === 'tours') return `tours/provinces/${provinceId}`;
    return '';
  };

  const handleRedirectCities = (provinceId: number) => {
    if (pageType === 'planner_trips') return `planner_trips/provinces/cities/${provinceId}`;
    if (pageType === 'tours') return `tours/provinces/cities/${provinceId}`;
    return '';
  };
  /**
   * Loading and Error
   * _______________________________________________________________________________
   */
  if (isLoading || isFetching) {
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 2 }} />
      </Flex>
    );
  }

  if (!data || isError) return ToastError('مشکلی پیش آمده است . لطفا مجددا تلاش کنید');
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Grid width={'100%'} columns={{ initial: '1', sm: '2' }} gap={'5'}>
      {data.map((item, index) => (
        <AdsManagmentListCard
          key={index}
          type='provinces'
          lable={item.label}
          latestUpdatedAt={item.latestUpdatedAt}
          space={item.freeSpace}
          handleRedirectAdsManagment={() => router.push(handleRedirectAds(Number(item.key)))}
          handleRedirectCities={() => router.push(handleRedirectCities(Number(item.key)))}
        />
      ))}
    </Grid>
  );
};

export default ProvincesListRoot;
