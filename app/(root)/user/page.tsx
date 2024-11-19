'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import UserHero from '@/components/user/hero/UserHero';
import UserList from '@/components/user/list/UserList';
import AppFlex from '@/libs/primitives/layout/Flex';

export default function User() {
  const methods = useForm({ defaultValues: { search: '', Type_Of_User: '' } });
  return (
    <FormProvider {...methods}>
      <AppFlex width={'100%'} direction={'column'} gap={'5'} p={'5'}>
        <UserHero />
        <UserList />
        {/* TODO: define pagination */}
      </AppFlex>
    </FormProvider>
  );
}
