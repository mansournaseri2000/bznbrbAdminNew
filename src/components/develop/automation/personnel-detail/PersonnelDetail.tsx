'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Flex, Grid, Heading, Text } from '@/libs/primitives';

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
  const { profileImg, firstName, lastName, nationalId, birthDate, orgEmail, lastSeen, mobile, role, teamName, teamManager } = props;
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'} py={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <Box p={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Heading>اطلاعات پرسنل</Heading>
      </Box>
      <Flex direction={'column'} gap={'5'}>
        <Box
          style={{
            width: 100,
            height: 100,
            position: 'relative',
            border: '1px solid #D4D4D4',
            borderRadius: '50%',
          }}
        >
          <Image alt='تصویر کاربر' src={profileImg} fill style={{ borderRadius: '50%' }} />
        </Box>
        <Grid width={'100%'} columns={'2'} px={'4'}>
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
        </Grid>
      </Flex>
    </Flex>
  );
};

export default PersonnelDetail;

const Item = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <Text as='label' style={{ whiteSpace: 'nowrap' }}>
      {label}
    </Text>
    <Text as='p' style={{ whiteSpace: 'wrap' }}>
      {value}
    </Text>
  </ItemWrapper>
);

const ItemWrapper = styled(Flex).attrs(() => ({
  align: 'center',
  py: '4',
  gap: '2',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
