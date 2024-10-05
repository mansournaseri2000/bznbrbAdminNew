'use client';

import React from 'react';
import 'react-responsive-pagination/themes/classic.css';

import dynamic from 'next/dynamic';

const ResponsivePagination = dynamic(
  () => import('react-responsive-pagination').then(module => module.default),
  { ssr: false }
);

const TopPointsPagination = () => {
  return <ResponsivePagination current={1} total={4} onPageChange={() => 0} />;
};

export default TopPointsPagination;
