import React from 'react';

import { useParams, useRouter } from 'next/navigation';

import { citiesOptions } from '@/constants/ads';
import { Grid } from '@/libs/primitives';

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
  console.log('🚀 ~ CitiesListRoot ~ provinceId:', provinceId);
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
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Grid width={'100%'} columns={{ initial: '1', sm: '2' }} gap={'5'}>
      {citiesOptions.map((item, index) => {
        console.log('ITEM', item);
        return (
          <AdsManagmentListCard
            key={index}
            type='other'
            lable={item.name}
            latestUpdatedAt={item.lastEdit}
            space={item.emptyBanners}
            handleRedirectAdsManagment={() => router.push(handleRedirectAds(item.id))}
          />
        );
      })}
    </Grid>
  );
};

export default CitiesListRoot;
