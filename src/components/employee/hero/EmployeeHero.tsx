import React from 'react';

import { Button, Flex, TextField } from '@/libs/primitives';

const EmployeeHero = () => {
  return (
    <Flex width={'100%'} gap={'4'} align={'center'}>
      <Button size={'3'}>افزودن پرسنل</Button>
      <TextField placeholder='جستجوی نام پرسنل، شماره تماس، ایمیل' />
    </Flex>
  );
};

export default EmployeeHero;
