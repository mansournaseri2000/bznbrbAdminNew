'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import AppIconButton from '@/libs/primitives/components/IconButton';
import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppText from '@/libs/primitives/typography/Text';

type AutomationProfileProps = {
  profileImg: string;
  user: string;
  teamName: string;
  changeDate: string;
  type: string;
  status: string;
};

const AutomationProfile: React.FC<AutomationProfileProps> = (props: AutomationProfileProps) => {
  const { profileImg, user, teamName, changeDate, type, status } = props;
  return (
    <AppFlex
      direction={'column'}
      gap={'4'}
      py={'4'}
      align={'center'}
      style={{ width: '100%', maxWidth: 308, border: '1px solid #D4D4D4', borderRadius: 8 }}
    >
      <AppBox
        style={{
          width: 100,
          height: 100,
          position: 'relative',
          border: '1px solid #D4D4D4',
          borderRadius: '50%',
        }}
      >
        <Image alt='تصویر کاربر' src={profileImg} fill style={{ borderRadius: '50%' }} />
      </AppBox>
      <AppFlex width={'100%'} direction={'column'} px={'4'}>
        <Item label='کاربر' value={user} />
        <Item label='تیم' value={teamName} />
        <Item label='تاریخ تغییر' value={changeDate} />
        <Item label='نوع عملیات' value={type} />
        <Item label='وضعیت' value={status} />
      </AppFlex>
      <AppFlex width={'100%'} justify={'center'} gap={'5'}>
        <AppIconButton radius='full' size={'3'}>
          icon
        </AppIconButton>
        <AppIconButton radius='full' size={'3'}>
          icon
        </AppIconButton>
      </AppFlex>
    </AppFlex>
  );
};

export default AutomationProfile;

const Item = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <AppText as='label' style={{ whiteSpace: 'nowrap' }}>
      {label}
    </AppText>
    <AppText as='p' style={{ whiteSpace: 'wrap' }}>
      {value}
    </AppText>
  </ItemWrapper>
);

const ItemWrapper = styled(AppFlex).attrs(() => ({
  width: '100%',
  justify: 'between',
  align: 'center',
  py: '4',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
