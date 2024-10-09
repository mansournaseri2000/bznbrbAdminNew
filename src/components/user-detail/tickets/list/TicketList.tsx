'use client';

import React from 'react';

import { ColumnDef } from '@tanstack/react-table';

import { Button, Flex, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';

import TableData from './data.json';

interface TicketListDetail {
  type: string;
  paymentDate: string;
  paymentAmount: string;
  status: 'فعال' | 'غیرفعال';
}

const TicketList = () => {
  const columns: ColumnDef<TicketListDetail>[] = [
    {
      accessorKey: 'type',
      header: 'نوع',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'paymentDate',
      header: 'تاریخ پرداخت',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'paymentAmount',
      header: 'مبلغ پرداخت',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'status',
      header: 'وضعیت',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Flex width={'100%'} height={'100%'} justify={'center'} align={'center'}>
            <Text
              style={{
                padding: '4px 8px',
                borderRadius: 4,
                backgroundColor: value === 'فعال' ? '#D4D4D4' : '#6A6A6A',
              }}
            >
              {value ? value : '-'}
            </Text>
          </Flex>
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

export default TicketList;