'use client';

import { Controller, useForm } from 'react-hook-form';

import { Button, Grid, IconButton, TextField } from '@/libs/primitives';

const PointsHero = () => {
  const methods = useForm({
    defaultValues: { filter: '', search: '' },
  });
  const { control, watch } = methods;
  console.log('Watch', watch());
  return (
    <Grid width={'100%'} columns={'3'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 2fr ' }}>
      <IconButton size={'3'}>icons</IconButton>
      <Button size={'3'}>حذف فیلتر ها</Button>
      <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی نام عنوان' />} />
    </Grid>
  );
};

export default PointsHero;
