'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';

import { getAllUsersWithParams, UserBody } from '@/api/user';
import UserHero from '@/components/user/hero/UserHero';
import UserList from '@/components/user/list/UserList';
import Header from '@/layout/Header';
import { Box, Flex, Grid, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { generateSearchParams } from '@/libs/utils/generateSearchParams';

export default function User({ searchParams }: { params: { slug: string }; searchParams: { page: string; limit: string; searchQuery: string; status: string } }) {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { replace } = useRouter();
  const [page, setPage] = useState(searchParams.page ? Number(searchParams.page) : 1);
  const methods = useForm({ defaultValues: { searchQuery: searchParams.searchQuery || '', status: searchParams.status ? searchParams.status : '', limit: 10, page: page } });
  const { watch, handleSubmit, setValue } = methods;

  // console.log('WATCH', watch());

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const {
    data: userData,
    mutate: userMutate,
    isError: userError,
    isPending: userPending,
  } = useMutation({
    mutationFn: async (body: UserBody) => getAllUsersWithParams(body),
    onSuccess: async data => {
      const cleanedData = Object.fromEntries(
        Object.entries(watch()).filter(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ([_, value]) =>
            value !== undefined &&
            value !== '' &&
            value !== 'none' &&
            value !== null &&
            !(Array.isArray(value) && value.length === 0) &&
            !(Array.isArray(value) && value.every(item => item === '')) &&
            !(Array.isArray(value) && value.every(item => item === 'none')) &&
            !(typeof value === 'object' && value !== null && Object.keys(value).length === 0)
        )
      );
      const searchParams = generateSearchParams(cleanedData);
      replace(`/user?${searchParams}`);
      console.log('data', data);
    },
    onError: async data => {
      console.log('DATA Error', data);
    },
  });

  useEffect(() => {
    userMutate(watch());
  }, []);

  // console.log(userData, 'sample test');

  const onSubmit = () => {
    userMutate(watch());
  };

  return (
    <Flex direction={'column'}>
      <Header title='لیست کاربران' isNavigation />
      <Box pr={'90px'}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex width={'100%'} direction={'column'} gap={'5'} p={'5'}>
                <UserHero onSubmit={() => onSubmit()} />
                {userError ? (
                  <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
                ) : userPending ? (
                  <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
                ) : (
                  <UserList data={userData?.latestUsers as any} />
                )}
                {userData?.latestUsers && (
                  <Flex width={'100%'} align={'center'} justify={'between'}>
                    <CustomPagination
                      current={page}
                      total={userData?.totalPages as number}
                      onPageChange={p => {
                        setPage(p);
                        setValue('page', p);
                        updateUrlWithPageNumber(p);
                        onSubmit();
                      }}
                    />
                    <ItemsPerPage data={userData?.latestUsers} currentPage={userData?.currentPage} totalCount={userData?.totalCount} />
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
