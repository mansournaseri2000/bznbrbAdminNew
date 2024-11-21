'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Flex, IconButton, Text } from '@/libs/primitives';

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
    <Flex direction={'column'} width={'100%'} gap={'4'} py={'4'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
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
      <Flex width={'100%'} direction={'column'} px={'4'}>
        <Item label='کاربر' value={user} />
        <Item label='تیم' value={teamName} />
        <Item label='تاریخ تغییر' value={changeDate} />
        <Item label='نوع عملیات' value={type} />
        <Item label='وضعیت' value={status} />
      </Flex>
      <Flex width={'100%'} justify={'center'} gap={'5'}>
        <IconButton radius='full' size={'3'}>
          icon
        </IconButton>
        <IconButton radius='full' size={'3'}>
          icon
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default AutomationProfile;

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
  width: '100%',
  justify: 'between',
  align: 'center',
  py: '4',
}))`
  border-bottom: 1px solid #d4d4d4;
`;
