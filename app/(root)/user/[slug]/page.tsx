'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery } from '@tanstack/react-query';

import { getRecentTrips, getUserInfo, RecentTripsBody } from '@/api/user';
import EditUser from '@/components/user/user-profile/edit-user/EditUser';
import UserProfileHero from '@/components/user/user-profile/hero/UserProfileHero';
import UserProfileList from '@/components/user/user-profile/list/UserProfileList';
import { Flex, Grid, Modal, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import ModalHeader from '@/libs/shared/ModalHeader';
import UserDetailCard from '@/libs/shared/UserDetailCard';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

export default function UserProfile({ params }: { params: { slug: number } }) {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userId = params.slug;

  const methods = useForm({
    defaultValues: {
      page: 1,
      limit: 10,
      sortDate: '',
      sort: '',
      userId: Number(userId),
      targetDate: '',
      originCityId: '',
      originProvinceId: '',
      destinationCityId: '',
      destinationProvinceId: '',
      departureDateStart: '',
      departureDateEnd: '',
      returnDateStart: '',
      returnDateEnd: '',
    },
  });

  const { watch, setValue, handleSubmit } = methods;

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: userData, isLoading: userLoading, isFetching: userFetching } = useQuery({ queryKey: ['user_info'], queryFn: async () => getUserInfo(userId) });

  const {
    data: tripsData,
    mutate: tripsMutate,
    isPending: tripPending,
  } = useMutation({
    mutationFn: async (body: RecentTripsBody) => getRecentTrips(body),
    onSuccess: async data => {
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

  return (
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

          <UserProfileHero onSubmit={() => tripsMutate(watch() as any)} />
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
  );
}
