import React from 'react';

import { Button, Flex, Grid, IconButton, TextField } from '@/libs/primitives';

const TopPointsHero = () => {
  return (
    <Grid width={'100%'} columns={'2'} gapX={'5'}>
      <Flex align={'center'} gap={'4'}>
        <IconButton size={'3'}>icon</IconButton>
        <Button size={'3'}>حذف فیلتر ها</Button>
      </Flex>
      <TextField placeholder='جستجوی نام عنوان' />
    </Grid>
  );
};

export default TopPointsHero;
