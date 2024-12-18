'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAllTopCommentsForProvince } from '@/api/confirmations';
import ProvinceDetailCard from '@/components/develop/confirmations/province-detail-card/ProvinceDetailCard';
import { Grid } from '@/libs/primitives';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';

const TopCommentsManagement = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: topCommentsData, isLoading, isFetching } = useQuery({ queryKey: ['top-comments'], queryFn: async () => await getAllTopCommentsForProvince() });

  console.log('topComments', topCommentsData);

  if (isLoading || isFetching || !topCommentsData) return <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '100px' }} />;

  return (
    <Grid width={'100%'} columns={'2'} gap={'5'}>
      {topCommentsData?.map(item => (
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
