'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAllProvinces } from '@/api/additional-detail';
import ProvinceCard from '@/components/develop/confirmations/province-card/ProvinceCard';
import { Flex, Grid } from '@/libs/primitives';

const ProvinceManagement = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const { data: provinceData, isLoading: provinceLoading, isFetching: provinceFetching } = useQuery({ queryKey: ['provinces'], queryFn: async () => await getAllProvinces() });
  /*
   *** Loading_________________________________________________________________________________________________________________________________________________________________
   */
  if (provinceLoading || provinceFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 3 }} />
      </Flex>
    );

  console.log('DATA', provinceData);
  return (
    <Grid width={'100%'} columns={'2'} gap={'5'}>
      {provinceData?.map(item => (
        <ProvinceCard key={item.id} {...item} />
      ))}
    </Grid>
  );
};

export default ProvinceManagement;
