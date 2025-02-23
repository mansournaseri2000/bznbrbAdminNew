'use client';

import React from 'react';

import { useParams, useRouter } from 'next/navigation';

import { categoriesOptionForAdsPage, provincesOptions } from '@/constants/ads';
import { Grid } from '@/libs/primitives';

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
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Grid width={'100%'} columns={{ initial: '1', sm: '2' }} gap={'5'}>
      {pageType !== 'category' &&
        provincesOptions.map((item, index) => (
          <AdsManagmentListCard
            key={index}
            type='other'
            lable={item.name}
            latestUpdatedAt={item.lastEdit}
            space={item.emptyBanners}
            handleRedirectAdsManagment={() => router.push(handleRedirectAds(item.id))}
          />
        ))}

      {pageType === 'category' &&
        categoriesOptionForAdsPage.map((item, index) => (
          <AdsManagmentListCard
            key={index}
            type='other'
            lable={item.name}
            latestUpdatedAt={item.latestUpdatedAt}
            space={item.emptyBanners}
            handleRedirectAdsManagment={() => router.push(handleRedirectAds(item.id))}
          />
        ))}
    </Grid>
  );
};

export default OtherListRoot;
