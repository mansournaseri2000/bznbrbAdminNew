import React from 'react';

import PlansHero from '@/components/plans/hero/PlansHero';
import PlansList from '@/components/plans/list/PlansList';
import PlansPagination from '@/components/plans/pagination/PlansPagination';
import { Flex } from '@/libs/primitives';

export default function Plans() {
  return (
    <Flex direction={'column'} gap={'4'} p={'5'}>
      <PlansHero />
      <PlansList />
      <PlansPagination />
    </Flex>
  );
}
