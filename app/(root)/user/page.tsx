'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { filterObject } from '@/api/data-management';
import { getAllUsers } from '@/api/user';
import UserHero from '@/components/user/hero/UserHero';
import UserList from '@/components/user/list/UserList';
import Header from '@/layout/Header';
import { Box, Flex, Grid, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';

export default function User({ searchParams }: { params: { slug: string }; searchParams: { page: string; limit: string; searchQuery: string; status: string } }) {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const queryClient = useQueryClient();

  const methods = useForm({ defaultValues: { searchQuery: searchParams.searchQuery || '', status: searchParams.status ? searchParams.status : '', page: searchParams.page ? searchParams.page : 1 } });
  const { watch, handleSubmit, setValue } = methods;

  // console.log('WATCH', watch());

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const { data, isLoading, isError, isFetching } = useQuery({ queryKey: ['user-list'], queryFn: async () => await getAllUsers(watch() as any) });

  function generateSearchParams<T extends Record<string, any>>(obj: T): string {
    return Object.entries(obj)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${encodeURIComponent(key)}=${value.map(encodeURIComponent).join(',')}`;
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join('&');
  }
  const onSubmit = (data: any) => {
    const obj = filterObject(data, true);
    const searchParams = generateSearchParams(obj);
    queryClient.invalidateQueries({ queryKey: ['user-list'] });
    const newUrl = `${window.location.pathname}?${searchParams}`;
    window.history.pushState(null, '', newUrl);
  };

  return (
    <Flex direction={'column'}>
      <Header title='لیست کاربران' isNavigation />
      <Box pr={'90px'}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex width={'100%'} direction={'column'} gap={'5'} p={'5'}>
                <UserHero onSubmit={() => onSubmit(watch())} />
                {isError ? (
                  <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
                ) : isLoading || isFetching ? (
                  <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
                ) : (
                  <UserList data={data?.latestUsers as any} />
                )}
                {data?.latestUsers && (
                  <Flex width={'100%'} align={'center'} justify={'between'}>
                    <CustomPagination
                      current={Number(watch('page'))}
                      total={data?.totalPages as number}
                      onPageChange={p => {
                        setValue('page', p);
                        onSubmit(watch());
                      }}
                    />
                    <ItemsPerPage data={data?.latestUsers} currentPage={data?.currentPage} totalCount={data?.totalCount} />
                  </Flex>
                )}
              </Flex>
            </form>
          </FormProvider>
        </Grid>
      </Box>
    </Flex>
  );
}
