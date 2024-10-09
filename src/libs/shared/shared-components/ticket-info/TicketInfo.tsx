import React from 'react';

import Image from 'next/image';

import { Box, Flex } from '@radix-ui/themes';

import { Heading, Text } from '@/libs/primitives';
import AppButton from '@/libs/primitives/components/Button';

type PassengersListType = {
  userName: string;
  ticketNumber: number;
}[];

type TicketInfoProps = {
  startPointTime: string;
  endPointTime: string;
  startPointCity: string;
  endPointCity: string;
  startPointDay: string;
  endPointDay: string;
  startPointDate: string;
  endPointDate: string;
  PassengersList: PassengersListType;
  ticketUrl: string;
  ticketQRCode: string;
};

const TicketInfo = (props: TicketInfoProps) => {
  const {
    startPointTime,
    endPointTime,
    startPointCity,
    endPointCity,
    startPointDay,
    endPointDay,
    startPointDate,
    endPointDate,
    PassengersList,
    ticketUrl,
    ticketQRCode,
  } = props;
  return (
    <Box style={{ width: '100%', maxWidth: 640 }}>
      <Flex
        direction={'column'}
        p={'4'}
        gap={'2'}
        style={{ border: '1px solid #D4D4D4', borderRadius: '0px 0px 16px 16px' }}
      >
        <Flex
          width={'100%'}
          justify={'between'}
          align={'center'}
          pb={'4'}
          style={{ borderBottom: '1px solid #D4D4D4' }}
        >
          <Text as='label'>{startPointTime}</Text>
          <Text as='label'>{endPointTime}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>{startPointCity}</Text>
          <Text as='label'>{endPointCity}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} py={'2'} style={{ borderBottom: '1px solid #D4D4D4' }}>
          <Text as='label'>{startPointDay}</Text>
          <Text as='label'>{endPointDay}</Text>
        </Flex>
        <Flex width={'100%'} justify={'between'} pt={'2'}>
          <Text as='label'>{startPointDate}</Text>
          <Text as='label'>{endPointDate}</Text>
        </Flex>
      </Flex>
      <Flex direction={'column'} p={'4'} gap={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 16 }}>
        <Heading>لیست مسافران</Heading>
        <Box>
          {PassengersList.map((item, index) => (
            <Flex
              key={index}
              width={'100%'}
              justify={'between'}
              align={'center'}
              py={'4'}
              style={{ borderBottom: '1px solid #D4D4D4' }}
            >
              <Text as='label'>{item.userName}</Text>
              <Text as='label'>{item.ticketNumber}</Text>
            </Flex>
          ))}
        </Box>
        <Flex width={'100%'} justify={'center'} gap={'2'} py={'3'}>
          <AppButton size={'3'} style={{ width: '50%' }}>
            مشاهده بلیط
          </AppButton>
          <AppButton size={'3'} style={{ width: '50%' }}>
            رسید پرداختی
          </AppButton>
        </Flex>
      </Flex>
      <Flex
        direction={'column'}
        align={'center'}
        p={'4'}
        gap={'3'}
        style={{ border: '1px solid #D4D4D4', borderRadius: '16px 16px 0px 0px' }}
      >
        <Flex
          width={'100%'}
          justify={'between'}
          align={'center'}
          py={'4'}
          px={'3'}
          style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}
        >
          <Text as='label'>{ticketUrl}</Text>
        </Flex>
        <Box style={{ width: 160, height: 160, position: 'relative' }}>
          <Image src={ticketQRCode} alt='' fill />
        </Box>
      </Flex>
    </Box>
  );
};

export default TicketInfo;
