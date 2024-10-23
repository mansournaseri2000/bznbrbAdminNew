'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { Button, Grid, TextField } from '@/libs/primitives';

const ArticleHero = () => {
  const methods = useForm({ defaultValues: { search: '' } });
  const { control, watch } = methods;
  console.log('Watch', watch());
  const router = useRouter();
  return (
    <Grid width={'100%'} columns={'2'} gapX={'5'} style={{ gridTemplateColumns: '0.4fr 3fr' }}>
      <Button size={'3'} onClick={() => router.push('/data-base/article/create-article')}>
        افزودن مقاله{' '}
      </Button>
      <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی عنوان  مقاله' />} />
    </Grid>
  );
};

export default ArticleHero;
