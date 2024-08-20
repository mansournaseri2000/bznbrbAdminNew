import { Suspense } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { ReactQueryProvider, StyledComponentsRegistry } from '@/libs/providers';
import '@/theme/globals.css';
import '@/theme/theme.config.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa' dir='rtl'>
      <body className={inter.className}>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <Theme accentColor='amber' grayColor='gray' radius='large' scaling='100%'>
              <Suspense>{children}</Suspense>
            </Theme>
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
