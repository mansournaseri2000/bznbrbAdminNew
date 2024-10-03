'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { UserDetailTabs } from '@/constants/user-detail';
import { Button, Flex } from '@/libs/primitives';

const UserDetailHero = () => {
  const router = useRouter();

  return (
    <Flex
      width={'100%'}
      direction={'column'}
      gap={'4'}
      pb={'2'}
      style={{ borderBottom: '1px solid #D4D4D4' }}
    >
      <Flex width={'100%'} gap={'4'}>
        {UserDetailTabs.map((item, index) => (
          <Button key={index} size={'3'} variant='outline' onClick={() => router.push(item.path)}>
            {item.label}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default UserDetailHero;
