'use client';

import React from 'react';

import styled from 'styled-components';

import { Flex, Text } from '@/libs/primitives';

type ResidenceProps = {
  name: string;
  RoomsNumbers: number;
  PassengerNumbers: number;
  //   logo
  cost: number;
  deliveryDate: string;
};
const Residence: React.FC<ResidenceProps> = (props: ResidenceProps) => {
  const { name, RoomsNumbers, PassengerNumbers, cost, deliveryDate } = props;
  return (
    <Flex direction={'column'} width={'100%'} px={'4'} py={'2'} gap={'2'} style={{ border: '1px solid #6a6a6a', borderRadius: 8 }}>
      <Flex width={'100%'} justify={'between'} align={'center'}>
        <Text as='p'>{name}</Text>
        {/* TODO: LOGO */}
      </Flex>
      <Flex gap={'4'}>
        <InfoBox label='تعداد اتاق' value={RoomsNumbers} />
        <InfoBox label='تعداد نفرات' value={PassengerNumbers} />
      </Flex>
      <InfoBox label='هزینه' value={cost} fullWidth />
      <Flex justify={'center'} mt={'1'} style={{ borderTop: '1px solid #D4D4D4' }}>
        <Text as='p'>{deliveryDate}</Text>
      </Flex>
    </Flex>
  );
};

const InfoBox = ({ label, value, fullWidth = false }: { label: string; value: string | number; fullWidth?: boolean }) => (
  <InfoBoxContainer fullWidth={fullWidth}>
    <Text as='label'>{label}</Text>
    <Text as='p'>{value}</Text>
  </InfoBoxContainer>
);

const InfoBoxContainer = styled(Flex)<{ fullWidth: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '50%')};
  justify-content: space-between;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  padding: 4px 8px;
`;

export default Residence;
