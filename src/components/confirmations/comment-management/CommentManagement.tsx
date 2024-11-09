import React from 'react';

import { Grid } from '@/libs/primitives';

import CommentManagementHero from './hero/CommentManagementHero';
import CommentManagementList from './list/CommentManagementList';

const CommentManagement = () => {
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      <CommentManagementHero />
      <CommentManagementList />
      {/* TODO:add pagination */}
    </Grid>
  );
};

export default CommentManagement;
