import React from 'react';

import { Flex } from '@/libs/primitives';

import TagsHero from './hero/TagsHero';
import TagsList from './list/TagsList';
import TagsPagination from './pagination/TagsPagination';

const Tags = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'}>
      <TagsHero />
      <TagsList />
      <TagsPagination />
    </Flex>
  );
};

export default Tags;
