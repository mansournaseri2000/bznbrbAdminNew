import React from 'react';

import AccessDetail from '@/components/develope/teams-and-employers/access-detail/AccessDetail';
import EmployDetail from '@/components/develope/teams-and-employers/employ-detail/EmployDetail';
import { Flex, Grid, Heading, TextField } from '@/libs/primitives';

const badge = ['حذف کاربر', 'مشاهده لیست پرداختی ها', 'مشاهده لیست پرداختی ها', 'ثبت کاربر'];

export default function EmployeeInfo() {
  return (
    <Flex width={'100%'} direction={'column'} gap={'40px'} p={'5'}>
      <EmployDetail
        accountCreatedAt='01 فروردین 1403'
        accountOwner='حامد احمدی'
        address='تهران- خیابان ولیعصر- میدان ولیعصر- بلوار کشاورز- خیابان فلسطین- سرای خلاق- طبقه چهار- دفتر بامداد فصل رویش'
        bankAccountNumber='IR 120 1548 7000 0002 1234 43021'
        birthDate='1379/01/24'
        fatherName='میثم'
        firstName='پویان'
        lastName='احمدی'
        lastSeen='15:35 - 01 فروردین 1403 '
        mobile='091212345678'
        nationalId='00112345678'
        orgEmail='long.example.123@BznmBrn.ir'
        personalEmail='long.example.123@gmail.com'
        profileImg=''
      />
      <Flex width={'100%'} direction={'column'} gap={'4'}>
        <Heading>تیم ها و دسترسی ها</Heading>
        <Grid width={'100%'} columns={'2'} gapX={'5'} gapY={'4'}>
          <AccessDetail backButton badge={badge} title='مدیریت کاربران' />
          <AccessDetail backButton badge={badge} title='مدیریت کاربران' />
          <AccessDetail backButton badge={badge} title='مدیریت کاربران' />
        </Grid>
      </Flex>
      <Flex direction={'column'} gap={'4'}>
        <Heading style={{ borderBottom: '1px solid #D4D4D4', paddingBottom: 4 }}>لیست عملیات ها</Heading>
        <Grid width={'100%'} columns={'4'} gapX={'4'} style={{ gridTemplateColumns: '2fr 0.5fr 0.5fr 1fr' }}>
          <TextField placeholder='جستجوی عنوان' />
          <Flex justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
            از تاریخ
          </Flex>
          <Flex justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
            تا تاریخ
          </Flex>
          <Flex justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4', borderRadius: 8 }}>
            مرتب سازی بر اساس
          </Flex>
        </Grid>
        <Flex width={'100%'} height={'460px'} align={'center'} justify={'center'} style={{ border: '1px solid' }}>
          Table
        </Flex>
      </Flex>
    </Flex>
  );
}
