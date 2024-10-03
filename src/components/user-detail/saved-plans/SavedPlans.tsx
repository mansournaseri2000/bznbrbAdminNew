import React from 'react';

import { Flex } from '@/libs/primitives';

import SavedPlansHero from './hero/SavedPlansHero';
import SavedPlansList from './list/SavedPlansList';
import SavedPlansPagination from './pagination/SavedPlansPagination';

const SavedPlans = () => {
  return (
    <Flex width={'100'} direction={'column'} gap={'4'}>
      <SavedPlansHero />
      <SavedPlansList />
      <SavedPlansPagination />
    </Flex>
  );
};

export default SavedPlans;
