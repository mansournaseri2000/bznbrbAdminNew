'use client';

import React from 'react';

import { ColumnDef } from '@tanstack/react-table';

import { Button, Flex, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';

import TableData from './data.json';

interface PointsListDetail {
  pointName: string;
  state: string;
  city: string;
  category: string;
  status: 'ناقص' | 'غیر ناقص';
}

const PointsList = () => {
  const columns: ColumnDef<PointsListDetail>[] = [
    {
      accessorKey: 'pointName',
      header: 'نام نقطه',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'state',
      header: 'استان',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'city',
      header: 'شهر',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'category',
      header: 'دسته بندی',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'status',
      header: 'وضعیت اطلاعات',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text style={{ display: 'flex', width: 'fit-content', alignItems: 'center', padding: '4px 8px', backgroundColor: value === 'ناقص' ? '#6A6A6A' : '#D4D4D4', borderRadius: 4 }}>
            {value ? value : '-'}
          </Text>
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

export default PointsList;
