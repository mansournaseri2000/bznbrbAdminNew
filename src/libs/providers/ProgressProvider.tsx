'use client';

import React from 'react';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import { colorPalette } from '@/theme';

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar height='5px' color={colorPalette.blue[11]} options={{ showSpinner: false }} shallowRouting />
    </>
  );
};

export default ProgressProvider;
