'use client';

import React from 'react';

import AdsContainer from '@/components/advertizement/AdsContainer';
import { articleAdOptions, articleListOptions, mainAdsOptions, mapOptions, pointInfoOptions, tourListOptions, tourPlanner, tripPlannerOptions, tripPlanOptions } from '@/constants/ads';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function AdsPages({ params }: { params: { slug: string } }) {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const pageType = params.slug;
  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */

  const renderElement = () => {
    switch (pageType) {
      case 'main_page':
        return <AdsContainer data={mainAdsOptions} />;
      case 'planner':
        return <AdsContainer data={tripPlannerOptions} />;
      case 'planner_trips':
        return <AdsContainer data={tourPlanner} />;
      case 'tourmaker':
        return <AdsContainer data={tripPlanOptions} />;
      case 'tours':
        return <AdsContainer data={tourListOptions} />;
      case 'article':
        return <AdsContainer data={articleListOptions} />;
      case 'article_list':
        return <AdsContainer data={articleAdOptions} />;
      case 'maps':
        return <AdsContainer data={mapOptions} />;
      case 'place':
        return <AdsContainer data={pointInfoOptions} />;
    }
  };

  const getTitle = () => {
    if (pageType === 'main_page') return 'تبلیغات صفحه اصلی';
    if (pageType === 'planner') return 'تبلیغات برنامه ساز';
    if (pageType === 'planner_trips') return 'تبلیغات تور ساز';
    if (pageType === 'tourmaker') return 'تبلیغات برنامه سفر';
    if (pageType === 'tours') return 'تبلیغات لیست تورها';
    if (pageType === 'article') return 'تبلیغات لیست مقالات';
    if (pageType === 'articlelist') return 'تبلیغات مقالات';
    if (pageType === 'maps') return 'تبلیغات نقشه';
    if (pageType === 'place') return 'تبلیغات نقطه';
    return '';
  };
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title={getTitle()} isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          {renderElement()}
        </Grid>
      </Box>
    </Flex>
  );
}
