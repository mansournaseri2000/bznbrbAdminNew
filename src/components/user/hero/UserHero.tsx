import React from 'react';

import AppFlex from '@/libs/primitives/layout/Flex';
import AppHeading from '@/libs/primitives/typography/Heading';

const UserHero = () => {
  return (
    <AppFlex
      width={'100%'}
      height={'50px'}
      justify={'center'}
      align={'center'}
      style={{ border: '1px solid #D4D4D4' }}
    >
      <AppHeading>User Hero</AppHeading>
    </AppFlex>
  );
};

export default UserHero;
