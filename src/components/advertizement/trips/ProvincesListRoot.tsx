'use client';

import React from 'react';

import { useParams, useRouter } from 'next/navigation';

import { provincesOptions } from '@/constants/ads';
import { Grid } from '@/libs/primitives';

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
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Grid width={'100%'} columns={{ initial: '1', sm: '2' }} gap={'5'}>
      {provincesOptions.map((item, index) => (
        <AdsManagmentListCard
          key={index}
          type='provinces'
          lable={item.name}
          latestUpdatedAt={item.lastEdit}
          space={item.emptyBanners}
          handleRedirectAdsManagment={() => router.push(handleRedirectAds(item.id))}
          handleRedirectCities={() => router.push(handleRedirectCities(item.id))}
        />
      ))}
    </Grid>
  );
};

export default ProvincesListRoot;
