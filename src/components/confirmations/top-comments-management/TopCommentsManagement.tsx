import React from 'react';

import ProvinceDetailCard from '@/components/develop/confirmations/province-detail-card/ProvinceDetailCard';
import { Grid } from '@/libs/primitives';

const TopCommentsManagement = () => {
  return (
    <Grid width={'100%'} columns={'2'} gap={'5'}>
      <ProvinceDetailCard
        id={1}
        title='استان آذربایجان شرقی'
        type='comments'
        firstLabel='کامنت های فعال'
        secondLabel='آخرین ویرایش'
        firstValue={3}
        secondValue='24 فروردین 1403'
        path='/confirmations/top-comments/comments'
        buttonText='مشاهده نظرات'
      />
      <ProvinceDetailCard
        id={2}
        title='استان آذربایجان شرقی'
        type='comments'
        firstLabel='کامنت های فعال'
        secondLabel='آخرین ویرایش'
        firstValue={3}
        secondValue='24 فروردین 1403'
        path='/confirmations/top-comments/comments'
        buttonText='مشاهده نظرات'
      />
      <ProvinceDetailCard
        id={1}
        title='استان آذربایجان شرقی'
        type='comments'
        firstLabel='کامنت های فعال'
        secondLabel='آخرین ویرایش'
        firstValue={3}
        secondValue='24 فروردین 1403'
        path='/confirmations/top-comments/comments'
        buttonText='مشاهده نظرات'
      />
      <ProvinceDetailCard
        id={2}
        title='استان آذربایجان شرقی'
        type='comments'
        firstLabel='کامنت های فعال'
        secondLabel='آخرین ویرایش'
        firstValue={3}
        secondValue='24 فروردین 1403'
        path='/confirmations/top-comments/comments'
        buttonText='مشاهده نظرات'
      />
      <ProvinceDetailCard
        id={1}
        title='استان آذربایجان شرقی'
        type='comments'
        firstLabel='کامنت های فعال'
        secondLabel='آخرین ویرایش'
        firstValue={3}
        secondValue='24 فروردین 1403'
        path='/confirmations/top-comments/comments'
        buttonText='مشاهده نظرات'
      />
      <ProvinceDetailCard
        id={2}
        title='استان آذربایجان شرقی'
        type='comments'
        firstLabel='کامنت های فعال'
        secondLabel='آخرین ویرایش'
        firstValue={3}
        secondValue='24 فروردین 1403'
        path='/confirmations/top-comments/comments'
        buttonText='مشاهده نظرات'
      />
      {/* TODO: add pagination */}
    </Grid>
  );
};

export default TopCommentsManagement;
