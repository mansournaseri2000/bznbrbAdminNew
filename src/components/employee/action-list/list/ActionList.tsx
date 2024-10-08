'use client';

import React from 'react';

import { ColumnDef } from '@tanstack/react-table';

import { Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';

import TableData from './data.json';

interface ActionListDetail {
  action: string;
  title: string;
  date: string;
  time: string;
}

const ActionList = () => {
  const columns: ColumnDef<ActionListDetail>[] = [
    {
      accessorKey: 'action',
      header: 'عملیات',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },

    {
      accessorKey: 'title',
      header: 'عنوان',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },

    {
      accessorKey: 'date',
      header: 'تاریخ',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },

    {
      accessorKey: 'time',
      header: 'ساعت',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
  ];

  return <Table columns={columns as any} data={TableData as any} />;
};

export default ActionList;
