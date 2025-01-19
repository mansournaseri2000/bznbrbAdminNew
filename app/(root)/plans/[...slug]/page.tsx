'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { getTrips } from '@/api/plans';
import CreatePlan from '@/components/plans/create-plan/CreatePlan';
import UserPlan from '@/components/plans/user-plan/UserPlan';
import Header from '@/layout/Header';
import { Box, Flex } from '@/libs/primitives';

const PlansDetail = ({ params }: { params: { slug: string[] } }) => {
  const type = params.slug[0];
  const userId = Number(params.slug[1]);
  console.log('🚀 ~ PlansDetail ~ userId:', userId);
  const tripId = params.slug[2];
  console.log('🚀 ~ PlansDetail ~ tripId:', tripId);

  /*
   *** Services _________________________________________________________________________________________________________________________________________________________________
   */
  const { data, isLoading } = useQuery({
    queryKey: ['trip'],
    queryFn: async () => await getTrips(tripId),
  });

  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  // console.log('data', data);

  const renderElement = () => {
    switch (type) {
      case 'create-plan':
        return <CreatePlan provinces={constantData?.provinces ? constantData.provinces : []} />;
      case 'user-plan':
        switch (tripId) {
          case tripId:
            return <UserPlan data={data?.data as any} tripID={tripId} userId={userId} isLoading={isLoading} />;
          default:
            return null;
        }
      default:
        return null;
    }
  };

  return (
    <Flex direction={'column'}>
      <Header title={type === 'create-plan' ? 'ساخت برنامه' : 'برنامه'} isNavigation />
      <Box p={'24px 110px 40px 40px '}>{renderElement()}</Box>
    </Flex>
  );
};

export default PlansDetail;
