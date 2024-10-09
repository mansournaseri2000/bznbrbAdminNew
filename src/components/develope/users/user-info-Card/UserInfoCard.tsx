'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Button, Flex, Grid, Text } from '@/libs/primitives';

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
    <Grid width={'100%'} columns={'3'} gapX={'4'} style={{ gridTemplateColumns: '0.5fr 3fr 1fr' }}>
      <Flex width={'100%'} gap={'2'} direction={'column'} align={'center'}>
        <Box
          style={{
            width: 120,
            height: 120,
            position: 'relative',
            borderRadius: '50%',
          }}
        >
          <Image src={profileImg} alt='تصویر کاربر' fill style={{ borderRadius: '50%', border: '1px solid #D4D4D4' }} />
        </Box>
        <Text as='p' style={{ padding: '4px 8px', backgroundColor: '#D4D4D4', borderRadius: 4 }}>
          {userRole}
        </Text>
      </Flex>
      <Grid columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
        <Item label='نام' value={firstName} />
        <Item label='نام خانوادگی' value={lastName} />
        <Item label='جنسیت' value={sex} />
        <Item label='تاریخ تولد' value={birthDate} />
        <Item label='ایمیل' value={email} />
        <Item label='شماره تماس' value={mobile} />
      </Grid>
      <Button size={'3'}>ویرایش اطلاعات</Button>
    </Grid>
  );
};

export default UserInfoCard;

const Item = ({ label, value }: { label: string; value: string }) => (
  <ItemWrapper>
    <Text as='label'>{label}</Text>
    <Text as='p'>{value}</Text>
  </ItemWrapper>
);

const ItemWrapper = styled(Flex).attrs(() => ({
  align: 'center',
  gap: '2',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
