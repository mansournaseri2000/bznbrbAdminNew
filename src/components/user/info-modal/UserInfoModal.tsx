import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { Checkbox, Flex, Grid, TextField } from '@/libs/primitives';

const UserInfoModal = () => {
  const methods = useForm({
    defaultValues: { name: '', lase_name: '', sex: '', birthday: '', email: '', tourLeader: '' },
  });
  const { control, watch } = methods;
  console.log('Watch', watch());
  return (
    <FormProvider {...methods}>
      <Flex width={'100%'} direction={'column'} gap={'5'} px={'4'}>
        <Grid width={'100%'} columns={'2'} gap={'5'}>
          <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='نام' />} />
          <Controller name='lase_name' control={control} render={({ field }) => <TextField {...field} placeholder='نام خانوادگی' />} />
          <Controller name='sex' control={control} render={({ field }) => <TextField {...field} placeholder='جنسیت' />} />
          <Controller
            name='birthday'
            control={control}
            render={({ field }) => (
              <Flex {...field} align={'center'} justify={'center'} style={{ border: '1px solid #6A6A6A' }}>
                تاریخ تولد
              </Flex>
            )}
          />
        </Grid>
        <Controller name='email' control={control} render={({ field }) => <TextField {...field} placeholder='ایمیل' />} />
        <Controller name='tourLeader' control={control} render={({ field }) => <Checkbox {...field} label='تورلیدر' size={'3'} defaultChecked={true} />} />
      </Flex>
    </FormProvider>
  );
};

export default UserInfoModal;
