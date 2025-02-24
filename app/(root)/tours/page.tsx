'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { filterObject } from '@/api/data-management';
import { getRecentTrips } from '@/api/plans';
import { getRecentTours } from '@/api/tours';
import ToursHero from '@/components/tours/hero/ToursHero';
import ToursList from '@/components/tours/list/ToursList';
import Header from '@/layout/Header';
import { Box, Flex, Grid, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { generateSearchParams } from '@/libs/utils/generateSearchParams';
import { typoVariant } from '@/theme/typo-variants';

export default function ToursPage({
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    page: string;
    searchQuery: string;
    sortDate: string;
    sort: string;
    provincesId: string;
    citiesId: string;
    targetDate: string;
    budgetStart: string;
    budgetEnd: string;
    departureDateStart: string;
    departureDateEnd: string;
    returnDateStart: string;
    returnDateEnd: string;
  };
}) {
  /*
   *** Variables and constant_________________________________________________________________________________________________________
   */
  const queryClient = useQueryClient();

  const methods = useForm({
    defaultValues: {
      page: searchParams.page ? Number(searchParams.page) : 1,
      searchQuery: searchParams.searchQuery || '',
      sortDate: searchParams.sortDate ? searchParams.sortDate : '',
      provincesId: searchParams.provincesId ? Number(searchParams.provincesId) : '',
      citiesId: searchParams.citiesId ? Number(searchParams.citiesId) : '',
      targetDate: searchParams.targetDate ? Number(searchParams.targetDate) : '',
      budgetStart: searchParams.budgetStart ? searchParams.budgetStart : '',
      budgetEnd: searchParams.budgetEnd ? searchParams.budgetEnd : '',
      departureDateStart: searchParams.departureDateStart ? Number(searchParams.departureDateStart) : '',
      departureDateEnd: searchParams.departureDateEnd ? Number(searchParams.departureDateEnd) : '',
      returnDateStart: searchParams.returnDateStart ? Number(searchParams.returnDateStart) : '',
      returnDateEnd: searchParams.returnDateEnd ? Number(searchParams.returnDateEnd) : '',
    },
  });

  const { watch, handleSubmit, setValue } = methods;

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['tours'], queryFn: async () => await getRecentTours(watch() as any) });
  /*
   *** Hooks and Methods _________________________________________________________________________________________________________________________________________________________________
   */
  const onSubmit = (data: any) => {
    const obj = filterObject(data, true);
    const searchParams = generateSearchParams(obj);
    queryClient.invalidateQueries({ queryKey: ['tours'] });
    const newUrl = `${window.location.pathname}?${searchParams}`;
    window.history.pushState(null, '', newUrl);
  };

  console.log('data', data?.tours);

  /*
   *** JSX_________________________________________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title='لیست تورها' isNavigation={false} />
      <Box pr={'80px'}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid width={'100%'} gap={'4'} p={'5'}>
                <ToursHero onSubmit={() => onSubmit(watch())} isPending={isLoading || isFetching} />
                {isError ? (
                  <Flex width={'100%'} justify={'center'} mt={'6'}>
                    <Text {...typoVariant.title1}>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
                  </Flex>
                ) : isFetching || isLoading ? (
                  <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '40px' }} />
                ) : !data ? (
                  <Flex width={'100%'} justify={'center'} mt={'6'}>
                    <Text {...typoVariant.title1}>دیتایی موجود نیست</Text>
                  </Flex>
                ) : (
                  <ToursList data={data.tours as any} />
                )}

                {data?.tours && (
                  <Flex width={'100%'} align={'center'} justify={'between'}>
                    <CustomPagination
                      current={watch('page')}
                      total={data.totalPages as number}
                      onPageChange={p => {
                        setValue('page', p);
                        updateUrlWithPageNumber(p);
                        onSubmit(watch());
                      }}
                    />
                    <ItemsPerPage data={data?.tours} currentPage={data?.currentPage as number} totalCount={data?.totalCount} />
                  </Flex>
                )}
              </Grid>
            </form>
          </FormProvider>
        </Grid>
      </Box>
    </Flex>
  );
}
