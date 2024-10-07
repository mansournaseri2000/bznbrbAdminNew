'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import AppButton from '@/libs/primitives/components/Button';
import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppText from '@/libs/primitives/typography/Text';

type UserInfoCardProps = {
  firstName: string;
  lastName: string;
  sex: 'زن' | 'مرد';
  birthDate: string;
  mobile: string;
  email: string;
  profileImg: string;
  userRole: string;
  //   onEditClick: () => void;
};

const UserInfoCard: React.FC<UserInfoCardProps> = (props: UserInfoCardProps) => {
  const { profileImg, userRole, firstName, lastName, sex, birthDate, email, mobile } = props;
  return (
    <AppGrid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '0.5fr 3fr 1fr' }}>
      <AppFlex width={'100%'} gap={'2'} direction={'column'} align={'center'}>
        <AppBox
          style={{
            width: 120,
            height: 120,
            position: 'relative',
            borderRadius: '50%',
          }}
        >
          <Image src={profileImg} alt='تصویر کاربر' fill style={{ borderRadius: '50%', border: '1px solid #D4D4D4' }} />
        </AppBox>
        <AppText as='p' style={{ padding: '4px 8px', backgroundColor: '#D4D4D4', borderRadius: 4 }}>
          {userRole}
        </AppText>
      </AppFlex>
      <AppGrid columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
        <Item label='نام' value={firstName} />
        <Item label='نام خانوادگی' value={lastName} />
        <Item label='جنسیت' value={sex} />
        <Item label='تاریخ تولد' value={birthDate} />
        <Item label='ایمیل' value={email} />
        <Item label='شماره تماس' value={mobile} />
      </AppGrid>
      <AppButton size={'3'}>ویرایش اطلاعات</AppButton>
    </AppGrid>
  );
};

export default UserInfoCard;

const Item = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <AppText as='label'>{label}</AppText>
    <AppText as='p'>{value}</AppText>
  </ItemWrapper>
);

const ItemWrapper = styled(AppFlex).attrs(() => ({
  align: 'center',
  gap: '2',
}))`
  border-bottom: 1px solid #d4d4d4;
`;

{
  /* <AppFlex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>نام</AppText>
          <AppText as='p'>{firstName}</AppText>
        </AppFlex>
        <AppFlex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>نام خانوادگی</AppText>
          <AppText as='p'>{lastName}</AppText>
        </AppFlex>
        <AppFlex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>جنسیت</AppText>
          <AppText as='p'>{sex}</AppText>
        </AppFlex>
        <AppFlex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>تاریخ تولد</AppText>
          <AppText as='p'>{birthDate}</AppText>
        </AppFlex>
        <AppFlex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>ایمیل</AppText>
          <AppText as='p'>{email}</AppText>
        </AppFlex>
        <AppFlex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <AppText as='label'>شماره تماس</AppText>
          <AppText as='p'>{mobile}</AppText>
        </AppFlex> */
}
