import React from 'react';

import { Flex } from '@/libs/primitives';

import PaymentsHero from './hero/PaymentsHero';
import PaymentsList from './list/PaymentsList';
import PaymentsPagination from './pagination/PaymentsPagination';

const Payments = () => {
  return (
    <Flex width={'100'} direction={'column'} gap={'4'} px={'4'}>
      <PaymentsHero />
      <PaymentsList />
      <PaymentsPagination />
    </Flex>
  );
};

export default Payments;
