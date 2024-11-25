import React from 'react';

import { Button, Flex, Text } from '@/libs/primitives';
import { typoVariant } from '@/theme/typo-variants';

import FeatureItems from './feature-items/FeatureItems';

const FeatureManagement = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'}>
      <Button size={'4'} variant='ghost' style={{ width: 'fit-content' }}>
        <Flex align={'center'} gap={'2'}>
          <Text {...typoVariant.body1}>+</Text>
          <Text {...typoVariant.body1}>افزودن دسته ویژگی</Text>
        </Flex>
      </Button>
      <FeatureItems />
    </Flex>
  );
};

export default FeatureManagement;
