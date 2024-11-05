import React from 'react';

import { Flex } from '@/libs/primitives';

import ArticleManagementHero from './hero/ArticleManagementHero';
import ArticleManagementList from './list/ArticleManagementList';

const ArticleManagement = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'} p={'5'}>
      <ArticleManagementHero />
      <ArticleManagementList />
      {/* TODO: add pagination  */}
    </Flex>
  );
};

export default ArticleManagement;
