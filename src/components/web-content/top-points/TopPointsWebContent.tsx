import React from 'react';

import { Button, Flex } from '@/libs/primitives';

import TopPointsHero from './hero/TopPointsHero';
import TopPointsList from './list/TopPointsList';
import TopPointsPagination from './pagination/TopPointsPagination';
import SearchModal from './search-modal/SearchModal';

const TopPointsWebContent = () => {
  return (
    <Flex direction={'column'} gap={'4'} p={'5'}>
      <TopPointsHero />
      <SearchModal />
      <Button size={'3'} style={{ width: 'fit-content' }}>
        افزودن نقطه
      </Button>
      <TopPointsList />
      <TopPointsPagination />
    </Flex>
  );
};

export default TopPointsWebContent;
