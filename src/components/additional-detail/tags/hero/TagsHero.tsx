import React from 'react';

import { Button, Flex, Grid, TextField } from '@/libs/primitives';

const TagsHero = () => {
  return (
    <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '0.5fr 2fr 1fr' }}>
      <Button size={'3'}>افزودن تگ</Button>
      <TextField placeholder='جستجوی تگ' />
      <Flex justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}>
        وضعیت پرداخت
      </Flex>
    </Grid>
  );
};

export default TagsHero;
