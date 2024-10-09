'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Button, Flex, Grid, Text } from '@/libs/primitives';

type EmployDetailProps = {
  firstName: string;
  lastName: string;
  profileImg: string;
  nationalId: string;
  fatherName: string;
  birthDate: string;
  personalEmail: string;
  mobile: string;
  orgEmail: string;
  lastSeen: string;
  accountCreatedAt: string;
  accountOwner: string;
  address: string;
  bankAccountNumber: string;
  // onEdit: () => void;
  // onDeactivate: () => void;
};

const EmployDetail: React.FC<EmployDetailProps> = (props: EmployDetailProps) => {
  const { firstName, lastName, profileImg, nationalId, fatherName, birthDate, personalEmail, mobile, orgEmail, lastSeen, accountCreatedAt, accountOwner, address, bankAccountNumber } = props;
  return (
    <Box width={'100%'}>
      <Grid columns={'3'} gapX={'5'} style={{ gridTemplateColumns: '0.4fr 5fr 0.7fr' }}>
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
        <Flex direction={'column'} gap={'1'}>
          <Grid columns={'2'}>
            <Item label='نام' value={firstName} />
            <Item label='نام خانوادگی' value={lastName} />
          </Grid>
          <Grid columns={'3'}>
            <Item label='کدملی' value={nationalId} />
            <Item label='نام پدر' value={fatherName} />
            <Item label='تاریخ تولد' value={birthDate} />
          </Grid>
        </Flex>
        <Flex direction={'column'} gap={'2'}>
          <Button size={'3'}>ویرایش اطلاعات</Button>
          <Button size={'3'} variant='outline'>
            غیر فعال سازی
          </Button>
        </Flex>
      </Grid>
      <Grid columns={'3'} gapY={'1'}>
        <Item label='ایمیل شخصی' value={personalEmail} />
        <Item label='شماره تماس' value={mobile} />
        <Item label='ایمیل سازمانی' value={orgEmail} />
        <Item label='تاریخ ساخت اکانت' value={accountCreatedAt} />
        <Item label='سازنده حساب' value={accountOwner} />
        <Item label='آخرین بازدید' value={lastSeen} />
      </Grid>
      <Grid columns={'2'}>
        <Item label='شماره حساب' value={bankAccountNumber} />
        <Item label='آدرس منزل' value={address} />
      </Grid>
    </Box>
  );
};

export default EmployDetail;

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
