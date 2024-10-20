'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { plansSortConstant } from '@/constants/plans';
import { Button, Grid, SelectItem, SelectRoot, TextField } from '@/libs/primitives';

const PlansHero = () => {
  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      search: '',
      sort: '',
    },
  });

  const { control, watch } = methods;
  console.log('Watch', watch());

  return (
    <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '1fr 4fr 1.5fr' }}>
      <Button size={'3'} onClick={() => router.push('/plans/create-plane')}>
        افزودن برنامه
      </Button>

      <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی نام کاربر' />} />

      <Controller
        name='sort'
        control={control}
        render={({ field }) => (
          <SelectRoot
            {...field}
            placeholder='مرتب سازی بر اساس'
            size={'3'}
            value={String(field.value)}
            onValueChange={val => {
              field.onChange(val);
            }}
          >
            {plansSortConstant.map(item => (
              <SelectItem key={item.id} value={String(item.id)} style={{ paddingBottom: '8px 12px', borderBottom: '1px solid #D4D4D4' }}>
                {item.name}
              </SelectItem>
            ))}
          </SelectRoot>
        )}
      />
    </Grid>
  );
};

export default PlansHero;
