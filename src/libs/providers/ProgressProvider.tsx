'use client';

import React from 'react';

import { AppProgressProvider as ProgressBar } from '@bprogress/next';

import { colorPalette } from '@/theme';

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar height='5px' color={colorPalette.blue[11]} options={{ showSpinner: false }} shallowRouting />
      {children}
    </>
  );
};

export default ProgressProvider;
