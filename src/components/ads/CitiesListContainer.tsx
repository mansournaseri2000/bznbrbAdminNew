import React from 'react';

import { Grid } from '@/libs/primitives';

import ProvinceDetailCard from '../develop/confirmations/province-detail-card/ProvinceDetailCard';

const CitiesListContainer = () => {
  return (
    <Grid width={'100%'} columns={'2'} gap={'5'}>
      <ProvinceDetailCard
        type='province'
        title='استان آذربایجان شرقی'
        firstLabel='آخرین ویرایش'
        secondLabel='بنر های خالی'
        firstValue={'24 فروردین 1403'}
        secondValue={'4 عدد'}
        buttonText='مدیریت تبلیغات'
        path='/ads/province-list/cities/cities-ad'
      />
      <ProvinceDetailCard
        type='province'
        title='استان آذربایجان شرقی'
        firstLabel='آخرین ویرایش'
        secondLabel='بنر های خالی'
        firstValue={'24 فروردین 1403'}
        secondValue={'4 عدد'}
        buttonText='مدیریت تبلیغات'
        path='/ads/province-list/cities/cities-ad'
      />
      <ProvinceDetailCard
        type='province'
        title='استان آذربایجان شرقی'
        firstLabel='آخرین ویرایش'
        secondLabel='بنر های خالی'
        firstValue={'24 فروردین 1403'}
        secondValue={'4 عدد'}
        buttonText='مدیریت تبلیغات'
        path='/ads/province-list/cities/cities-ad'
      />
      <ProvinceDetailCard
        type='province'
        title='استان آذربایجان شرقی'
        firstLabel='آخرین ویرایش'
        secondLabel='بنر های خالی'
        firstValue={'24 فروردین 1403'}
        secondValue={'4 عدد'}
        buttonText='مدیریت تبلیغات'
        path='/ads/province-list/cities/cities-ad'
      />
    </Grid>
  );
};

export default CitiesListContainer;
