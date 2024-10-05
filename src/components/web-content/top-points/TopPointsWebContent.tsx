import React from 'react';

import { Button, Flex } from '@/libs/primitives';

import TopPointsHero from './hero/TopPointsHero';
import TopPointsList from './list/TopPointsList';

const TopPointsWebContent = () => {
  return (
    <Flex direction={'column'} gap={'4'} p={'5'}>
      <TopPointsHero />
      <Button size={'3'} style={{ width: 'fit-content' }}>
        افزودن نقطه
      </Button>
      <TopPointsList />
    </Flex>
  );
};

export default TopPointsWebContent;
