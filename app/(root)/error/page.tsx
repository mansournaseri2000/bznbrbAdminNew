'use client';

import { Button, Flex, Heading } from '@/libs/primitives';

export default function Error() {
  return (
    <Flex height={'100vh'} align={'center'} justify={'center'}>
      <Flex direction={'column'}>
        <Heading size={'2'}>Something went wrong!</Heading>
        <Button size={'4'} variant='soft'>
          Try again
        </Button>
      </Flex>
    </Flex>
  );
}
