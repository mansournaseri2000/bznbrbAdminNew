import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <DesktopHeader />
      <MobileHeader /> */}
      <main>{children}</main>
      {/* <BottomNavigation />
      <Footer /> */}
    </>
  );
};

export default RootLayout;
