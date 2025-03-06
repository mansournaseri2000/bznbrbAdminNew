import React from 'react';

import { useParams, useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getCitiesList } from '@/api/advertizement';
import { Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

import AdsManagmentListCard from '../AdsManagmentListCard';

const CitiesListRoot = () => {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const router = useRouter();
  const params = useParams();
  const pageType = params.slug[0];
  const provinceId = params.slug[3];
  /**
   * services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['cities-list'], queryFn: async () => await getCitiesList(Number(provinceId)) });

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const handleRedirectAds = (cityId: number) => {
    if (pageType === 'planner_trips') return `planner_trips/provinces/cities/${provinceId}/${cityId}`;
    if (pageType === 'tours') return `tours/provinces/cities/${provinceId}/${cityId}`;
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
      {data?.map((item, index) => (
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

export default CitiesListRoot;
