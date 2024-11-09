import React from 'react';

import { Grid, IconButton, TextField } from '@/libs/primitives';
import { Filter } from '@/public/icon';

const CommentManagementHero = () => {
  return (
    <Grid width={'100%'} gapX={'5'} style={{ gridTemplateColumns: 'auto 3fr' }}>
      <IconButton size={'3'} colorVariant='BLUE' variant='soft'>
        <Filter />
      </IconButton>
      <TextField placeholder='جستجو نام نقطه' />
    </Grid>
  );
};

export default CommentManagementHero;
