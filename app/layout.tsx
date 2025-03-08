import { Suspense } from 'react';

import type { Metadata } from 'next';

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { AuthProvider, ReactQueryProvider, StyledComponentsRegistry } from '@/libs/providers';
import ProgressProvider from '@/libs/providers/ProgressProvider';
import Toast from '@/libs/shared/toast/Toast';
import { Yekan } from '@/theme/font.config';
import '@/theme/globals.css';
import '@/theme/theme.config.css';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'پنل بزنیم بیرون',
  description:
    'بزنیم بیرون، سامانه‌ای جامع و مکان‌محور است که با ارائه اطلاعات کامل گردشگری، تاریخ گردی، طبیعت گردی، گردشگری مذهبی و مراکز تفریحی در ایران، به شما کمک می‌کند تا مقصدهای هیجان‌انگیز و مناسب برای هر سلیقه‌ای را پیدا کنید.',
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
                <AuthProvider>
                  <ProgressProvider>{children}</ProgressProvider>
                </AuthProvider>
              </Suspense>
            </Theme>

            <Toast />
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
