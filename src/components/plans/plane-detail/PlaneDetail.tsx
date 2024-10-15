'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button } from '@radix-ui/themes';

import Residence from '@/components/develope/plans/residence/Residence';
import TripDetailsCard from '@/components/develope/plans/trip-details-card/TripDetailsCard';
import UserInfoCard from '@/components/develope/plans/user-info-card/UserInfoCard';
import { optionMenuConstant } from '@/constants/plans';
import { Box, Flex, Heading, SelectItem, SelectRoot } from '@/libs/primitives';

const PlaneDetail = () => {
  const methods = useForm({
    defaultValues: { createdPlan: '' },
  });

  const { control } = methods;
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} p={'5'}>
      <Flex width={'100%'} justify={'center'} align={'center'} gap={'10px'}>
        <Button variant='outline' size={'3'} style={{ width: '45.5%' }}>
          برنامه سفر
        </Button>
        <Button variant='outline' size={'3'} style={{ width: '45.5%' }}>
          نقشه سفر
        </Button>
        <Controller
          name='createdPlan'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
              }}
              placeholder='...'
            >
              {optionMenuConstant.map(item => (
                <SelectItem key={item.id} value={String(item.id)}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectRoot>
          )}
        />
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
