'use client';

import React from 'react';

import { useRouter } from '@bprogress/next';
import { ColumnDef } from '@tanstack/react-table';

import { Button, Flex, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

interface UserProfileListDetail {
  sourceCityName: string;
  destinationCity: string;
  createAt: string;
  departureDate: string;
  returnDate: string;
  tripId: string;
}

type UserProfileListProps = {
  data: UserProfileListDetail[];
};

const UserProfileList = ({ data }: UserProfileListProps) => {
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
      accessorKey: 'createdAt',
      header: 'تاریخ ساخت برنامه',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text {...typoVariant.body2} style={{ display: 'flex', height: '100%', alignItems: 'center', color: colorPalette.gray[11] }}>
            {value ? convertTimestampToPersianDate(value) : '-'}
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
            {value ? convertTimestampToPersianDate(value) : '-'}
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
            {value ? convertTimestampToPersianDate(value) : '-'}
          </Text>
        );
      },
    },
    {
      id: 'details',
      cell: ({ row }) => {
        const item = row.original;
        const handleClick = (e: React.MouseEvent) => {
          e.preventDefault();
          router.push(`/plans/user-plan/${item.tripId}`);
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

  return <Table columns={columns as any} data={data as any} />;
};

export default UserProfileList;
