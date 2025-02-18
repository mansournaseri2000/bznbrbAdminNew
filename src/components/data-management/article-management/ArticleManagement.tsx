'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { filterObject, getArticleListServices } from '@/api/data-management';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { generateSearchParams } from '@/libs/utils/generateSearchParams';
import { typoVariant } from '@/theme/typo-variants';

import ArticleManagementHero from './hero/ArticleManagementHero';
import ArticleManagementList from './list/ArticleManagementList';

const ArticleManagement = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const getParam = (key: string) => searchParams.get(key) || '';

  const methods = useForm({
    defaultValues: {
      page: getParam('page') ? getParam('page') : 1,
      title: getParam('title') ? getParam('title') : '',
      is_published: getParam('is_published') ? String(Boolean(getParam('is_published'))) : '',
      status: getParam('status') ? String(Boolean(getParam('status'))) : '',
      base: getParam('base') ? String(Boolean(getParam('base'))) : '',
      text: getParam('text') ? String(Boolean(getParam('text'))) : '',
      related: getParam('related') ? String(Boolean(getParam('related'))) : '',
      seo: getParam('seo') ? String(Boolean(getParam('seo'))) : '',
      mainPic: getParam('mainPic') ? String(Boolean(getParam('mainPic'))) : '',
      provincesId: getParam('provincesId') ? Number(getParam('provincesId')) : '',
      citiesId: getParam('citiesId') ? Number(getParam('citiesId')) : '',
      created_atStart: getParam('created_atStart') ? Number(getParam('created_atStart')) : '',
      created_atEnd: getParam('created_atEnd') ? Number(getParam('created_atEnd')) : '',
      parentCategoryId: getParam('parentCategoryId') ? Number(getParam('parentCategoryId')) : '',
      arrayCatIds: getParam('arrayCatIds') ? getParam('arrayCatIds').split(',').map(Number) : [],
    },
  });
  const { watch, handleSubmit, setValue } = methods;

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const { data, isLoading, isError, isFetching } = useQuery({ queryKey: ['article-list'], queryFn: async () => await getArticleListServices(watch() as any) });

  const onSubmit = (data: any) => {
    const obj = filterObject(data, true);
    const searchParams = generateSearchParams(obj);

    queryClient.invalidateQueries({ queryKey: ['article-list'] });
    const newUrl = `${window.location.pathname}?${searchParams}`;
    window.history.pushState(null, '', newUrl);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex width={'100%'} direction={'column'} gap={'5'}>
          <ArticleManagementHero />
          {isError ? (
            <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
          ) : isLoading || isFetching ? (
            <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
          ) : !data ? (
            <Flex width={'100%'} justify={'center'} mt={'6'}>
              <Text {...typoVariant.title1}>دیتایی موجود نیست</Text>
            </Flex>
          ) : (
            <ArticleManagementList data={data?.articles as any} />
          )}
          {data?.articles && (
            <Flex width={'100%'} align={'center'} justify={'between'}>
              <CustomPagination
                current={Number(watch('page'))}
                total={data.totalPages}
                onPageChange={p => {
                  setValue('page', p);
                  onSubmit(watch());
                }}
              />
              <ItemsPerPage data={data.articles} currentPage={data.currentPage} totalCount={data.totalCount} />
            </Flex>
          )}
        </Flex>
      </form>
    </FormProvider>
  );
};

export default ArticleManagement;
