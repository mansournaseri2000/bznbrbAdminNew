'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';

import { getAllUsersWithParams, UserBody } from '@/api/user';
import UserHero from '@/components/user/hero/UserHero';
import UserList from '@/components/user/list/UserList';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';

export default function User({ searchParams }: { params: { slug: string }; searchParams: { page: string } }) {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [page, setPage] = useState(searchParams.page ? Number(searchParams.page) : 1);
  const methods = useForm({ defaultValues: { searchQuery: '', status: true, limit: 10, page: 1 } });
  const { watch, handleSubmit, setValue } = methods;
  // const queryClient = useQueryClient();

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
      console.log('data', data);
    },
    onError: async data => {
      console.log('DATA Error', data);
    },
  });

  useEffect(() => {
    userMutate(watch());
  }, [watch('status'), watch('page')]);

  console.log(userData, 'sample test');

  const onSubmit = () => {
    userMutate(watch());
    console.log('run');
  };

  return (
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
              <ItemsPerPage data={userData?.latestUsers} currentPage={userData?.currentPage as number} totalCount={userData?.totalUsersCount as number} />
            </Flex>
          )}
        </Flex>
      </form>
    </FormProvider>
  );
}
