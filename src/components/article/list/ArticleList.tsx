'use client';

import React from 'react';

import { ColumnDef } from '@tanstack/react-table';

import { Button, Flex, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';

import TableData from './data.json';

interface ArticleListDetail {
  title: string;
  category: string;
  publishDate: string;
}

const ArticleList = () => {
  const columns: ColumnDef<ArticleListDetail>[] = [
    {
      accessorKey: 'title',
      header: 'عنوان مقاله',
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
      accessorKey: 'publishDate',
      header: 'تاریخ نشر',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
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

export default ArticleList;
