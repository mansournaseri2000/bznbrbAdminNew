import React from 'react';

import ProvinceDetailCard from '@/components/develop/confirmations/province-detail-card/ProvinceDetailCard';
import { Grid } from '@/libs/primitives';

const TopCommentsManagement = () => {
  return (
    <Grid width={'100%'} columns={'2'} gap={'5'}>
      <ProvinceDetailCard id={1} province='استان آذربایجان شرقی' type='comments' subtitle={3} lastEditDate='24 فروردین 1403' />
      <ProvinceDetailCard id={2} province='استان آذربایجان شرقی' type='comments' subtitle={3} lastEditDate='24 فروردین 1403' />
      <ProvinceDetailCard id={1} province='استان آذربایجان شرقی' type='comments' subtitle={3} lastEditDate='24 فروردین 1403' />
      <ProvinceDetailCard id={2} province='استان آذربایجان شرقی' type='comments' subtitle={3} lastEditDate='24 فروردین 1403' />
      <ProvinceDetailCard id={1} province='استان آذربایجان شرقی' type='comments' subtitle={3} lastEditDate='24 فروردین 1403' />
      <ProvinceDetailCard id={2} province='استان آذربایجان شرقی' type='comments' subtitle={3} lastEditDate='24 فروردین 1403' />
      {/* TODO: add pagination */}
    </Grid>
  );
};

export default TopCommentsManagement;
