import { Spinner } from '@radix-ui/themes';

import { Flex } from '@/libs/primitives';

export default function Loading() {
  return (
    <Flex justify={'center'} align={'center'} minHeight={'100vh'}>
      <Spinner style={{ scale: 5, marginBlockStart: 100 }} />
    </Flex>
  );
}
