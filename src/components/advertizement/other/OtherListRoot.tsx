'use client';

import React from 'react';

import { useParams, useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getListByPageKey } from '@/api/advertizement';
import { Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

import AdsManagmentListCard from '../AdsManagmentListCard';

const OtherListRoot = () => {
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

  console.log('ProvinceList', data);

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const handleRedirectAds = (id: number) => {
    if (pageType === 'province') return `province/${id}`;
    if (pageType === 'province_places') return `province_places/${id}`;
    if (pageType === 'category') return `category/${id}`;
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
          type='other'
          lable={item.label}
          latestUpdatedAt={item.latestUpdatedAt}
          space={item.freeSpace}
          handleRedirectAdsManagment={() => router.push(handleRedirectAds(Number(item.key)))}
        />
      ))}
    </Grid>
  );
};

export default OtherListRoot;
