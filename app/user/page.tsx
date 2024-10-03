import React from 'react';

import UserHero from '@/components/user/hero/UserHero';
import UserList from '@/components/user/list/UserList';
import UserPagination from '@/components/user/pagination/UserPagination';
import AppFlex from '@/libs/primitives/layout/Flex';

export default function User() {
  return (
    <AppFlex width={'100%'} direction={'column'} gap={'4'}>
      <UserHero />
      <UserList />
      <UserPagination />
    </AppFlex>
  );
}
