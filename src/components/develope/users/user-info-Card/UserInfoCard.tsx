import React from 'react';

import Image from 'next/image';

import { Box, Flex, Grid } from '@radix-ui/themes';

import { Text } from '@/libs/primitives';
import AppButton from '@/libs/primitives/components/Button';

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

const UserInfoCard = (props: UserInfoCardProps) => {
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
          <Image src={profileImg} alt='' fill style={{ borderRadius: '50%' }} />
        </Box>
        <Text as='p' style={{ padding: '4px 8px', backgroundColor: '#D4D4D4', borderRadius: 4 }}>
          {userRole}
        </Text>
      </Flex>
      <Grid columns={'2'} style={{ gridTemplateColumns: '1fr 1fr' }}>
        <Flex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>نام</Text>
          <Text as='label'>{firstName}</Text>
        </Flex>
        <Flex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>نام خانوادگی</Text>
          <Text as='label'>{lastName}</Text>
        </Flex>
        <Flex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>جنسیت</Text>
          <Text as='label'>{sex}</Text>
        </Flex>
        <Flex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>تاریخ تولد</Text>
          <Text as='label'>{birthDate}</Text>
        </Flex>
        <Flex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>ایمیل</Text>
          <Text as='label'>{email}</Text>
        </Flex>
        <Flex align={'center'} gap={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>شماره تماس</Text>
          <Text as='label'>{mobile}</Text>
        </Flex>
      </Grid>
      <AppButton size={'3'}>ویرایش اطلاعات</AppButton>
    </Grid>
  );
};

export default UserInfoCard;
