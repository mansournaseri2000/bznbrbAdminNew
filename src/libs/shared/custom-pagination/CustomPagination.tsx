'use client';

import React from 'react';
import 'react-responsive-pagination/themes/classic.css';

import dynamic from 'next/dynamic';

import { Flex } from '@/libs/primitives';
import { BlueTriangleLeft, BlueTriangleRight } from '@/public/icon';

import './pagination.css';

const ResponsivePagination = dynamic(() => import('react-responsive-pagination').then(module => module.default), { ssr: false });

type CustomPaginationProps = {
  current: number;
  total: number;
  onPageChange?: (page: number) => void;
} & React.ComponentProps<typeof ResponsivePagination>;

const CustomPagination = ({ current, total, onPageChange, ...rest }: CustomPaginationProps) => {
  return (
    <Flex align={'center'}>
      <ResponsivePagination current={current} total={total} onPageChange={onPageChange} {...rest} className='pagination' previousLabel={<BlueTriangleRight />} nextLabel={<BlueTriangleLeft />} />
    </Flex>
  );
};

export default CustomPagination;
