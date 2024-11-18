'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import PlansHero from '@/components/plans/hero/PlansHero';
import PlansList from '@/components/plans/list/PlansList';
import { Grid } from '@/libs/primitives';

export default function Plans() {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const methods = useForm({
    defaultValues: {
      search: '',
      sort: '',
      sourceProvince: '',
      sourceCity: '',
      departureProvince: '',
      departureCity: '',
    },
  });
  return (
    <FormProvider {...methods}>
      <Grid width={'100%'} gap={'4'} p={'5'}>
        <PlansHero />
        <PlansList />

        {/* Custom Pagination */}
      </Grid>
    </FormProvider>
  );
}
