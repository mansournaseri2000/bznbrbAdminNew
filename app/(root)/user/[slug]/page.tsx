'use client';

import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { filterObject } from '@/api/data-management';
import { editUser, EditUserDetailResponse, getRecentTripsUser, getUserInfo } from '@/api/user';
import EditUser from '@/components/user/user-profile/edit-user/EditUser';
import UserProfileHero from '@/components/user/user-profile/hero/UserProfileHero';
import UserProfileList from '@/components/user/user-profile/list/UserProfileList';
import Header from '@/layout/Header';
import { Box, Flex, Grid, Modal, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import UserDetailCard from '@/libs/shared/UserDetailCard';
import { generateSearchParams } from '@/libs/utils/generateSearchParams';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { UserInfoDetail } from '@/types/user/user';

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
    sort: string;
  };
}) {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: userData, isLoading: userLoading, isFetching: userFetching } = useQuery({ queryKey: ['user_info'], queryFn: async () => getUserInfo(userId) });

  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const userId = Number(params.slug);
  const queryClient = useQueryClient();

  const methods = useForm({
    defaultValues: {
      page: Number(searchParams.page) || 1,
      sortDate: searchParams.sortDate ? searchParams.sortDate : '',
      targetDate: searchParams.targetDate ? searchParams.targetDate : '',
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

  const { watch, setValue, handleSubmit } = methods;
  const { data, isLoading, isFetching } = useQuery({ queryKey: ['recent-trips-user', userId], queryFn: async () => await getRecentTripsUser(watch() as any, userId) });

  // const {
  //   data: tripsData,
  //   mutate: tripsMutate,
  //   isPending: tripPending,
  // } = useMutation({
  //   mutationFn: async (body: RecentTripsBody) => getRecentTrips(body),
  //   onSuccess: async data => {
  //     const cleanedData = Object.fromEntries(
  //       Object.entries(watch()).filter(([key, value]) => {
  //         if (
  //           key !== 'userId' &&
  //           value !== undefined &&
  //           value !== '' &&
  //           value !== 'none' &&
  //           value !== null &&
  //           !(Array.isArray(value) && value.length === 0) &&
  //           !(Array.isArray(value) && value.every(item => item === '')) &&
  //           !(Array.isArray(value) && value.every(item => item === 'none'))
  //         ) {
  //           if (['departureDateStart', 'departureDateEnd', 'returnDateStart', 'returnDateEnd'].includes(key)) {
  //             return new Date(value).getTime();
  //           }
  //           return true;
  //         }
  //         return false;
  //       })
  //     );

  //     Object.keys(cleanedData).forEach(key => {
  //       if (['departureDateStart', 'departureDateEnd', 'returnDateStart', 'returnDateEnd'].includes(key)) {
  //         cleanedData[key] = new Date(cleanedData[key]).getTime();
  //       }
  //     });

  //     const searchParams = generateSearchParams(cleanedData);
  //     push(`/user/${userId}?${searchParams}`);
  //     setShowFilter(false);
  //     console.log('data', data);
  //   },
  //   onError: async data => {
  //     console.log('OnError', data);
  //   },
  // });

  const { mutate: updateUserMutate, isPending: updateUserPending } = useMutation({
    mutationFn: async (body: EditUserDetailResponse) => editUser(userId, body),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['user_info'] });
        ToastSuccess(isActive === true ? 'کاربر مورد نظر با موفقیت فعال شد' : 'کاربر مورد نظر با موفقیت غیر فعال شد');
      } else {
        ToastError('لطفا دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err);
    },
  });

  console.log(watch());

  /*
   *** Hooks and Methods _________________________________________________________________________________________________________________________________________________________________
   */

  const onSubmit = (data: any) => {
    console.log('run');
    const obj = filterObject(data, true);
    const searchParams = generateSearchParams(obj);
    queryClient.invalidateQueries({ queryKey: ['recent-trips-user'] });
    const newUrl = `${window.location.pathname}?${searchParams}`;
    window.history.pushState(null, '', newUrl);
  };

  const handleDeActiveUser = (userInfo: UserInfoDetail) => {
    const { name, last_name, email, birthday, gender } = userInfo;
    setIsActive(false);
    return {
      name,
      last_name,
      email,
      birthday,
      gender,
      status: false,
    };
  };

  const handleActiveUser = (userInfo: UserInfoDetail) => {
    const { name, last_name, email, birthday, gender } = userInfo;
    setIsActive(true);
    return {
      name,
      last_name,
      email,
      birthday,
      gender,
      status: true,
    };
  };

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
                  <UserDetailCard
                    {...(userData?.userInfo as any)}
                    type='USER'
                    onDeActive={() => {
                      if (userData?.userInfo) {
                        const updatedUser = handleDeActiveUser(userData.userInfo);
                        updateUserMutate(updatedUser as any);
                      }
                    }}
                    onActive={() => {
                      if (userData?.userInfo) {
                        const updatedUser = handleActiveUser(userData.userInfo);
                        updateUserMutate(updatedUser as any);
                      }
                    }}
                    isLoading={updateUserPending}
                    onEditInfo={() => setIsOpen(true)}
                  />
                )}
                <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12] }}>
                  برنامه های کاربر
                </Text>

                <UserProfileHero onSubmit={() => onSubmit(watch())} userId={userId} isOpen={showFilter} setIsOpen={setShowFilter} isPending={isLoading} />
                {isFetching || isLoading ? <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '20px' }} /> : <UserProfileList data={data?.latestTrips ? data.latestTrips : ([] as any)} />}

                {data?.latestTrips && (
                  <Flex width={'100%'} align={'center'} justify={'between'}>
                    <CustomPagination
                      current={watch('page')}
                      total={data?.totalPages}
                      onPageChange={p => {
                        setValue('page', p);
                        onSubmit(watch());
                      }}
                    />
                    <ItemsPerPage data={data?.latestTrips} currentPage={data?.currentPage} totalCount={data?.totalCount} />
                  </Flex>
                )}
              </Grid>
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalHeader title='ویرایش کاربر' handleClose={() => setIsOpen(false)} />
                <EditUser onClose={() => setIsOpen(false)} userId={userId} data={userData as any} />
              </Modal>
            </form>
          </FormProvider>
        </Grid>
      </Box>
    </Flex>
  );
}
