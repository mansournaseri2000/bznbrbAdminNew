'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { userSortConstants } from '@/constants/users';
import { Button, Flex, Grid, IconButton, SelectItem, SelectRoot } from '@/libs/primitives';

const SavedPlansHero = () => {
  const methods = useForm({ defaultValues: { filter: '', sort: '' } });
  const { control } = methods;
  return (
    <Grid width={'100%'} columns={'2'} style={{ gridTemplateColumns: '4fr 1fr' }}>
      <Flex gap={'4'}>
        <IconButton size={'3'}>icon</IconButton>
        <Button size={'3'}>حذف فیلتر ها</Button>
      </Flex>
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
            {userSortConstants.map(item => (
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

export default SavedPlansHero;
