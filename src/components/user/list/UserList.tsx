import React from 'react';

import AppFlex from '@/libs/primitives/layout/Flex';
import AppHeading from '@/libs/primitives/typography/Heading';

const UserList = () => {
  return (
    <AppFlex
      width={'100%'}
      height={'528px'}
      justify={'center'}
      align={'center'}
      style={{ border: '1px solid #D4D4D4' }}
    >
      <AppHeading>User List</AppHeading>
    </AppFlex>
  );
};

export default UserList;
