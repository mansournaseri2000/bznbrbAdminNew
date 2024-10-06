'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Flex, Text } from '@/libs/primitives';

type UserInfoCardProps = {
  profileImg: string;
  name: string;
  createdBy: string;
  date: string;
};

const UserInfoCard: React.FC<UserInfoCardProps> = (props: UserInfoCardProps) => {
  const { profileImg, name, createdBy, date } = props;
  return (
    <Flex
      width={'100%'}
      maxWidth={'308px'}
      height={'min-content'}
      align={'center'}
      direction={'column'}
      p={'4'}
      gap={'4'}
      style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}
    >
      <Box
        width={'120px'}
        height={'120px'}
        position={'relative'}
        style={{ borderRadius: '50%', border: '1px solid #D4D4D4' }}
      >
        <Image src={profileImg} alt='' fill style={{ borderRadius: '50%' }} />
      </Box>
      <Item label='نام' value={name} />
      <Item label='ساخته شده توسط' value={createdBy} />
      <Item label='تاریخ ساخت' value={date} />
    </Flex>
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
  width: '100%',
  justify: 'between',
  align: 'center',
  gap: '2',
  py: '4',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
