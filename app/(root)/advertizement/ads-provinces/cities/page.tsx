'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getCityListById } from '@/api/ads';
import AdPageCard from '@/components/advertizement/AdPageCard';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

export default function Cities() {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const params = useParams();
  const cityId = params.slug[2];
  console.log('🚀 ~ Cities ~ cityId:', cityId);
  /**
   * Services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['banner-provinces'], queryFn: async () => await getCityListById(Number(cityId)) });
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
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title='تبلیغات شهرستان' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} columns={'2'} gap={'5'}>
          <AdPageCard type='simple' />
        </Grid>
      </Box>
    </Flex>
  );
}
