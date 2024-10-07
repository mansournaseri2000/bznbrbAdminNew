import { ReactNode } from 'react';

import { Flex } from '@/libs/primitives';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header style={{ border: '1px solid red', padding: '16px' }}>header</header>
      <main>
        <Flex style={{ border: '1px solid blue' }}>
          <Flex width={'30%'} style={{ border: '1px solid red' }}>
            menu
          </Flex>
          <Flex width={'70%'} style={{ border: '1px solid red' }}>
            {children}
          </Flex>
        </Flex>
      </main>
    </>
  );
};

export default RootLayout;
