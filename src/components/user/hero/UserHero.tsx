import React from 'react';

import { TextField } from '@/libs/primitives';
import AppButton from '@/libs/primitives/components/Button';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';

const UserHero = () => {
  return (
    <AppGrid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '0.5fr 3fr 1fr' }}>
      <AppButton size={'3'}>ثبت کاربر</AppButton>
      <TextField placeholder='جستجوی  کاربر' style={{ borderRadius: 12 }} />
      <AppFlex align={'center'} justify={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}>
        نوع کاربر
      </AppFlex>
    </AppGrid>
  );
};

export default UserHero;
