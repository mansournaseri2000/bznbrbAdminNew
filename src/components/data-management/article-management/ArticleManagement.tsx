'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useRouter, useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';

import { getArticleList } from '@/api/data-management';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { generateSearchParams } from '@/libs/utils/generateSearchParams';
import { ArticleListBody } from '@/types/data-management/article';

import ArticleManagementHero from './hero/ArticleManagementHero';
import ArticleManagementList from './list/ArticleManagementList';

const ArticleManagement = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 1);
  const getParam = (key: string) => searchParams.get(key) || '';

  const methods = useForm({
    defaultValues: {
      title: getParam('title') ? getParam('title') : '',
      created_atStart: getParam('created_atStart') ? Number(getParam('created_atStart')) : '',
      created_atEnd: getParam('created_atEnd') ? Number(getParam('created_atEnd')) : '',
      categoryId: getParam('categoryId') ? Number(getParam('categoryId')) : '',
      is_published: getParam('is_published') ? getParam('is_published') : '',
    },
  });
  const { watch, handleSubmit } = methods;

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const {
    data: articleData,
    mutate: articleMutate,
    isError: articleError,
    isPending: articlePending,
  } = useMutation({
    mutationFn: async (body: ArticleListBody) => getArticleList(page, body),
    onSuccess: async data => {
      const cleanedData = Object.fromEntries(
        Object.entries(watch()).filter(([key, value]) => {
          if (
            value !== undefined &&
            value !== '' &&
            value !== 'none' &&
            value !== null &&
            !(Array.isArray(value) && value.length === 0) &&
            !(Array.isArray(value) && value.every(item => item === '')) &&
            !(Array.isArray(value) && value.every(item => item === 'none'))
          ) {
            if (['created_atStart', 'created_atEnd'].includes(key)) {
              return new Date(value).getTime();
            }
            return true;
          }
          return false;
        })
      );

      Object.keys(cleanedData).forEach(key => {
        if (['created_atStart', 'created_atEnd'].includes(key)) {
          cleanedData[key] = new Date(cleanedData[key]).getTime();
        }
      });

      const searchParams = generateSearchParams(cleanedData);
      push(`/data-management/article-management?${searchParams}`);
      console.log('data', data);
    },
    onError: async data => {
      console.log('DATA Error', data);
    },
  });

  useEffect(() => {
    articleMutate(watch() as any);
  }, []);

  const onSubmit = () => {
    articleMutate(watch() as any);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex width={'100%'} direction={'column'} gap={'5'}>
          <ArticleManagementHero onSubmit={() => onSubmit()} />
          {articleError ? (
            <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
          ) : articlePending ? (
            <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
          ) : !articleData ? (
            <Text>دیتایی وجود ندارد</Text>
          ) : (
            <ArticleManagementList data={articleData?.articles as any} />
          )}
          {articleData?.articles && (
            <Flex width={'100%'} align={'center'} justify={'between'}>
              <CustomPagination
                current={page}
                total={articleData.totalPages}
                onPageChange={p => {
                  setPage(p);
                  updateUrlWithPageNumber(p);
                  onSubmit();
                }}
              />
              <ItemsPerPage data={articleData.articles} currentPage={articleData.currentPage} totalCount={articleData.totalCount} />
            </Flex>
          )}
        </Flex>
      </form>
    </FormProvider>
  );
};

export default ArticleManagement;
