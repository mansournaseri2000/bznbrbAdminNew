import { ReactNode } from 'react';

import { Flex } from '@/libs/primitives';

// import Menu from './Menu';
import Sidebar from './Sidebar';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>header</header>
      <main>
        <Sidebar />
        <Flex p={'5'}>{children}</Flex>
        {/* <Flex>
          <Flex width={'30%'} style={{ border: '1px solid red' }}>
          </Flex>
          <Flex width={'70%'} style={{ border: '1px solid red' }}>
          </Flex>
        </Flex> */}
      </main>
    </>
  );
};

export default RootLayout;
