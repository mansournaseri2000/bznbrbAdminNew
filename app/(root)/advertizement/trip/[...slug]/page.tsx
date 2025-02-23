'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import AdsListRoot from '@/components/advertizement/trips/AdsListRoot';
import CitiesListRoot from '@/components/advertizement/trips/CitiesListRoot';
import ProvincesListRoot from '@/components/advertizement/trips/ProvincesListRoot';
import Header from '@/layout/Header';
import { useResolveIdsToNames } from '@/libs/hooks/useResolveIdsToName';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function AdvertizementTrips({ params }: { params: { slug: string[] } }) {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  // const isShowProvinceList = (Boolean(params.slug[2]) === false && Boolean(params.slug[1]) === false && params.slug[0] === 'planner_trips') || params.slug[0] === 'tours';
  // const isShowProvinceListAds = (params.slug[2] !== 'cities' && params.slug[1] === 'provinces' && Boolean(params.slug[2]) === true && params.slug[0] === 'planner_trips') || params.slug[0] === 'tours';
  const isShowProvinceList = (params.slug[0] === 'planner_trips' && !params.slug[1] && !params.slug[2]) || (params.slug[0] === 'tours' && !params.slug[1] && !params.slug[2]);

  const isShowProvinceListAds =
    (params.slug[0] === 'planner_trips' && params.slug[1] === 'provinces' && params.slug[2] && params.slug[2] !== 'cities') ||
    (params.slug[0] === 'tours' && params.slug[1] === 'provinces' && params.slug[2] && params.slug[2] !== 'cities');

  const isShowCitiesList = params.slug[2] === 'cities' && Boolean(params.slug[3]) === true && Boolean(params.slug[5]) === false;
  const isShowCitiesListAds = params.slug[2] === 'cities' && Boolean(params.slug[3]) === true && Boolean(params.slug[4]) === true;
  /**
   * services
   * _______________________________________________________________________________
   */
  const { data } = useQuery({ queryKey: ['constant'], queryFn: async () => await getAllPlacesConstants() });
  const resolveCityName = useResolveIdsToNames(Number(params.slug[7]), data?.towns ?? []);
  const resolveProvinceName = useResolveIdsToNames(Number(params.slug[2]), data?.provinces ?? []);
  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const renderElement = () => {
    if (isShowProvinceList) return <ProvincesListRoot />;
    if (isShowProvinceListAds || isShowCitiesListAds) return <AdsListRoot />;
    if (isShowCitiesList) return <CitiesListRoot />;
  };

  const handleHeader = () => {
    if (params.slug[0] === 'planner_trips') {
      if (Boolean(params.slug[3]) === true && params.slug[2] === 'cities') {
        if (Boolean(params.slug[4]) === true) return ` تبلیغات برنامه سفر - شهرستان ${resolveCityName}`;
        return 'تبلیغات برنامه سفر - لیست شهرستان ها';
      }
      if (Boolean(params.slug[2]) === true && params.slug[1] === 'provinces') return `تبلیغات برنامه سفر - استان ${resolveProvinceName}`;
      return 'تبلیغات برنامه سفر - لیست استان ها';
    }

    if (params.slug[0] === 'tours') {
      if (Boolean(params.slug[3]) === true && params.slug[2] === 'cities') {
        if (Boolean(params.slug[4]) === true) return `تبلیغات لیست تورها - شهرستان ${resolveCityName}`;
        return 'تبلیغات لیست تورها - لیست شهرستان ها';
      }
      if (Boolean(params.slug[2]) === true && params.slug[1] === 'provinces') return `تبلیغات لیست تورها - استان ${resolveProvinceName}`;
      return 'تبلیغات لیست تورها - لیست استان ها';
    }

    return '';
  };

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title={handleHeader()} isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          {renderElement()}
        </Grid>
      </Box>
    </Flex>
  );
}
