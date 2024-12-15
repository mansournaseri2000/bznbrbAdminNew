'use client';

import React, { useEffect } from 'react';

import { useMutation } from '@tanstack/react-query';

import { getAllProvinces } from '@/api/province';
import ProvinceDetailCard from '@/components/develop/confirmations/province-detail-card/ProvinceDetailCard';
import { Grid } from '@/libs/primitives';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';

export default function ProvinceManagement() {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: provinceData, mutate: provinceMutate } = useMutation({
    mutationFn: async () => getAllProvinces(),
    onSuccess: async data => {
      console.log('data', data);
    },
    onError: async data => {
      console.log('DATA Error', data);
    },
  });

  useEffect(() => {
    provinceMutate();
  }, []);
  console.log('DATA', provinceData);
  return (
    <Grid width={'100%'} columns={'2'} gap={'5'}>
      {provinceData?.map(item => (
        <ProvinceDetailCard
          key={item.id}
          type='comments'
          buttonText='مدیریت شهرستان'
          firstLabel='تعداد شهرستان'
          secondLabel='آخرین ویرایش'
          title={item.name}
          firstValue={item.citiesCount}
          secondValue={convertTimestampToPersianDate(item.lastUpdated)}
          path={`/province/cities/${item.id}`}
        />
      ))}
    </Grid>
  );
}
