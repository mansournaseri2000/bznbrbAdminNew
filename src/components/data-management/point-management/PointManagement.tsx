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
import { typoVariant } from '@/theme/typo-variants';

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
      searchQuery: getParam('searchQuery') || '',
      provinceId: Number(getParam('provinceId')) || '',
      cityId: Number(getParam('cityId')) || '',
      parentCategoryId: Number(getParam('parentCategoryId')) || '',
      arrayCatIds: getParam('arrayCatIds') ? getParam('arrayCatIds').split(',').map(Number) : [],
      arrayTypes: getParam('arrayTypes') ? getParam('arrayTypes').split(',').map(String) : [],
      startDate: Number(getParam('startDate')) || '',
      endDate: Number(getParam('endDate')) || '',
      isPublished: getParam('isPublished') ? Boolean(getParam('isPublished')) : '',
      status: getParam('status') ? Boolean(getParam('status')) : '',
      mainPic: getParam('mainPic') ? Boolean(getParam('mainPic')) : '',
      gallery: getParam('gallery') ? Boolean(getParam('gallery')) : '',
      info: getParam('info') ? Boolean(getParam('info')) : '',
      coordinates: getParam('coordinates') ? Boolean(getParam('coordinates')) : '',
      description: getParam('description') ? Boolean(getParam('description')) : '',
      features: getParam('features') ? Boolean(getParam('features')) : '',
      analyse: getParam('analyse') ? Boolean(getParam('analyse')) : '',
      seo: getParam('seo') ? Boolean(getParam('seo')) : '',
    },
  });

  const { watch, setValue, handleSubmit } = methods;

  console.log(searchParams.get('seo'), 'searchParams', watch());

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const {
    data: pointData,
    mutate: pointMutate,
    isError: pointError,
    isPending: pointPending,
  } = useMutation({
    mutationKey: ['place-data'],
    mutationFn: async (body: AllPlacesBody) => getAllPlacesFiltered(body),
    onSuccess: async data => {
      const cleanedData = Object.fromEntries(
        Object.entries(methods.watch()).filter(([key, value]) => {
          if (
            value !== undefined &&
            value !== '' &&
            value !== 'none' &&
            value !== null &&
            value !== 'null' &&
            !(Array.isArray(value) && value.length === 0) &&
            !(Array.isArray(value) && value.every(item => item === ('' as any))) &&
            !(Array.isArray(value) && value.every(item => item === ('none' as any)))
          ) {
            if (['startDate', 'endDate'].includes(key)) {
              return new Date(value as any).getTime();
            }
            return true;
          }
          return false;
        })
      );

      // Convert date fields to timestamps
      Object.keys(cleanedData).forEach(key => {
        if (['startDate', 'endDate'].includes(key)) {
          cleanedData[key] = new Date(cleanedData[key] as any).getTime();
        }
      });
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
          ) : !pointData ? (
            <Flex width={'100%'} justify={'center'} mt={'6'}>
              <Text {...typoVariant.title1}>دیتایی موجود نیست</Text>
            </Flex>
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
