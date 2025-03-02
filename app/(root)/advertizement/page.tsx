'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAdsPages } from '@/api/advertizement';
import AdsManagmentListCard from '@/components/advertizement/AdsManagmentListCard';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

export default function AdsPages() {
  /**
   * Services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['ads-page'], queryFn: async () => await getAdsPages() });
  const { push } = useRouter();
  /**
   * Loading & Error
   * _______________________________________________________________________________
   */
  if (isLoading || isFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 2.5 }} />
      </Flex>
    );
  if (!data || isError) return ToastError('مشکلی پیش آمده.لطفا مجددا تلاش نمایید');

  const handleRedirect = (adKey: any) => {
    if (adKey === 'main_page' || adKey === 'planner' || adKey === 'tourmaker' || adKey === 'article_list' || adKey === 'article' || adKey === 'place' || adKey === 'maps') {
      return push(`/advertizement/${adKey}`);
    } else if (adKey === 'tours' || adKey === 'planner_trips') {
      return push(`/advertizement/trip/${adKey}`);
    } else {
      return push(`/advertizement/other/${adKey}`);
    }
  };
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title='مدیریت تبلیغات' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <Grid width={'100%'} columns={{ initial: '1', sm: '2' }} gap={'5'}>
            {data.map((item, index) => (
              <AdsManagmentListCard
                key={index}
                lable={item.label}
                latestUpdatedAt={item.latestUpdatedAt}
                space={item.space}
                type='main'
                holder={item.holder}
                handleRedirectAdsManagment={() => {
                  handleRedirect(item.key);
                }}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Flex>
  );
}
