'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Button, Flex, Grid, Text } from '@/libs/primitives';

type MemberDetailProps = {
  firstName: string;
  lastName: string;
  profileImg: string;
  birthDate: string;
  nationalId: string;
  mobile: string;
  orgEmail: string;
  lastSeen: string;
  position: string;
  teamName: string;
  managerName: string;
  //   onRemoveFromTeam: () => void;
};

const MemberDetail: React.FC<MemberDetailProps> = (props: MemberDetailProps) => {
  const { firstName, lastName, profileImg, birthDate, nationalId, mobile, orgEmail, lastSeen, position, teamName, managerName } = props;
  return (
    <Box width={'100%'}>
      <Grid columns={'3'} gapX={'5'} style={{ gridTemplateColumns: '0.4fr 5fr 0.6fr' }}>
        <Box
          style={{
            width: 100,
            height: 100,
            position: 'relative',
            borderRadius: '50%',
          }}
        >
          <Image src={profileImg} alt='تصویر کاربر' fill style={{ borderRadius: '50%', border: '1px solid #d4d4d4' }} />
        </Box>
        <Grid columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
          <Item label='نام' value={firstName} />
          <Item label='نام خانوادگی' value={lastName} />
          <Item label='کدملی' value={nationalId} />
          <Item label='تاریخ تولد' value={birthDate} />
        </Grid>
        <Button size={'3'}>حذف از تیم</Button>
      </Grid>
      <Grid columns={'3'} style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        <Item label='شماره تماس' value={mobile} />
        <Item label='ایمیل سازمانی' value={orgEmail} />
        <Item label='آخرین بازدید' value={lastSeen} />
        <Item label='تیم' value={teamName} />
        <Item label='سمت اجرایی' value={position} />
        <Item label='مسئول' value={managerName} />
      </Grid>
    </Box>
  );
};

export default MemberDetail;

const Item = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <Text as='label'>{label}</Text>
    <Text as='p'>{value}</Text>
  </ItemWrapper>
);

const ItemWrapper = styled(Flex).attrs(() => ({
  align: 'center',
  py: '4',
  gap: '2',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
