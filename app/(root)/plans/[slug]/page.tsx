'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getTrips } from '@/api/plans';
import PlaneForm from '@/components/plans/create-edit-plane/PlaneForm';
import UserPlan from '@/components/plans/user-plan/UserPlan';

const PlansDetail = ({ params }: { params: { slug: 'create-plan' | 'user-plan' } }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['trip'],
    queryFn: async () => await getTrips('f2436471-3467-4284-bd87-68fdb191f06e'),
  });

  console.log('data', data);

  const renderElement = (key: 'create-plan' | 'user-plan') => {
    switch (key) {
      case 'create-plan':
        return <PlaneForm />;
      case 'user-plan':
        return <UserPlan data={data?.data as any} tripID='f2436471-3467-4284-bd87-68fdb191f06e' isLoading={isLoading} />;
      default:
        return null;
    }
  };

  return renderElement(params.slug);
};

export default PlansDetail;
