import React from 'react';

import { Flex } from '@radix-ui/themes';
import styled from 'styled-components';

import { Text } from '@/libs/primitives';

type ResidenceProps = {
  name: string;
  RoomsNumbers: number;
  PassengerNumbers: number;
  //   logo
  cost: number;
  deliveryDate: string;
};
const Residence = (props: ResidenceProps) => {
  const { name, RoomsNumbers, PassengerNumbers, cost, deliveryDate } = props;
  return (
    <CardWrapper direction={'column'} px={'4'} py={'2'} gap={'2'}>
      <Flex width={'100%'} justify={'between'} align={'center'}>
        <Text as='p'>{name}</Text>
        {/* TODO: LOGO */}
      </Flex>
      <Flex gap={'4'}>
        <ItemWrapper width={'50%'} justify={'between'}>
          <Text as='label'>تعداد اتاق</Text>
          <Text as='p'>{RoomsNumbers}</Text>
        </ItemWrapper>
        <ItemWrapper width={'50%'} justify={'between'}>
          <Text as='label'>تعداد نفرات</Text>
          <Text as='p'>{PassengerNumbers}</Text>
        </ItemWrapper>
      </Flex>
      <ItemWrapper width={'100%'} justify={'between'}>
        <Text as='label'>هزینه</Text>
        <Text as='p'>{cost}</Text>
      </ItemWrapper>
      <Flex justify={'center'} style={{ borderTop: '1px solid #D4D4D4' }}>
        <Text as='p'>{deliveryDate}</Text>
      </Flex>
    </CardWrapper>
  );
};

export default Residence;

const CardWrapper = styled(Flex)`
  width: 100%;
  max-width: 640px;
  border: 1px solid #6a6a6a;
  border-radius: 8px;
`;

const ItemWrapper = styled(Flex)`
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  padding: 4px 8px;
`;
