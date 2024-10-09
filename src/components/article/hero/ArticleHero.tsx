'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Button, Grid, TextField } from '@/libs/primitives';

const ArticleHero = () => {
  const router = useRouter();
  return (
    <Grid width={'100%'} columns={'2'} gapX={'5'} style={{ gridTemplateColumns: '0.4fr 3fr' }}>
      <Button size={'3'} onClick={() => router.push('/data-base/article/create-article')}>
        افزودن مقاله{' '}
      </Button>
      <TextField placeholder='جستجوی عنوان  مقاله' />
    </Grid>
  );
};

export default ArticleHero;
