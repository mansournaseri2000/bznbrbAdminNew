import React from 'react';

import { Button, Flex } from '@/libs/primitives';

import TopPointsHero from './hero/TopPointsHero';

const TopPointsWebContent = () => {
  return (
    <Flex direction={'column'} gap={'4'} p={'5'}>
      <TopPointsHero />
      <Button size={'3'} style={{ width: 'fit-content' }}>
        افزودن نقطه
      </Button>
    </Flex>
  );
};

export default TopPointsWebContent;
