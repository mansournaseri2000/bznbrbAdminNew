'use client';

import React, { useEffect } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';

import { getAllProvinces } from '@/api/additional-detail';
import ProvinceDetailCard from '@/components/develop/confirmations/province-detail-card/ProvinceDetailCard';
import { Grid } from '@/libs/primitives';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';

const ProvinceManagement = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const {
    data: provinceData,
    mutate: provinceMutate,
    isPending: provincePending,
  } = useMutation({
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

  if (provincePending || !provinceData) return <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '100px' }} />;

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
          path={`/additional-detail/province/cities/${item.id}`}
        />
      ))}
    </Grid>
  );
};

export default ProvinceManagement;
