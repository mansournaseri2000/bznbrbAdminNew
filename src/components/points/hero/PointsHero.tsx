import React from 'react';

import { Button, Grid, IconButton, TextField } from '@/libs/primitives';

const PointsHero = () => {
  return (
    <Grid width={'100%'} columns={'3'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 2fr ' }}>
      <IconButton size={'3'}>icons</IconButton>
      <Button size={'3'}>حذف فیلتر ها</Button>
      <TextField placeholder='جستجوی نام عنوان' />
    </Grid>
  );
};

export default PointsHero;
