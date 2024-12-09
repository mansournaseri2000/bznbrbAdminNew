'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { ColumnDef } from '@tanstack/react-table';

import { Button, Flex, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import TableData from './data.json';

interface UserProfileListDetail {
  sourceCityName: string;
  destinationCity: string;
  createAt: string;
  departureDate: string;
  returnDate: string;
}

const UserProfileList = () => {
  const router = useRouter();

  const columns: ColumnDef<UserProfileListDetail>[] = [
    {
      accessorKey: 'index',
      header: 'ردیف',
      cell: info => (
        <Text {...typoVariant.body2} style={{ display: 'flex', height: '100%', alignItems: 'center', color: colorPalette.gray[11] }}>
          {info.row.index + 1}
        </Text>
      ),
    },
    {
      accessorKey: 'sourceCityName',
      header: 'مبدا',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text {...typoVariant.body2} style={{ display: 'flex', height: '100%', alignItems: 'center', color: colorPalette.gray[11] }}>
            {value ? value : '-'}
          </Text>
        );
      },
    },
    {
      accessorKey: 'destinationCity',
      header: 'مقصد',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text {...typoVariant.body2} style={{ display: 'flex', height: '100%', alignItems: 'center', color: colorPalette.gray[11] }}>
            {value ? value : '-'}
          </Text>
        );
      },
    },
    {
      accessorKey: 'createAt',
      header: 'تاریخ ساخت برنامه',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text {...typoVariant.body2} style={{ display: 'flex', height: '100%', alignItems: 'center', color: colorPalette.gray[11] }}>
            {value ? value : '-'}
          </Text>
        );
      },
    },
    {
      accessorKey: 'departureDate',
      header: 'تاریخ رفت',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text {...typoVariant.body2} style={{ display: 'flex', height: '100%', alignItems: 'center', color: colorPalette.gray[11] }}>
            {value ? value : '-'}
          </Text>
        );
      },
    },
    {
      accessorKey: 'returnDate',
      header: 'تاریخ بازگشت',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text {...typoVariant.body2} style={{ display: 'flex', height: '100%', alignItems: 'center', color: colorPalette.gray[11] }}>
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
          //   TODO: fix link as a dynamic by using id
          router.push('/plans/user-plan');
        };
        return (
          <Flex width={'100%'} height={'100%'} align={'center'} justify={'center'}>
            <Button variant='surface' onClick={handleClick}>
              ...
            </Button>
          </Flex>
        );
      },
    },
  ];

  return <Table columns={columns as any} data={TableData as any} />;
};

export default UserProfileList;
