import React from 'react';

import ArticleHero from '@/components/article/hero/ArticleHero';
import ArticleList from '@/components/article/list/ArticleList';
import ArticlePagination from '@/components/article/pagination/ArticlePagination';
import { Flex } from '@/libs/primitives';

export default function Article() {
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'}>
      <ArticleHero />
      <ArticleList />
      <ArticlePagination />
    </Flex>
  );
}
