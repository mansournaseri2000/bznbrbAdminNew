'use client';

import React from 'react';

import AppButton from '@/libs/primitives/components/Button';
import AppIconButton from '@/libs/primitives/components/IconButton';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppText from '@/libs/primitives/typography/Text';

type UserAutomationProps = {
  operatorName: string;
  type: string;
  status: string;
  team: string;
  date: string;
  operatedOn: string;
  //   onAccept: () => void;
  // onReject: () => void;
  //   onMoreInfo: () => void;
};

const UserAutomation = (props: UserAutomationProps) => {
  const { operatorName, date, status, type, team, operatedOn } = props;
  return (
    <AppFlex
      width={'100%'}
      direction={'column'}
      p={'4'}
      gap={'4'}
      style={{ border: '1px solid #D4D4D4', borderRadius: 4 }}
    >
      <AppGrid columns={'3'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Item label='نام عامل' value={operatorName} />
        <Item label='تاریخ ' value={date} />
        <Item label='وضعیت' value={status} />
        <Item label='نوع عملیات' value={type} />
        <Item label='بر روی ' value={operatedOn} />
        <Item label='تیم' value={team} />
      </AppGrid>
      <AppFlex width={'100%'} justify={'between'}>
        <AppFlex gap={'5'}>
          {/* TODO: define icons for this buttons */}
          <AppIconButton size={'3'}>icon</AppIconButton>
          <AppIconButton size={'3'}>icon</AppIconButton>
        </AppFlex>
        <AppButton size={'3'}>اطلاعات بیشتر</AppButton>
      </AppFlex>
    </AppFlex>
  );
};

export default UserAutomation;

const Item = ({ label, value }: { label: string; value: string }) => (
  <AppFlex align={'center'} gap={'3'} mb={'4'}>
    <AppText as='label' style={{ whiteSpace: 'nowrap' }}>
      {label}
    </AppText>
    <AppText as='p' style={{ whiteSpace: 'nowrap' }}>
      {value}
    </AppText>
  </AppFlex>
);
