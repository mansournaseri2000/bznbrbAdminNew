import React from 'react';

import { Flex, Grid, TextField } from '@/libs/primitives';

const RegisterAdModal = () => {
  return (
    <Flex direction={'column'} gap={'5'} p={'4'}>
      <TextField placeholder='نام عنوان' />
      <Grid width={'100%'} columns={'2'} gapX={'5'}>
        <TextField placeholder='صاحب امتیاز آگهی' />
        <Flex align={'center'} justify={'center'} style={{ border: '1px solid #6A6A6A' }}>
          تبلیغ تا
        </Flex>
      </Grid>
      <Flex height={'160px'} align={'center'} justify={'center'} style={{ border: '1px solid #6A6A6A' }}>
        تصویر بنر
      </Flex>
    </Flex>
  );
};

export default RegisterAdModal;
