'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAdsHolders } from '@/api/advertizement';
import AdsDetailCard from '@/components/advertizement/AdsDetailCard';
import Header from '@/layout/Header';
import { Box, Flex, Grid, Heading } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';

export default function AdvertizementPageTypes({ params }: { params: { slug: string } }) {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const pageType = params.slug;
  /**
   * Services
   * _______________________________________________________________________________
   */

  const { data, isLoading, isError, isFetching } = useQuery({ queryKey: ['ads-page-type'], queryFn: async () => await getAdsHolders(pageType) });

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const handleHeader = () => {
    switch (pageType) {
      case 'main_page':
        return 'تبلیغات صفحه اصلی';
      case 'planner':
        return 'تبلیغات صفحه برنامه ریز';
      case 'tourmaker':
        return 'تبلیغات صفحه تورساز';
      case 'article':
        return 'تبلیغات صفحه مقاله';
      case 'article_list':
        return 'تبلیغات صفحه مقالات';
      case 'maps':
        return 'تبلیغات صفحه نقشه گردی';
      case 'place':
        return 'تبلیغات صفحه نقطه';
      default:
        return '';
    }
  };

  /**
   * Loading and Error
   * _______________________________________________________________________________
   */
  if (isLoading || isFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 2.5 }} />
      </Flex>
    );

  if (!data || isError) return ToastError('مشکلی پیش آمده . لطفا دوباره تلاش نمایید');
  console.log('AdsDetailCardAdsDetailCardAdsDetailCard', data);
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title={handleHeader()} isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <Grid gapY={'5'}>
            {data.length === 0 ? (
              <Flex width={'100%'} mt={'4'}>
                <Heading as='h4' size={'4'} style={{ color: colorPalette.gray[11] }}>
                  در حال حاضر آگهی برای نمایش وجود ندارد.
                </Heading>
              </Flex>
            ) : (
              data.map((item, index) => item && <AdsDetailCard key={index} data={item as any} />)
            )}
          </Grid>
        </Grid>
      </Box>
    </Flex>
  );
}
