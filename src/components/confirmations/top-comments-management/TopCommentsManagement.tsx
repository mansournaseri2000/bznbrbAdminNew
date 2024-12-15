'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAllTopCommentsForProvince } from '@/api/confirmations';
import ProvinceDetailCard from '@/components/develop/confirmations/province-detail-card/ProvinceDetailCard';
import { Grid } from '@/libs/primitives';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';

const TopCommentsManagement = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: topCommentsData } = useQuery({ queryKey: ['top-comments'], queryFn: async () => await getAllTopCommentsForProvince() });

  console.log('topComments', topCommentsData);

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
