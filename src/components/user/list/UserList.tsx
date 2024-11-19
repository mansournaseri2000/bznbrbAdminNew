'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import { ColumnDef } from '@tanstack/react-table';

import { Box, Button, Flex, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import TableData from './data.json';

const Table = dynamic(() => import('@/libs/shared/Table'), { ssr: false });

export interface UserListDetail {
  username: string;
  mobile: string;
  email: string;
  userStatus: 'فعال' | 'غیر فعال';
}

const UserList = () => {
  const router = useRouter();
  const columns: ColumnDef<UserListDetail>[] = [
    {
      accessorKey: 'username',
      header: 'نام و نام خانوادگی',
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
      accessorKey: 'mobile',
      header: 'شماره تماس',
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
      accessorKey: 'email',
      header: 'ایمیل',
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
      accessorKey: 'userStatus',
      header: 'نوع کاربر',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text
            {...typoVariant.body2}
            style={{
              display: 'flex',
              width: 'fit-content',
              alignItems: 'center',
              padding: '4px 8px',
              backgroundColor: value === 'غیر فعال' ? colorPalette.pink[3] : colorPalette.blue[3],
              color: value === 'غیر فعال' ? colorPalette.pink[11] : colorPalette.blue[11],
              borderRadius: 4,
            }}
          >
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
          router.push('/user/user-profile');
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
  return (
    <Box width={'100%'} style={{ overflow: 'scroll' }}>
      {/* <Heading>User List</Heading> */}
      <Table columns={columns as any} data={TableData as any} />
    </Box>
  );
};

export default UserList;
