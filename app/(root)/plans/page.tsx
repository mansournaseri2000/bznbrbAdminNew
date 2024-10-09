import React from 'react';

import PlansHero from '@/components/plans/hero/PlansHero';
import PlansList from '@/components/plans/list/PlansList';
import PlansPagination from '@/components/plans/pagination/PlansPagination';
import { Grid } from '@/libs/primitives';

export default function Plans() {
  return (
    <Grid width={'100%'} gap={'4'} p={'5'}>
      <PlansHero />
      <PlansList />
      <PlansPagination />
    </Grid>
  );
}
