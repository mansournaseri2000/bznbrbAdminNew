'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { getTrips } from '@/api/plans';
import CreatePlan from '@/components/plans/create-plan/CreatePlan';
import UserPlan from '@/components/plans/user-plan/UserPlan';

const PlansDetail = ({ params }: { params: { slug: 'create-plan' | 'user-plan' } }) => {
  /*
   *** Services _________________________________________________________________________________________________________________________________________________________________
   */
  const { data, isLoading } = useQuery({
    queryKey: ['trip'],
    queryFn: async () => await getTrips('f2436471-3467-4284-bd87-68fdb191f06e'),
  });

  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  console.log('data', data);

  const renderElement = (key: 'create-plan' | 'user-plan') => {
    switch (key) {
      case 'create-plan':
        return <CreatePlan provinces={constantData?.provinces ? constantData.provinces : []} />;
      case 'user-plan':
        return <UserPlan data={data?.data as any} tripID='f2436471-3467-4284-bd87-68fdb191f06e' isLoading={isLoading} />;
      default:
        return null;
    }
  };

  return renderElement(params.slug);
};

export default PlansDetail;
