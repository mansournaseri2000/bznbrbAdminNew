import React from 'react';

import UserHero from '@/components/user/hero/UserHero';
import UserList from '@/components/user/list/UserList';
import UserPagination from '@/components/user/pagination/UserPagination';
import { Text } from '@/libs/primitives';
import AppFlex from '@/libs/primitives/layout/Flex';
import BoxWrapper from '@/libs/shared/wrapper/BoxWrapper';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

export default function User() {
  return (
    <AppFlex width={'100%'} direction={'column'} gap={'5'} p={'5'}>
      <BoxWrapper hero='سازنده برنامه'>اینجا باید content درست اضافه بشه</BoxWrapper>
      <Text {...typoVariant.title2} style={{ color: colorPalette.gray[12] }}>
        برنامه های کاربر
      </Text>
      <UserHero />
      <UserList />
      <UserPagination />
    </AppFlex>
  );
}
