import React from 'react';

import { Flex, Grid, TextField } from '@/libs/primitives';

const PaymentsHero = () => {
  return (
    <Grid width={'100%'} columns={'2'} gapX={'4'}>
      <TextField placeholder='جستجوی شماره رسید' />
      <Flex width={'100%'} gap={'4'}>
        <Flex align={'center'} width={'50%'} justify={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}>
          وضعیت پرداخت
        </Flex>
        <Flex align={'center'} width={'50%'} justify={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}>
          مرتب سازی بر اساس
        </Flex>
      </Flex>
    </Grid>
  );
};

export default PaymentsHero;
