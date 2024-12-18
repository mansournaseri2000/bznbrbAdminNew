'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';

import { getRecentTrips, RecentTripsBody } from '@/api/user';
import PlansHero from '@/components/plans/hero/PlansHero';
import PlansList from '@/components/plans/list/PlansList';
import { Flex, Grid, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';

export default function Plans({ searchParams }: { params: { slug: string }; searchParams: { page: string } }) {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [page, setPage] = useState(searchParams.page ? Number(searchParams.page) : 1);
  const methods = useForm({
    defaultValues: {
      page: 1,
      limit: 10,
      searchQuery: '',
      sortDate: '',
      targetDate: '',
      userId: '',
      originCityId: '',
      originProvinceId: '',
      destinationCityId: '',
      destinationProvinceId: '',
      departureDateStart: '',
      departureDateEnd: '',
      returnDateStart: '',
      returnDateEnd: '',
      sort: '',
    },
  });
  const { watch, handleSubmit, setValue } = methods;
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const {
    data: tripsData,
    mutate: tripsMutate,
    isError: tripsError,
    isPending: tripsPending,
  } = useMutation({
    mutationKey: ['trips-data'],
    mutationFn: async (body: RecentTripsBody) => getRecentTrips(body),
    onSuccess: async data => {
      console.log('data', data);
    },
    onError: async data => {
      console.log('DATA Error', data);
    },
  });
  /*
   *** Hooks and Methods _________________________________________________________________________________________________________________________________________________________________
   */
  useEffect(() => {
    tripsMutate(watch() as any);
  }, []);

  console.log('TripsData', tripsData);

  const onSubmit = () => {
    tripsMutate(watch() as any);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid width={'100%'} gap={'4'} p={'5'}>
          <PlansHero onSubmit={() => tripsMutate(watch() as any)} />
          {tripsError ? (
            <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
          ) : tripsPending ? (
            <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
          ) : (
            <PlansList data={tripsData?.latestTrips as any} />
          )}
          {tripsData?.latestTrips && (
            <Flex width={'100%'} align={'center'} justify={'between'}>
              <CustomPagination
                current={page}
                total={tripsData.totalPages as number}
                onPageChange={p => {
                  setPage(p);
                  setValue('page', p);
                  updateUrlWithPageNumber(p);
                  onSubmit();
                }}
              />
              <ItemsPerPage data={tripsData?.latestTrips} currentPage={tripsData?.currentPage as number} totalCount={tripsData?.totalCount} />
            </Flex>
          )}
        </Grid>
      </form>
    </FormProvider>
  );
}
