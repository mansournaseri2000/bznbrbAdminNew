import React from 'react';

import { Flex, Grid, TextField } from '@/libs/primitives';

const SearchModal = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'}>
      <Grid width={'100%'} columns={'3'} gapX={'10px'}>
        <TextField placeholder='جستجوی نقطه' />
        <Flex align={'center'} justify={'center'} style={{ border: '1px solid #6A6A6A' }}>
          دسته بندی
        </Flex>
        <Flex align={'center'} justify={'center'} style={{ border: '1px solid #6A6A6A' }}>
          استان
        </Flex>
      </Grid>
      <Flex
        width={'100%'}
        height={'360px'}
        align={'center'}
        justify={'center'}
        style={{ maxHeight: 360, overflowY: 'scroll', border: '1px solid #D4D4D4' }}
      >
        Table
      </Flex>
    </Flex>
  );
};

export default SearchModal;
