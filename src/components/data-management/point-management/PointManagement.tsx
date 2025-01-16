'use client';

import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useRouter, useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';

import { AllPlacesBody, getAllPlacesFiltered } from '@/api/data-management';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { generateSearchParams } from '@/libs/utils/generateSearchParams';

import PointManagementHero from './hero/PointManagementHero';
import PointManagementList from './list/PointManagementList';

const PointManagement = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const getParam = (key: string) => searchParams.get(key) || '';

  const page = Number(getParam('page')) || 1;

  const methods = useForm({
    defaultValues: {
      page: page,
      limit: Number(getParam('limit')) || 10,
      provinceId: Number(getParam('provinceId')) || '',
      cityId: Number(getParam('cityId')) || '',
      parentCategoryId: getParam('parentCategoryId') || '',
      arrayCatIds: getParam('arrayCatIds') ? getParam('arrayCatIds').split(',').map(Number) : [],
      isInfoCompleted: getParam('isInfoCompleted') || '',
      isPublished: getParam('isPublished') || '',
      searchQuery: getParam('searchQuery') || '',
    },
  });

  const { watch, setValue, handleSubmit } = methods;
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const {
    data: pointData,
    mutate: pointMutate,
    isError: pointError,
    isPending: pointPending,
  } = useMutation({
    mutationFn: async (body: AllPlacesBody) => getAllPlacesFiltered(body),
    onSuccess: async data => {
      const cleanedData = Object.fromEntries(
        Object.entries(watch()).filter(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([_, value]) =>
            value !== undefined &&
            value !== '' &&
            value !== 'none' &&
            value !== null &&
            !(Array.isArray(value) && value.length === 0) &&
            !(typeof value === 'object' && value !== null && Object.keys(value).length === 0)
        )
      );
      const searchParams = generateSearchParams(cleanedData);
      push(`/data-management/point-management?${searchParams}`);
      console.log('data', data);
    },
    onError: async data => {
      console.log('DATA Error', data);
    },
  });

  useEffect(() => {
    pointMutate(watch() as any);
  }, []);

  console.log('PointData', pointData);

  const onSubmit = () => {
    pointMutate(watch() as any);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex width={'100%'} direction={'column'} gap={'5'}>
          {/*
           *** Hero for Filter button , add Point and search Point_________________________________________________________________________________________________________________________________________________________________
           */}
          <PointManagementHero onSubmit={() => onSubmit()} />
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
              <ItemsPerPage data={pointData?.allFilteredPlaces} currentPage={pointData?.currentPage} totalCount={pointData?.totalCount} />
            </Flex>
          )}
        </Flex>
      </form>
    </FormProvider>
  );
};

export default PointManagement;
