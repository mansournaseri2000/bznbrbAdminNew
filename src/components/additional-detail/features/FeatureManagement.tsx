'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getFeatures } from '@/api/additional-detail';
import { Button, Flex, Text } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';
import { typoVariant } from '@/theme/typo-variants';

import FeatureItems from './feature-items/FeatureItems';

const FeatureManagement = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: featuresData, isLoading: featureLoading, isFetching: featureFetching, isError: featureError } = useQuery({ queryKey: ['features'], queryFn: async () => await getFeatures() });
  console.log('features data', featuresData);

  /*
   *** Loading & Error_________________________________________________________________________________________________________________________________________________________________
   */
  if (featureLoading || featureFetching) return <Spinner style={{ margin: '100px auto', scale: 2 }} />;
  if (!featuresData || featureError) return ToastError('مشکلی پیش آمده. لطفا مجددا تلاش نمایید');

  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'}>
      <Button size={'4'} variant='ghost' style={{ width: 'fit-content' }}>
        <Flex align={'center'} gap={'2'}>
          <Text {...typoVariant.body1}>+</Text>
          <Text {...typoVariant.body1}>افزودن دسته ویژگی</Text>
        </Flex>
      </Button>
      {featuresData?.map(item => (
        <FeatureItems key={item.id} {...item} />
      ))}
    </Flex>
  );
};

export default FeatureManagement;
