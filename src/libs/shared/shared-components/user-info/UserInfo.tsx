import React from 'react';

import Image from 'next/image';

import { Box, Flex } from '@radix-ui/themes';
import styled from 'styled-components';

import { Text } from '@/libs/primitives';
import AppButton from '@/libs/primitives/components/Button';

type UserInfoProps = {
  profileImg: string;
  firstName: string;
  lastName: string;
  birthday: string;
  sex: 'مرد' | 'زن';
  mobile: number;
  email: string;
};

const UserInfo = (props: UserInfoProps) => {
  const { profileImg, firstName, lastName, birthday, sex, mobile, email } = props;
  return (
    <CardWrapper direction={'column'} p={'4'} gap={'4'} align={'center'}>
      <Box style={{ width: 120, height: 120, position: 'relative', borderRadius: '50%' }}>
        <Image src={profileImg} alt='' fill style={{ borderRadius: '50%' }} />
      </Box>
      <Flex width={'100%'} direction={'column'} gap={'1'}>
        <Flex width={'100%'} justify={'between'} py={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>نام</Text>
          <Text as='p'>{firstName}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>نام خانوادگی</Text>
          <Text as='p'>{lastName}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>تاریخ تولد</Text>
          <Text as='p'>{birthday}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>جنسیت</Text>
          <Text as='p'>{sex}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>شماره تماس</Text>
          <Text as='p'>{mobile}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'}>
          <Text as='label'>ایمیل</Text>
          <Text as='p'>{email}</Text>
        </Flex>
      </Flex>
      <AppButton>مشاهده پروفایل</AppButton>
    </CardWrapper>
  );
};

export default UserInfo;

const CardWrapper = styled(Flex)`
  width: 100%;
  max-width: 308px;
  border-radius: 12px;
  border: 1px solid #d4d4d4;
`;
