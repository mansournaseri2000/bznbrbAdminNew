import React from 'react';

import { Flex } from '@radix-ui/themes';

import { Button, Text } from '@/libs/primitives';

type ReceiptInfoProps = {
  start: string;
  end: string;
  date: string;
  time: string;
  gateWay: string;
  payableAmount: string;
  paidAmount: string;
  status: boolean;
  trackingNumber: number;
};

const ReceiptInfo = (props: ReceiptInfoProps) => {
  const { date, time, gateWay, payableAmount, paidAmount, status, trackingNumber, start, end } = props;
  return (
    <Flex direction={'column'} style={{ width: '100%', maxWidth: 640 }}>
      <Flex direction={'column'} p={'4'} gap={'4'} style={{ border: '1px solid #6A6A6A', borderRadius: '0px 0px 16px 16px' }}>
        <Flex width={'100%'} justify={'between'} align={'end'} py={'4'}>
          <Text as='label'>مشخصات بلیط</Text>
          <Button size={'3'}>مشاهده بلیط</Button>
        </Flex>
        <Flex width={'100%'} justify={'between'} align={'center'} py={'4'}>
          <Text as='label'>{start}</Text>
          <Text as='label'>{end}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>تاریخ پرداخت</Text>
          <Text as='p'>{date}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>ساعت پرداخت</Text>
          <Text as='p'>{time}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>درگاه</Text>
          <Text as='p'>{gateWay}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>مبلغ قابل پرداخت</Text>
          <Text as='p'>{payableAmount}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>مبلغ پرداخت شده</Text>
          <Text as='p'>{paidAmount}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'4'}>
          <Text as='label'>وضعیت پرداخت</Text>
          <Text as='p'>{status}</Text>
        </Flex>
      </Flex>
      <Flex width={'100%'} justify={'between'} p={'4'} style={{ border: '1px solid #6A6A6A', borderRadius: 16 }}>
        <Flex gap={'4'}>
          <Text as='label'>شماره پیگیری</Text>
          <Text as='p'>{trackingNumber}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ReceiptInfo;
