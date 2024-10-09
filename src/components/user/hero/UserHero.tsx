import React from 'react';

import { Button, Flex, Grid, TextField } from '@/libs/primitives';

const UserHero = () => {
  return (
    <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '0.5fr 3fr 1fr' }}>
      <Button size={'3'}>ثبت کاربر</Button>
      <TextField placeholder='جستجوی  کاربر' style={{ borderRadius: 12 }} />
      <Flex align={'center'} justify={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}>
        نوع کاربر
      </Flex>
    </Grid>
  );
};

export default UserHero;
