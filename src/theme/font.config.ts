import localFont from 'next/font/local';

export const Yekan = localFont({
  src: [
    {
      path: '../../public/fonts/IRANYekanX-Thin.woff2',
      weight: '300',
    },
    {
      path: '../../public/fonts/IRANYekanX-Regular.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/IRANYekanX-Medium.woff2',
      weight: '600',
    },
    {
      path: '../../public/fonts/IRANYekanX-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/IRANYekanX-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: '../../public/fonts/IRANYekanX-Heavy.woff2',
      weight: '900',
    },
    {
      path: '../../public/fonts/IRANYekanXVFaNumVF.woff2',
      weight: '400',
    },
  ],
  variable: '--yekan-font',
});
