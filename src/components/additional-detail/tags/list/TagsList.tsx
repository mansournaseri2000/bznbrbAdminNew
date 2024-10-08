'use client';

import React from 'react';

import { ColumnDef } from '@tanstack/react-table';

import { Button, Flex, IconButton, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';

import TableData from './data.json';

interface TagsListDetail {
  name: string;
  status: 'فعال' | 'غیرفعال';
}

const TagsList = () => {
  const columns: ColumnDef<TagsListDetail>[] = [
    {
      accessorKey: 'name',
      header: 'نام تگ',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'status',
      header: 'وضعیت تگ',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text style={{ display: 'flex', width: 'fit-content', alignItems: 'center', padding: '4px 8px', borderRadius: 4, backgroundColor: value === 'فعال' ? '#D4D4D4' : '#6A6A6A' }}>
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
          <Flex width={'100%'} height={'100%'} align={'center'} justify={'between'}>
            <IconButton size={'3'}>icon</IconButton>
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

export default TagsList;
