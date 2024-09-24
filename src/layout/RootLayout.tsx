import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main style={{ paddingBlock: '24px' }}>{children}</main>
    </>
  );
};

export default RootLayout;
