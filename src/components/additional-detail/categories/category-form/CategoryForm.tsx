import React from 'react';

import { Button, Flex, Text, TextField } from '@/libs/primitives';

const CategoryForm = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'} p={'4'}>
      <TextField placeholder='عنوان دسته بندی' />
      <Flex width={'50%'} p={'4'} align={'center'} justify={'center'} style={{ border: '1px solid #6A6A6A', borderRadius: 8 }}>
        زیر دسته بندی
      </Flex>
      <Flex width={'100%'} gap={'6'} wrap={'wrap'} p={'12px'} style={{ border: '1px dashed #6A6A6A', borderRadius: 16 }}>
        <Text style={{ padding: '8px 16px', borderRadius: 16, backgroundColor: '#D4D4D4' }}>badge</Text>
      </Flex>
      <Flex gap={'4'}>
        <Button size={'3'}>ثبت</Button>
        <Button size={'3'} variant='outline'>
          لغو
        </Button>
      </Flex>
    </Flex>
  );
};

export default CategoryForm;
