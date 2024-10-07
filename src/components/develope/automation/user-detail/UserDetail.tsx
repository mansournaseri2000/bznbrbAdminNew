'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import AppIconButton from '@/libs/primitives/components/IconButton';
import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppHeading from '@/libs/primitives/typography/Heading';
import AppText from '@/libs/primitives/typography/Text';

type UserDetailProps = {
  //   onEdit: () => void;
  profileImg: string;
  role: string;
  firstName: string;
  lastName: string;
  sex: 'مرد' | 'زن';
  birthDate: string;
  email: string;
  mobile: string;
};

const UserDetail: React.FC<UserDetailProps> = (props: UserDetailProps) => {
  const { profileImg, role, firstName, lastName, sex, birthDate, email, mobile } = props;
  return (
    <AppFlex width={'100%'} direction={'column'} gap={'5'} py={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <AppFlex width={'100%'} justify={'between'} align={'center'} px={'4'} py={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <AppHeading>اطلاعات کاربر</AppHeading>
        {/* TODO: add icon */}
        <AppIconButton size={'3'} radius='full'>
          icon
        </AppIconButton>
      </AppFlex>
      <AppFlex direction={'column'} gap={'4'} align={'center'}>
        <AppFlex direction={'column'} gap={'3'} align={'center'}>
          <AppBox
            style={{
              width: 120,
              height: 120,
              position: 'relative',
              borderRadius: '50%',
              border: '1px solid #D4D4D4',
            }}
          >
            <Image src={profileImg} alt='تصویر کاربر' fill style={{ borderRadius: '50%' }} />
          </AppBox>
          <AppText as='p' style={{ padding: '4px 8px', backgroundColor: '#D4D4D4', borderRadius: 4 }}>
            {role}
          </AppText>
        </AppFlex>
        <AppGrid width={'100%'} px={'4'} columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
          <Item label='نام' value={firstName} />
          <Item label='نام خانوادگی' value={lastName} />
          <Item label='جنسیت' value={sex} />
          <Item label='تاریخ تولد' value={birthDate} />
          <Item label='ایمیل' value={email} />
          <Item label='شماره تماس' value={mobile} />
        </AppGrid>
      </AppFlex>
    </AppFlex>
  );
};

export default UserDetail;

const Item = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <AppText as='label'>{label}</AppText>
    <AppText as='p'>{value}</AppText>
  </ItemWrapper>
);

const ItemWrapper = styled(AppFlex).attrs(() => ({
  align: 'center',
  py: '4',
  gap: '2',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
