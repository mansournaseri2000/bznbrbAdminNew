import React from 'react';

import { Box, Button, Flex, Grid, TextField } from '@/libs/primitives';

const EmployeeForm = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} align={'center'}>
      <Box width={'120px'} height={'120px'} style={{ border: '1px solid', borderRadius: '50%' }}>
        photo
      </Box>
      <Grid width={'100%'} columns={'2'} gapX={'5'} gapY={'4'}>
        <TextField placeholder='نام' />
        <TextField placeholder='نام خانوادگی' />
        <TextField placeholder='کد ملی' />
        <TextField placeholder='تاریخ تولد' />
        <TextField placeholder='نام پدر' />
        <TextField placeholder='شماره تماس' />
      </Grid>
      <TextField placeholder='شماره شبا' />
      <TextField placeholder='آدرس منزل' />
      <Flex width={'100%'} gap={'4'}>
        <Button size={'3'}>ثبت</Button>
        <Button size={'3'}>لغو</Button>
      </Flex>
    </Flex>
  );
};

export default EmployeeForm;
