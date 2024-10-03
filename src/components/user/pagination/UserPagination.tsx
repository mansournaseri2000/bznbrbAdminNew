import React from 'react';

import AppFlex from '@/libs/primitives/layout/Flex';
import AppHeading from '@/libs/primitives/typography/Heading';

const UserPagination = () => {
  return (
    <AppFlex
      width={'100%'}
      height={'48px'}
      justify={'center'}
      align={'center'}
      style={{ border: '1px solid #D4D4D4' }}
    >
      <AppHeading>UserPagination</AppHeading>
    </AppFlex>
  );
};

export default UserPagination;
