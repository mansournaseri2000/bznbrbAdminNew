import React from 'react';

import { SegmentedControl } from '@radix-ui/themes';

import { Button, Flex, Heading, TextField } from '@/libs/primitives';

const PlaneForm = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} p={'5'}>
      <Flex width={'100%'} direction={'column'} gap={'2'}>
        <Heading>آدرس مبدا</Heading>
        <Flex width={'100%'} gap={'4'}>
          <TextField placeholder=' استان' />
          <TextField placeholder='شهر' />
        </Flex>
      </Flex>
      <Flex width={'100%'} direction={'column'} gap={'2'}>
        <Heading>آدرس مقصد</Heading>
        <Flex width={'100%'} gap={'4'}>
          <TextField placeholder='استان' />
          <TextField placeholder='شهر' />
        </Flex>
      </Flex>
      <Flex width={'100%'} gap={'4'}>
        <Flex width={'50%'} direction={'column'} gap={'2'}>
          <Heading>تاریخ و ساعت حرکت</Heading>
          <Flex width={'100%'} gap={'4'}>
            <TextField placeholder='تاریخ' />
            <TextField placeholder='عنوان' />
          </Flex>
        </Flex>
        <Flex width={'50%'} direction={'column'} gap={'2'}>
          <Heading>تاریخ و ساعت بازگشت</Heading>
          <Flex width={'100%'} gap={'4'}>
            <TextField placeholder='تاریخ' />
            <TextField placeholder='عنوان' />
          </Flex>
        </Flex>
      </Flex>
      <Flex width={'100%'} direction={'column'} gap={'2'}>
        <Heading>وسیله و اسکان</Heading>
        <Flex width={'100%'} gap={'4'}>
          <TextField placeholder='وسیله سفر' />
          <TextField placeholder='محل اسکان' />
        </Flex>
      </Flex>
      <Flex width={'100%'} direction={'column'} gap={'2'}>
        <Heading>وسیله و اسکان</Heading>
        <Flex width={'100%'} gap={'4'}>
          <TextField placeholder='وسیله سفر' />
          <SegmentedControl.Root size={'3'} style={{ width: '100%' }}>
            <SegmentedControl.Item value='پربازدید'>پربازدید</SegmentedControl.Item>
            <SegmentedControl.Item value='معمولی'>معمولی</SegmentedControl.Item>
            <SegmentedControl.Item value='بکر و ناشناختع'>بکر و ناشناختع</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Flex>
      </Flex>
      <Flex width={'100%'} gap={'4'}>
        <Flex width={'50%'} direction={'column'} gap={'2'}>
          <Heading>مسافران</Heading>
          <Flex width={'100%'} gap={'4'}>
            <TextField placeholder='تعداد مسافرین بزرگسال' />
            <TextField placeholder='تعداد مسافرین کودک' />
          </Flex>
        </Flex>
        <Flex width={'50%'} direction={'column'} gap={'2'} mt={'6'}>
          <Flex width={'100%'} gap={'4'}>
            <TextField placeholder='تعداد مسافرین خردسال' />
            <TextField placeholder='نوع مسافران' />
          </Flex>
        </Flex>
      </Flex>
      <Flex gap={'4'}>
        <Button size={'3'}>ثبت و ساخت</Button>
        <Button size={'3'}>لغو و بازگشت</Button>
      </Flex>
    </Flex>
  );
};

export default PlaneForm;
