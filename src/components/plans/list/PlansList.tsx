'use client';

import React from 'react';

import { ColumnDef } from '@tanstack/react-table';

import { Button, Flex, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';

import TableData from './data.json';

interface PlansListDetail {
  creatorUser: string;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
}

const PlansList = () => {
  const columns: ColumnDef<PlansListDetail>[] = [
    {
      accessorKey: 'creatorUser',
      header: 'نام کاربر سازنده',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>
        );
      },
    },
    {
      accessorKey: 'origin',
      header: 'مبدا',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>
        );
      },
    },
    {
      accessorKey: 'destination',
      header: 'مقصد',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>
        );
      },
    },
    {
      accessorKey: 'departureDate',
      header: 'تاریخ رفت',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>
        );
      },
    },
    {
      accessorKey: 'returnDate',
      header: 'تاریخ بازگشت',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>
        );
      },
    },
    {
      id: 'details',
      cell: ({ row }) => {
        const item = row.original;
        const handleClick = () => {
          console.log('item', item);
        };
        return (
          <Flex width={'100%'} height={'100%'} align={'center'} justify={'center'}>
            <Button variant='ghost' onClick={handleClick}>
              ...
            </Button>
          </Flex>
        );
      },
    },
  ];
  return <Table columns={columns as any} data={TableData as any} />;
};

export default PlansList;
