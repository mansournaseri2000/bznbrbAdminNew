import React from 'react';

import { Flex } from '@/libs/primitives';

import TicketHero from './hero/TicketHero';
import TicketList from './list/TicketList';
import TicketsPagination from './pagination/TicketsPagination';

const Tickets = () => {
  return (
    <Flex width={'100'} direction={'column'} gap={'4'}>
      <TicketHero />
      <TicketList />
      <TicketsPagination />
    </Flex>
  );
};

export default Tickets;
