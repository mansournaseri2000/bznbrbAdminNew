import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppGrid from '@/libs/primitives/layout/Grid';
import AppHeading from '@/libs/primitives/typography/Heading';
import AppText from '@/libs/primitives/typography/Text';

type PersonnelDetailProps = {
  profileImg: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  birthDate: string;
  orgEmail: string;
  lastSeen: string;
  mobile: string;
  role: string;
  teamName: string;
  teamManager: string;
};

const PersonnelDetail: React.FC<PersonnelDetailProps> = (props: PersonnelDetailProps) => {
  const {
    profileImg,
    firstName,
    lastName,
    nationalId,
    birthDate,
    orgEmail,
    lastSeen,
    mobile,
    role,
    teamName,
    teamManager,
  } = props;
  return (
    <AppFlex
      direction={'column'}
      gap={'5'}
      py={'4'}
      style={{ width: '100%', maxWidth: 608, border: '1px solid #D4D4D4', borderRadius: 8 }}
    >
      <AppBox p={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <AppHeading>اطلاعات پرسنل</AppHeading>
      </AppBox>
      <AppFlex direction={'column'} gap={'5'}>
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
        <AppGrid width={'100%'} columns={'2'} px={'4'}>
          <Item label='نام' value={firstName} />
          <Item label='نام خانوادگی' value={lastName} />
          <Item label='کدملی' value={nationalId} />
          <Item label='تاریخ تولد' value={birthDate} />
          <Item label='ایمیل سازمانی' value={orgEmail} />
          <Item label='آخرین بازدید' value={lastSeen} />
          <Item label='شماره تماس' value={mobile} />
          <Item label='سمت اجرایی' value={role} />
          <Item label='تیم' value={teamName} />
          <Item label='مسئول' value={teamManager} />
        </AppGrid>
      </AppFlex>
    </AppFlex>
  );
};

export default PersonnelDetail;

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
