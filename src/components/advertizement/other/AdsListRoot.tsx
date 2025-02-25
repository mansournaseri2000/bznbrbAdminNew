'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAdsHolders } from '@/api/advertizement';
import { Flex, Grid, Heading } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';

import AdsDetailCard from '../AdsDetailCard';

const AdsListRoot = () => {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const params = useParams();
  console.log('🚀 ~ AdsListRoot ~ params:', params);
  const pageType = params.slug[0];
  const handleId = Number(params.slug[1]);
  const handleType = params.slug[0] === 'province_places' || params.slug[0] === 'province' ? 'parent' : undefined;

  /**
   * Services
   * _______________________________________________________________________________
   */

  const { data, isLoading, isError, isFetching } = useQuery({ queryKey: ['ads-page-type'], queryFn: async () => await getAdsHolders(pageType, handleId, handleType) });

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

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
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
  );
};

export default AdsListRoot;
