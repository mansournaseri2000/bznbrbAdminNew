'use client';

import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';

import { AllPlacesBody, getAllPlacesFiltered } from '@/api/data-management';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';

import PointManagementHero from './hero/PointManagementHero';
import PointManagementList from './list/PointManagementList';

const PointManagement = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */

  const methods = useForm({
    defaultValues: {
      page: 1,
      limit: 10,
      cityId: 0,
      arrayCatIds: [],
      isInfoCompleted: '',
      isPublished: true,
      status: true,
      searchQuery: '',
      // name: '',
      // pro: '',
      // cat: '',
      // subCategoryId: '',
      // statusId: '',
      // pointTypeId: '',
    },
  });

  const { watch, setValue, handleSubmit } = methods;
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  // const {
  //   data: pointData,
  //   isError: pointError,
  //   isLoading: pointLoading,
  // } = useQuery({
  //   queryKey: ['point-data'],
  //   queryFn: async () => getPointByParams({ ...watch() }),
  // });

  const {
    data: pointData,
    mutate: pointMutate,
    isError: pointError,
    isPending: pointPending,
  } = useMutation({
    mutationFn: async (body: AllPlacesBody) => getAllPlacesFiltered(body),
    onSuccess: async data => {
      console.log('data', data);
    },
    onError: async data => {
      console.log('DATA Error', data);
    },
  });

  useEffect(() => {
    pointMutate(watch());
  }, []);

  console.log('PointData', pointData);

  // const handleSearch = () => {
  //   queryClient.invalidateQueries({ queryKey: ['point-data'] });
  // };

  const onSubmit = () => {
    pointMutate(watch());
    console.log('run');
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          ) : pointPending ? (
            <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
          ) : (
            <PointManagementList data={pointData?.allFilteredPlaces as any} />
          )}

          {pointData?.allFilteredPlaces && (
            <Flex width={'100%'} align={'center'} justify={'between'}>
              <CustomPagination
                current={watch('page')}
                total={pointData?.totalPages as number}
                maxWidth={24}
                onPageChange={p => {
                  setValue('page', p);
                  updateUrlWithPageNumber(p);
                  onSubmit();
                }}
              />
              <ItemsPerPage data={pointData?.allFilteredPlaces} currentPage={pointData?.currentPage} totalCount={pointData?.totalPages} />
            </Flex>
          )}
        </Flex>
      </form>
    </FormProvider>
  );
};

export default PointManagement;
