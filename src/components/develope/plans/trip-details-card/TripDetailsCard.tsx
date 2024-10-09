import React from 'react';

import { Flex, Text } from '@/libs/primitives';

type TripDetailsCardProps = {
  fromCity: string;
  toCity: string;
  travelDuration: string;
  departureTime: string;
  arrivalTime: string;
  passengers: number;
  type: 'رفت' | 'برگشت';
};

const TripDetailsCard: React.FC<TripDetailsCardProps> = (props: TripDetailsCardProps) => {
  const { fromCity, travelDuration, toCity, departureTime, arrivalTime, passengers, type } = props;
  return (
    <Flex direction={'column'} width={'100%'} gap={'2'} p={'4'} style={{ border: ' 1px solid #6a6a6a', borderRadius: 8 }}>
      <Flex width={'100%'} justify={'between'} align={'center'}>
        <Text as='p'>{fromCity}</Text>
        {/* TODO: Icon */}
        <Text as='p'>{toCity}</Text>
      </Flex>
      <Flex width={'100%'} justify={'between'} pb={'2'} align={'center'} style={{ borderBottom: '1px solid #D4D4D4' }}>
        <Text as='p'>{departureTime}</Text>
        <Text as='p'>{travelDuration}</Text>
        <Text as='p'>{arrivalTime}</Text>
      </Flex>
      <Flex width={'100%'} justify={'between'} align={'center'}>
        <Text as='p'>برای {passengers} نفر</Text>
        <Text as='p'>{type}</Text>
      </Flex>
    </Flex>
  );
};

export default TripDetailsCard;
