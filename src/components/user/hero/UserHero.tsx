'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { userTypeConstant } from '@/constants/users';
import { Button, Grid, SelectItem, SelectRoot, TextField } from '@/libs/primitives';

const UserHero = () => {
  const methods = useForm({ defaultValues: { userType: '' } });
  const { control } = methods;
  return (
    <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '0.5fr 3fr 1fr' }}>
      <Button size={'3'}>ثبت کاربر</Button>
      <TextField placeholder='جستجوی  کاربر' style={{ borderRadius: 12 }} />

      <Controller
        name='userType'
        control={control}
        render={({ field }) => (
          <SelectRoot
            {...field}
            placeholder='نوع کاربر'
            value={String(field.value)}
            onValueChange={val => {
              field.onChange(val);
            }}
          >
            {userTypeConstant.map(item => (
              <SelectItem value={String(item.id)} key={item.id}>
                {item.name}
              </SelectItem>
            ))}
          </SelectRoot>
        )}
      />
    </Grid>
  );
};

export default UserHero;
