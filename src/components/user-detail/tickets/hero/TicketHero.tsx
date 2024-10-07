import React from 'react';

import { Button, Flex, Grid, IconButton } from '@/libs/primitives';

const TicketHero = () => {
  return (
    <Grid width={'100%'} columns={'2'} style={{ gridTemplateColumns: '4fr 1fr' }}>
      <Flex gap={'4'}>
        <IconButton size={'3'}>icon</IconButton>
        <Button size={'3'}>حذف فیلتر ها</Button>
      </Flex>
      <Flex align={'center'} justify={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}>
        مرتب سازی بر اساس
      </Flex>
    </Grid>
  );
};

export default TicketHero;
