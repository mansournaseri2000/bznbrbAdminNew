'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Button, Flex, Grid, TextField } from '@/libs/primitives';

const PlansHero = () => {
  const router = useRouter();
  return (
    <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '1fr 4fr 1.5fr' }}>
      <Button size={'3'} onClick={() => router.push('/plans/create-plane')}>
        افزودن برنامه
      </Button>
      <TextField placeholder='جستجوی نام کاربر' />
      <Flex justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}>
        مرتب سازی بر اساس
      </Flex>
    </Grid>
  );
};

export default PlansHero;
