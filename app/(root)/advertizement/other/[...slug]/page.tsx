'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import AdsListRoot from '@/components/advertizement/other/AdsListRoot';
import OtherListRoot from '@/components/advertizement/other/OtherListRoot';
import Header from '@/layout/Header';
import { useResolveIdsToNames } from '@/libs/hooks/useResolveIdsToName';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function AdvertizementOtherPages({ params }: { params: { slug: string[] } }) {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const isShowAdsList = Boolean(params.slug[1]) === true;

  /**
   * services
   * _______________________________________________________________________________
   */
  const { data } = useQuery({ queryKey: ['constant'], queryFn: async () => await getAllPlacesConstants() });
  const resolveProvinceName = useResolveIdsToNames(Number(params.slug[1]), data?.provinces ?? []);
  const resolveCategoryName = useResolveIdsToNames(Number(params.slug[1]), data?.categories ?? []);
  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const renderElement = () => {
    if (!isShowAdsList) return <OtherListRoot />;
    if (isShowAdsList) return <AdsListRoot />;
    return '';
  };

  const renderHeader = () => {
    if (params.slug[0] === 'province') {
      if (isShowAdsList) return ` تبلیغات استان ها - استان ${resolveProvinceName}`;
      return 'تبلیغات صحفه استان ها - لیست استان ها';
    }
    if (params.slug[0] === 'province_places') {
      if (isShowAdsList) return `تبلیغات صحفه نقاط استان ها  - استان ${resolveProvinceName}`;
      return 'تبلیغات صحفه نقاط استان ها - لیست استان ها';
    }
    if (params.slug[0] === 'category') {
      if (isShowAdsList) return `تبلیغات صفحه دسته بندی - ${resolveCategoryName}`;
      return 'تبلیغات صفحه دسته بندی';
    }

    return '';
  };

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title={renderHeader()} isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          {renderElement()}
        </Grid>
      </Box>
    </Flex>
  );
}
