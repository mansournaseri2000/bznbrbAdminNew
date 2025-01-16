'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery } from '@tanstack/react-query';

import { getRecentTrips, getUserInfo, RecentTripsBody } from '@/api/user';
import EditUser from '@/components/user/user-profile/edit-user/EditUser';
import UserProfileHero from '@/components/user/user-profile/hero/UserProfileHero';
import UserProfileList from '@/components/user/user-profile/list/UserProfileList';
import Header from '@/layout/Header';
import { Box, Flex, Grid, Modal, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import ModalHeader from '@/libs/shared/ModalHeader';
import UserDetailCard from '@/libs/shared/UserDetailCard';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { generateSearchParams } from '@/libs/utils/generateSearchParams';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

export default function UserProfile({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    page: string;
    limit: string;
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
  };
}) {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: userData, isLoading: userLoading, isFetching: userFetching } = useQuery({ queryKey: ['user_info'], queryFn: async () => getUserInfo(userId) });
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  console.log(params.slug);
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userId = Number(params.slug);

  const methods = useForm({
    defaultValues: {
      page: Number(searchParams.page) || 1,
      limit: Number(searchParams.limit) || 10,
      sortDate: searchParams.sortDate ? searchParams.sortDate : '',
      userId: userId,
      targetDate: searchParams.targetDate ? searchParams.targetDate : '',
      originCityId: searchParams.originCityId ? Number(searchParams.originCityId) : '',
      originProvinceId: searchParams.originProvinceId ? Number(searchParams.originProvinceId) : '',
      destinationCityId: searchParams.destinationCityId ? Number(searchParams.destinationCityId) : '',
      destinationProvinceId: searchParams.destinationProvinceId ? Number(searchParams.destinationProvinceId) : '',
      departureDateStart: searchParams.departureDateStart ? Number(searchParams.departureDateStart) : '',
      departureDateEnd: searchParams.departureDateEnd ? Number(searchParams.departureDateEnd) : '',
      returnDateStart: searchParams.returnDateStart ? Number(searchParams.returnDateStart) : '',
      returnDateEnd: searchParams.returnDateEnd ? Number(searchParams.returnDateEnd) : '',
      sort: '',
    },
  });

  const { watch, setValue, handleSubmit } = methods;

  console.log('USER Data', userData);

  const {
    data: tripsData,
    mutate: tripsMutate,
    isPending: tripPending,
  } = useMutation({
    mutationFn: async (body: RecentTripsBody) => getRecentTrips(body),
    onSuccess: async data => {
      const cleanedData = Object.fromEntries(
        Object.entries(watch()).filter(
          ([key, value]) =>
            key !== 'userId' &&
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
      push(`/user/${userId}?${searchParams}`);
      console.log('OnSuccess', data);
    },
    onError: async data => {
      console.log('OnError', data);
    },
  });
  /*
   *** Hooks and Methods _________________________________________________________________________________________________________________________________________________________________
   */

  useEffect(() => {
    tripsMutate(watch() as any);
  }, []);

  const onSubmit = () => {
    tripsMutate(watch() as any);
    console.log('run');
  };

  console.log('DATA', tripsData);

  return (
    <Flex direction={'column'}>
      <Header title='اطلاعات کاربر' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid width={'100%'} gapY={'5'}>
                {/* TODO: fix data format for any */}
                {userLoading || userFetching ? (
                  <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '20px' }} />
                ) : (
                  <UserDetailCard {...(userData?.userInfo as any)} type='USER' onEditInfo={() => setIsOpen(true)} />
                )}
                <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12] }}>
                  برنامه های کاربر
                </Text>

                <UserProfileHero onSubmit={() => tripsMutate(watch() as any)} userId={userId} />
                {tripPending ? <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '20px' }} /> : <UserProfileList data={tripsData?.latestTrips ? tripsData.latestTrips : ([] as any)} />}

                {tripsData?.latestTrips && (
                  <Flex width={'100%'} align={'center'} justify={'between'}>
                    <CustomPagination
                      current={watch('page')}
                      total={tripsData?.totalPages}
                      onPageChange={p => {
                        setValue('page', p);
                        updateUrlWithPageNumber(p);
                        onSubmit();
                      }}
                    />
                    <ItemsPerPage data={tripsData?.latestTrips} currentPage={tripsData?.currentPage} totalCount={tripsData?.totalCount} />
                  </Flex>
                )}
              </Grid>
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalHeader title='ویرایش کاربر' icon={<Close />} handleClose={() => setIsOpen(false)} />
                <EditUser onClose={() => setIsOpen(false)} userId={userId} data={userData as any} />
              </Modal>
            </form>
          </FormProvider>
        </Grid>
      </Box>
    </Flex>
  );
}
