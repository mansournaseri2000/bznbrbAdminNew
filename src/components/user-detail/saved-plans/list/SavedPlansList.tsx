'use client';

import React from 'react';

import { ColumnDef } from '@tanstack/react-table';

import { Button, Flex, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';

import TableData from './data.json';

type TicketType = 'هتل' | 'هواپیما' | 'ویلا' | 'قطار' | 'اتوبوس' | 'کلبه';

interface SavedPlansListDetail {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  ticketType: TicketType[];
}

const SavedPlansList = () => {
  const columns: ColumnDef<SavedPlansListDetail>[] = [
    {
      accessorKey: 'origin',
      header: 'مبدا',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'destination',
      header: 'مقصد',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'departureDate',
      header: 'تاریخ رفت',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'returnDate',
      header: 'مبدا',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'returnDate',
      header: 'مبدا',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'ticketType',
      header: 'بلیط ها',
      cell: ({ row }) => {
        const item = row.original;
        return (
          <Flex gap={'10px'} align={'center'} justify={'center'}>
            {item.ticketType.map((data, index) => (
              <Text
                key={index}
                style={{
                  borderRadius: 4,
                  padding: '4px 8px',
                  backgroundColor: '#D4D4D4',
                }}
              >
                {data}
              </Text>
            ))}
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

export default SavedPlansList;
