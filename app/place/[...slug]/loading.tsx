import { Spinner } from '@radix-ui/themes';

import { Flex } from '@/libs/primitives';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Flex justify={'center'} align={'center'} minHeight={'100vh'}>
      <Spinner style={{ scale: 5 }} />
    </Flex>
  );
}
