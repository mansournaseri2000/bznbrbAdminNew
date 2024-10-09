import React from 'react';

import { Flex, Grid, TextField } from '@/libs/primitives';

const ActionListHero = () => {
  return (
    <Grid width={'100%'} columns={'4'} gapX={'4'} style={{ gridTemplateColumns: '2fr 0.5fr 0.5fr 1fr' }}>
      <TextField placeholder='جستجوی عنوان' />
      <Flex justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
        از تاریخ
      </Flex>
      <Flex justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
        تا تاریخ
      </Flex>
      <Flex justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
        مرتب سازی بر اساس
      </Flex>
    </Grid>
  );
};

export default ActionListHero;
