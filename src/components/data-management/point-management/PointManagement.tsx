'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getPointByParams } from '@/api/data-management';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import { updateUrlWithPageNumber } from '@/libs/utils';

import PointManagementHero from './hero/PointManagementHero';
import PointManagementList from './list/PointManagementList';

const PointManagement = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */

  const methods = useForm({
    defaultValues: {
      name: '',
      pro: '',
      cit: '',
      cat: '',
      subCategoryId: '',
      statusId: '',
      pointTypeId: '',
      page: 1,
    },
  });

  const { watch, setValue } = methods;
  const queryClient = useQueryClient();
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const {
    data: pointData,
    isError: pointError,
    isLoading: pointLoading,
    // isFetched: pointFetching,
  } = useQuery({
    queryKey: ['point-data'],
    queryFn: async () => getPointByParams({ ...watch() }),
  });

  console.log('PointData', pointData);

  // const handleSearch = () => {
  //   queryClient.invalidateQueries({ queryKey: ['point-data'] });
  // };

  console.log('WAtch', watch());

  /*
   *** table count variables_________________________________________________________________________________________________________________________________________________________________
   */
  if (!pointData) return null;

  const { placesDetail, currentPage, totalCount } = pointData;

  const itemsPerPage = placesDetail.length;
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalCount);

  return (
    <FormProvider {...methods}>
      <Flex width={'100%'} direction={'column'} gap={'5'}>
        {/*
         *** Hero for Filter button , add Point and search Point_________________________________________________________________________________________________________________________________________________________________
         */}
        <PointManagementHero />
        {/*
         *** table data_________________________________________________________________________________________________________________________________________________________________
         */}
        {pointError ? (
          <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
        ) : pointLoading ? (
          <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
        ) : (
          <PointManagementList data={pointData?.placesDetail ? pointData.placesDetail : []} />
        )}

        <Flex width={'100%'} align={'center'} justify={'between'}>
          <CustomPagination
            current={watch('page')}
            total={pointData?.totalPages as number}
            maxWidth={24}
            onPageChange={p => {
              setValue('page', p);
              updateUrlWithPageNumber(p);
              queryClient.invalidateQueries({ queryKey: ['point-data'] });
            }}
          />
          <Text>{`${startIndex}-${endIndex} از ${totalCount} برنامه`}</Text>
        </Flex>
      </Flex>
    </FormProvider>
  );
};

export default PointManagement;
