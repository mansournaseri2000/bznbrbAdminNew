import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <DesktopHeader />
      <MobileHeader /> */}
      <main style={{ paddingBlock: '24px' }}>{children}</main>
      {/* <BottomNavigation />
      <Footer /> */}
    </>
  );
};

export default RootLayout;
