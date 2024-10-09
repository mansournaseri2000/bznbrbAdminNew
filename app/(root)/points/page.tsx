import React from 'react';

import PointsHero from '@/components/points/hero/PointsHero';
import PointsList from '@/components/points/list/PointsList';
import PointsPagination from '@/components/points/pagination/PointsPagination';
import { Button, Flex } from '@/libs/primitives';

export default function Points() {
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'}>
      <PointsHero />
      <Button size={'3'} style={{ width: 'fit-content' }}>
        افزودن نقطه
      </Button>
      <PointsList />
      <PointsPagination />
    </Flex>
  );
}
