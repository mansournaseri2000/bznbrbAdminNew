import React from 'react';

import { Button } from '@radix-ui/themes';

import Residence from '@/components/develope/plans/residence/Residence';
import TripDetailsCard from '@/components/develope/plans/trip-details-card/TripDetailsCard';
import UserInfoCard from '@/components/develope/plans/user-info-card/UserInfoCard';
import { Box, Flex, Heading, IconButton } from '@/libs/primitives';

const PlaneDetail = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} p={'5'}>
      <Flex width={'100%'} justify={'between'}>
        <Button variant='outline' size={'3'} style={{ width: '47.5%' }}>
          برنامه سفر
        </Button>
        <Button variant='outline' size={'3'} style={{ width: '47.5%' }}>
          نقشه سفر
        </Button>
        <IconButton size={'3'} variant='outline'>
          ...
        </IconButton>
      </Flex>
      <Flex width={'100%'} height={'56px'} justify={'center'} align={'center'} style={{ border: '1px solid #D4D4D4' }}>
        day picker
      </Flex>
      <Flex width={'100%'} gap={'5'}>
        <UserInfoCard profileImg='' name='بزنیم بیرون' createdBy='نام پرسنل' date='1 فروردین 1403' />
        <Flex width={'100%'} direction={'column'} gap={'4'}>
          <Flex direction={'column'} gap={'14px'}>
            <Heading>وسیله سفر</Heading>
            <TripDetailsCard arrivalTime='8 عصر' departureTime='8 صبح' fromCity='تهران' passengers={8} toCity='مشهد' travelDuration='12 ساعت پرواز' type='رفت' />
            <TripDetailsCard arrivalTime='8 عصر' departureTime='8 صبح' fromCity='تهران' passengers={8} toCity='مشهد' travelDuration='12 ساعت پرواز' type='رفت' />
          </Flex>
          <Flex direction={'column'} gap={'14px'}>
            <Heading>رزرو محل اقامت</Heading>
            <Residence PassengerNumbers={8} RoomsNumbers={2} cost={2220000} deliveryDate='تحویل 25 فروردین' name='هتل آسیا' />
          </Flex>
          <Box height={'678px'} style={{ border: '1px solid #D4D4D4', lineHeight: 50, textAlign: 'center' }}>
            card
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PlaneDetail;
