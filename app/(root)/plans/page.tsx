'use client';

import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { filterObject } from '@/api/data-management';
import { getRecentTrips } from '@/api/plans';
import PlansHero from '@/components/plans/hero/PlansHero';
import PlansList from '@/components/plans/list/PlansList';
import Header from '@/layout/Header';
import { Box, Flex, Grid, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { generateSearchParams } from '@/libs/utils/generateSearchParams';
import { typoVariant } from '@/theme/typo-variants';

export default function Plans({
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    page: string;
    limit: string;
    searchQuery: string;
    sortDate: string;
    targetDate: string;
    userId: string;
    originCityId: string;
    originProvinceId: string;
    destinationCityId: string;
    destinationProvinceId: string;
    departureDateStart: string;
    departureDateEnd: string;
    returnDateStart: string;
    returnDateEnd: string;
    sort: string;
  };
}) {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const methods = useForm({
    defaultValues: {
      page: searchParams.page ? Number(searchParams.page) : 1,
      searchQuery: searchParams.searchQuery || '',
      sortDate: searchParams.sortDate ? searchParams.sortDate : '',
      targetDate: searchParams.targetDate ? searchParams.targetDate : '',
      userId: searchParams.userId ? Number(searchParams.userId) : '',
      originCityId: searchParams.originCityId ? Number(searchParams.originCityId) : '',
      originProvinceId: searchParams.originProvinceId ? Number(searchParams.originProvinceId) : '',
      destinationCityId: searchParams.destinationCityId ? Number(searchParams.destinationCityId) : '',
      destinationProvinceId: searchParams.destinationProvinceId ? Number(searchParams.destinationProvinceId) : '',
      departureDateStart: searchParams.departureDateStart ? Number(searchParams.departureDateStart) : '',
      departureDateEnd: searchParams.departureDateEnd ? Number(searchParams.departureDateEnd) : '',
      returnDateStart: searchParams.returnDateStart ? Number(searchParams.returnDateStart) : '',
      returnDateEnd: searchParams.returnDateEnd ? Number(searchParams.returnDateEnd) : '',
      sort: searchParams.sort || '',
    },
  });
  const { watch, handleSubmit, setValue } = methods;
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['recent-trips'], queryFn: async () => await getRecentTrips(watch() as any) });

  /*
   *** Hooks and Methods _________________________________________________________________________________________________________________________________________________________________
   */

  const onSubmit = (data: any) => {
    const obj = filterObject(data, true);
    const searchParams = generateSearchParams(obj);
    queryClient.invalidateQueries({ queryKey: ['recent-trips'] });
    const newUrl = `${window.location.pathname}?${searchParams}`;
    window.history.pushState(null, '', newUrl);
  };

  return (
    <Flex direction={'column'}>
      <Header title='لیست برنامه ها' isNavigation />
      <Box pr={{ initial: '8px', lg: '90px' }}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid width={'100%'} gap={'4'} p={'5'}>
                <PlansHero onSubmit={() => onSubmit(watch())} isOpen={isOpen} setIsOpen={setIsOpen} isPending={isLoading || isFetching} />
                {isError ? (
                  <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
                ) : isFetching || isLoading ? (
                  <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '40px' }} />
                ) : !data ? (
                  <Flex width={'100%'} justify={'center'} mt={'6'}>
                    <Text {...typoVariant.title1}>دیتایی موجود نیست</Text>
                  </Flex>
                ) : (
                  <PlansList data={data?.latestTrips as any} />
                )}
                {data?.latestTrips && (
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
                    <ItemsPerPage data={data?.latestTrips} currentPage={data?.currentPage as number} totalCount={data?.totalCount} />
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
