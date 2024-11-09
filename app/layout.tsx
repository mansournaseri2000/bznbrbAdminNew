import { Suspense } from 'react';

import type { Metadata } from 'next';

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { AuthProvider, ReactQueryProvider, StyledComponentsRegistry } from '@/libs/providers';
import Toast from '@/libs/shared/toast/Toast';
import { Yekan } from '@/theme/font.config';
import '@/theme/globals.css';
import '@/theme/theme.config.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={Yekan.variable} lang='fa' dir='rtl'>
      <body>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <Theme radius='large' scaling='100%'>
              <Suspense>
                <AuthProvider >{children}</AuthProvider>
              </Suspense>
            </Theme>
            <Toast />
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
