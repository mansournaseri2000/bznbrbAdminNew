'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAllTopCommentsForProvince } from '@/api/confirmations';
import ProvinceDetailCard from '@/components/develop/confirmations/province-detail-card/ProvinceDetailCard';
import { Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';

const TopCommentsManagement = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: data, isLoading, isFetching, isError } = useQuery({ queryKey: ['top-comments'], queryFn: async () => await getAllTopCommentsForProvince() });

  console.log('topComments', data);
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
    <Grid width={'100%'} columns={'2'} gap={'5'}>
      {data.map(item => (
        <ProvinceDetailCard
          key={item.id}
          type='comments'
          buttonText='مشاهده نظرات'
          firstLabel='کامنت های فعال'
          secondLabel='آخرین ویرایش'
          path={`/confirmations/top-comments/comments/${item.id}`}
          title={item.name}
          firstValue={item.countOfAds}
          secondValue={item.latestUpdatedAt ? convertTimestampToPersianDate(item.latestUpdatedAt) : '-'}
        />
      ))}
    </Grid>
  );
};

export default TopCommentsManagement;
