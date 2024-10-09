'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Flex, Grid, Heading, IconButton, Text } from '@/libs/primitives';

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
    <Flex width={'100%'} direction={'column'} gap={'5'} py={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
      <Flex width={'100%'} justify={'between'} align={'center'} px={'4'} py={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Heading>اطلاعات کاربر</Heading>
        {/* TODO: add icon */}
        <IconButton size={'3'} radius='full'>
          icon
        </IconButton>
      </Flex>
      <Flex direction={'column'} gap={'4'} align={'center'}>
        <Flex direction={'column'} gap={'3'} align={'center'}>
          <Box
            style={{
              width: 120,
              height: 120,
              position: 'relative',
              borderRadius: '50%',
              border: '1px solid #D4D4D4',
            }}
          >
            <Image src={profileImg} alt='تصویر کاربر' fill style={{ borderRadius: '50%' }} />
          </Box>
          <Text as='p' style={{ padding: '4px 8px', backgroundColor: '#D4D4D4', borderRadius: 4 }}>
            {role}
          </Text>
        </Flex>
        <Grid width={'100%'} px={'4'} columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
          <Item label='نام' value={firstName} />
          <Item label='نام خانوادگی' value={lastName} />
          <Item label='جنسیت' value={sex} />
          <Item label='تاریخ تولد' value={birthDate} />
          <Item label='ایمیل' value={email} />
          <Item label='شماره تماس' value={mobile} />
        </Grid>
      </Flex>
    </Flex>
  );
};

export default UserDetail;

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
