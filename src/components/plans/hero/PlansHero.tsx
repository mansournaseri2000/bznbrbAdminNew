'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { plansSortConstant } from '@/constants/plans';
import { Button, Flex, Grid, IconButton, SelectItem, SelectRoot, Text, TextField } from '@/libs/primitives';
import { Filter, Search } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

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
    <Grid width={'100%'} columns={'5'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 2fr auto 1fr' }}>
      <IconButton colorVariant='BLUE' variant='soft' size={'3'}>
        <Filter />
      </IconButton>

      <Button colorVariant='BLUE' variant='ghost' size={'3'} onClick={() => router.push('/plans/create-plan')}>
        <Flex gap={'2'} align={'center'}>
          <Text {...typoVariant.body1}>+</Text>
          <Text {...typoVariant.body1}> افزودن نقطه</Text>
        </Flex>
      </Button>

      <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی نام کاربر' />} />
      <IconButton size={'3'} variant='soft'>
        <Search />
      </IconButton>

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
