'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { filterObject, getPlaceList } from '@/api/data-management';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { typoVariant } from '@/theme/typo-variants';

import PointManagementHero from './hero/PointManagementHero';
import PointManagementList from './list/PointManagementList';

type Props = {
  constant: any;
};

const PointManagement = ({ constant }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const getParam = (key: string) => searchParams.get(key) || '';

  const methods = useForm({
    defaultValues: {
      page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
      searchQuery: searchParams.get('searchQuery') ? searchParams.get('searchQuery') : '',
      provinceId: searchParams.get('provinceId') ? Number(searchParams.get('provinceId')) : '',
      cityId: searchParams.get('cityId') ? Number(searchParams.get('cityId')) : '',
      parentCategoryId: searchParams.get('parentCategoryId') ? Number(searchParams.get('parentCategoryId')) : '',
      arrayCatIds: searchParams.get('arrayCatIds') ? searchParams.get('arrayCatIds')?.split(',').map(Number) : [],
      arrayTypes: searchParams.get('arrayTypes') ? getParam('arrayTypes').split(',').map(String) : [],
      startDate: searchParams.get('startDate') ? Number(searchParams.get('startDate')) : '',
      endDate: searchParams.get('endDate') ? Number(searchParams.get('endDate')) : '',
      isPublished: searchParams.get('isPublished') ? searchParams.get('isPublished') : '',
      status: searchParams.get('status') ? searchParams.get('status') : '',
      mainPic: searchParams.get('mainPic') ? searchParams.get('mainPic') : '',
      gallery: searchParams.get('gallery') ? searchParams.get('gallery') : '',
      info: searchParams.get('info') ? searchParams.get('info') : '',
      coordinates: searchParams.get('coordinates') ? searchParams.get('coordinates') : '',
      description: searchParams.get('description') ? searchParams.get('description') : '',
      features: searchParams.get('features') ? searchParams.get('features') : '',
      analyse: searchParams.get('analyse') ? searchParams.get('analyse') : '',
      seo: searchParams.get('seo') ? searchParams.get('seo') : '',
    },
  });

  const { watch, setValue, handleSubmit } = methods;

  const { data, isLoading, isError, isFetching } = useQuery({ queryKey: ['place-list'], queryFn: async () => await getPlaceList(watch() as any) });

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  function generateSearchParams<T extends Record<string, any>>(obj: T): string {
    return Object.entries(obj)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${encodeURIComponent(key)}=${value.map(encodeURIComponent).join(',')}`;
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join('&');
  }

  const onSubmit = (data: any) => {
    const obj = filterObject(data, true);
    const searchParams = generateSearchParams(obj);

    queryClient.invalidateQueries({ queryKey: ['place-list'] });
    const newUrl = `${window.location.pathname}?${searchParams}`;
    window.history.pushState(null, '', newUrl);
  };

  const onRevalidate = () => {
    console.log('onRevalidate');
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
          {isError ? (
            <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
          ) : isLoading || isFetching ? (
            <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
          ) : !data ? (
            <Flex width={'100%'} justify={'center'} mt={'6'}>
              <Text {...typoVariant.title1}>دیتایی موجود نیست</Text>
            </Flex>
          ) : (
            <PointManagementList data={data?.allFilteredPlaces as any} onRevalidate={onRevalidate} constant={constant} />
          )}
          {data?.allFilteredPlaces && (
            <Flex width={'100%'} align={'center'} justify={'between'}>
              <CustomPagination
                current={Number(watch('page'))}
                total={data?.totalPages as number}
                maxWidth={24}
                onPageChange={p => {
                  setValue('page', p);
                  onSubmit(watch());
                }}
              />
              <ItemsPerPage data={data?.allFilteredPlaces} currentPage={data?.currentPage} totalCount={data?.totalCount} keyText={'نقطه'} />
            </Flex>
          )}
        </Flex>
      </form>
    </FormProvider>
  );
};

export default PointManagement;
