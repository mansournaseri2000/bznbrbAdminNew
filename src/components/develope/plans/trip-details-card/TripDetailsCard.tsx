import React from 'react';

import AppFlex from '@/libs/primitives/layout/Flex';
import AppText from '@/libs/primitives/typography/Text';

type TripDetailsCardProps = {
  fromCity: string;
  toCity: string;
  travelDuration: string;
  departureTime: string;
  arrivalTime: string;
  passengers: number;
  type: 'رفت' | 'برگشت';
};

const TripDetailsCard = (props: TripDetailsCardProps) => {
  const { fromCity, travelDuration, toCity, departureTime, arrivalTime, passengers, type } = props;
  return (
    <AppFlex
      direction={'column'}
      gap={'2'}
      p={'4'}
      style={{ width: '100%', maxWidth: 640, border: ' 1px solid #6a6a6a', borderRadius: '1rem' }}
    >
      <AppFlex width={'100%'} justify={'between'} align={'center'}>
        <AppText as='p'>{fromCity}</AppText>
        {/* TODO: Icon */}
        <AppText as='p'>{toCity}</AppText>
      </AppFlex>
      <AppFlex
        width={'100%'}
        justify={'between'}
        pb={'2'}
        align={'center'}
        style={{ borderBottom: '1px solid #D4D4D4' }}
      >
        <AppText as='p'>{departureTime}</AppText>
        <AppText as='p'>{travelDuration}</AppText>
        <AppText as='p'>{arrivalTime}</AppText>
      </AppFlex>
      <AppFlex width={'100%'} justify={'between'} align={'center'}>
        <AppText as='p'>برای {passengers} نفر</AppText>
        <AppText as='p'>{type}</AppText>
      </AppFlex>
    </AppFlex>
  );
};

export default TripDetailsCard;
