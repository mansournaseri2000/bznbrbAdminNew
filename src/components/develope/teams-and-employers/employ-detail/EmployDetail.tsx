'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import AppButton from '@/libs/primitives/components/Button';
import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppText from '@/libs/primitives/typography/Text';

type EmployDetailProps = {
  firstName: string;
  lastName: string;
  profileImg: string;
  nationalId: string;
  fatherName: string;
  birthDate: string;
  personalEmail: string;
  mobile: string;
  orgEmail: string;
  lastSeen: string;
  accountCreatedAt: string;
  accountOwner: string;
  address: string;
  bankAccountNumber: string;
  // onEdit: () => void;
  // onDeactivate: () => void;
};

const EmployDetail: React.FC<EmployDetailProps> = (props: EmployDetailProps) => {
  const {
    firstName,
    lastName,
    profileImg,
    nationalId,
    fatherName,
    birthDate,
    personalEmail,
    mobile,
    orgEmail,
    lastSeen,
    accountCreatedAt,
    accountOwner,
    address,
    bankAccountNumber,
  } = props;
  return (
    <AppBox width={'100%'}>
      <AppGrid columns={'3'} gapX={'5'} style={{ gridTemplateColumns: '0.4fr 5fr 0.7fr' }}>
        <AppBox
          style={{
            width: 100,
            height: 100,
            position: 'relative',
            borderRadius: '50%',
          }}
        >
          <Image
            src={profileImg}
            alt='تصویر کاربر'
            fill
            style={{ borderRadius: '50%', border: '1px solid #d4d4d4' }}
          />
        </AppBox>
        <AppFlex direction={'column'} gap={'1'}>
          <AppGrid columns={'2'}>
            <Item label='نام' value={firstName} />
            <Item label='نام خانوادگی' value={lastName} />
          </AppGrid>
          <AppGrid columns={'3'}>
            <Item label='کدملی' value={nationalId} />
            <Item label='نام پدر' value={fatherName} />
            <Item label='تاریخ تولد' value={birthDate} />
          </AppGrid>
        </AppFlex>
        <AppFlex direction={'column'} gap={'2'}>
          <AppButton size={'3'}>ویرایش اطلاعات</AppButton>
          <AppButton size={'3'} variant='outline'>
            غیر فعال سازی
          </AppButton>
        </AppFlex>
      </AppGrid>
      <AppGrid columns={'3'} gapY={'1'}>
        <Item label='ایمیل شخصی' value={personalEmail} />
        <Item label='شماره تماس' value={mobile} />
        <Item label='ایمیل سازمانی' value={orgEmail} />
        <Item label='تاریخ ساخت اکانت' value={accountCreatedAt} />
        <Item label='سازنده حساب' value={accountOwner} />
        <Item label='آخرین بازدید' value={lastSeen} />
      </AppGrid>
      <AppGrid columns={'2'}>
        <Item label='شماره حساب' value={bankAccountNumber} />
        <Item label='آدرس منزل' value={address} />
      </AppGrid>
    </AppBox>
  );
};

export default EmployDetail;

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
  align: 'center',
  py: '4',
  gap: '2',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
