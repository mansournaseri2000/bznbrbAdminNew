import React from 'react';

import ProvinceTopCommentCard from '@/components/develope/confirmations/province-top-comment-card/ProvinceTopCommentCard';
import { Grid } from '@/libs/primitives';

const TopCommentsManagement = () => {
  return (
    <Grid width={'100%'} columns={'2'} gap={'5'} p={'5'}>
      <ProvinceTopCommentCard id={1} province='استان آذربایجان شرقی' activeComments={3} lastEditDate='24 فروردین 1403' />
      <ProvinceTopCommentCard id={2} province='استان آذربایجان شرقی' activeComments={3} lastEditDate='24 فروردین 1403' />
      <ProvinceTopCommentCard id={1} province='استان آذربایجان شرقی' activeComments={3} lastEditDate='24 فروردین 1403' />
      <ProvinceTopCommentCard id={2} province='استان آذربایجان شرقی' activeComments={3} lastEditDate='24 فروردین 1403' />
      <ProvinceTopCommentCard id={1} province='استان آذربایجان شرقی' activeComments={3} lastEditDate='24 فروردین 1403' />
      <ProvinceTopCommentCard id={2} province='استان آذربایجان شرقی' activeComments={3} lastEditDate='24 فروردین 1403' />
      {/* TODO: add pagination */}
    </Grid>
  );
};

export default TopCommentsManagement;
