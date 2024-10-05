import React from 'react';

import { Flex, Grid, TextField } from '@/libs/primitives';

const UserInfoModal = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'} px={'4'}>
      <Grid width={'100%'} columns={'2'} gap={'5'}>
        <TextField placeholder='نام' />
        <TextField placeholder='نام خانوادگی' />
        <TextField placeholder='جنسیت' />
        <Flex align={'center'} justify={'center'} style={{ border: '1px solid #6A6A6A' }}>
          تاریخ تولد
        </Flex>
      </Grid>
      <TextField placeholder='ایمیل' />
      <Flex p={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        تورلیدر
      </Flex>
    </Flex>
  );
};

export default UserInfoModal;
