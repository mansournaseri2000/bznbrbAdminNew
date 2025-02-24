'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import ToursHero from '@/components/tours/hero/ToursHero';
import ToursList from '@/components/tours/list/ToursList';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function ToursPage({
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    page: string;
    limit: string;
    searchQuery: string;
    sortDate: string;
    sort: string;
    provinceId: string;
    cityId: string;
    startBudget: string;
    endBudget: string;
    departureDateStart: string;
    departureDateEnd: string;
    returnDateStart: string;
    returnDateEnd: string;
  };
}) {
  /*
   *** Variables and constant_________________________________________________________________________________________________________
   */
  const methods = useForm({
    defaultValues: {
      page: searchParams.page ? Number(searchParams.page) : 1,
      searchQuery: searchParams.searchQuery || '',
      sortDate: searchParams.sortDate ? searchParams.sortDate : '',
      provinceId: searchParams.provinceId ? Number(searchParams.provinceId) : '',
      cityId: searchParams.cityId ? Number(searchParams.cityId) : '',
      startBudget: searchParams.startBudget ? searchParams.startBudget : '',
      endBudget: searchParams.endBudget ? searchParams.endBudget : '',
      departureDateStart: searchParams.departureDateStart ? Number(searchParams.departureDateStart) : '',
      departureDateEnd: searchParams.departureDateEnd ? Number(searchParams.departureDateEnd) : '',
      returnDateStart: searchParams.returnDateStart ? Number(searchParams.returnDateStart) : '',
      returnDateEnd: searchParams.returnDateEnd ? Number(searchParams.returnDateEnd) : '',
    },
  });
  /*
   *** JSX_________________________________________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title='لیست تورها' isNavigation={false} />
      <Box pr={'80px'}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          {/* 
            TODO: define here Form Provider and form with onSubmit here
            */}
          <FormProvider {...methods}>
            <Grid width={'100%'} gap={'4'} p={'5'}>
              <ToursHero />
              <ToursList />

              {/* <Flex width={'100%'} align={'center'} justify={'between'}>
                    <CustomPagination
                      current={watch('page')}
                      total={data.totalPages as number}
                      onPageChange={p => {
                        setValue('page', p);
                        updateUrlWithPageNumber(p);
                        onSubmit(watch());
                      }}
                    />
                    <ItemsPerPage data={data?.latestTrips} currentPage={data?.currentPage as number} totalCount={data?.totalCount} />
                  </Flex> */}
            </Grid>
          </FormProvider>
        </Grid>
      </Box>
    </Flex>
  );
}
