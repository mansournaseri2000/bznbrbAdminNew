'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';

import { getArticleList } from '@/api/data-management';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { ArticleListBody } from '@/types/data-management/article';

import ArticleManagementHero from './hero/ArticleManagementHero';
import ArticleManagementList from './list/ArticleManagementList';

const ArticleManagement = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const methods = useForm({
    defaultValues: {
      title: '',
      created_atStart: '',
      created_atEnd: '',
      categoryId: '',
      is_published: '',
      // updated_atStart: null,
      // updated_atEnd: null,
      // parentCategoryId: null,
    },
  });
  const { watch, handleSubmit } = methods;
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 1);
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
