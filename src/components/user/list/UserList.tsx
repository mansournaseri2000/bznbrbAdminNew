'use client';

import React from 'react';

import dynamic from 'next/dynamic';

import { ColumnDef } from '@tanstack/react-table';

import AppButton from '@/libs/primitives/components/Button';
import AppBox from '@/libs/primitives/layout/Box';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppText from '@/libs/primitives/typography/Text';

import TableData from './data.json';

const Table = dynamic(() => import('@/libs/shared/Table'), { ssr: false });

export interface UserListDetail {
  username: string;
  mobile: string;
  email: string;
  userType: string;
}

const UserList = () => {
  const columns: ColumnDef<UserListDetail>[] = [
    {
      accessorKey: 'username',
      header: 'نام و نام خانوادگی',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <AppText style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            {value ? value : '-'}
          </AppText>
        );
      },
    },
    {
      accessorKey: 'mobile',
      header: 'شماره تماس',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <AppText style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            {value ? value : '-'}
          </AppText>
        );
      },
    },
    {
      accessorKey: 'email',
      header: 'ایمیل',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <AppText style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            {value ? value : '-'}
          </AppText>
        );
      },
    },
    {
      accessorKey: 'userType',
      header: 'نوع کاربر',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <AppText style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            {value ? value : '-'}
          </AppText>
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
          <AppFlex width={'100%'} height={'100%'} align={'center'} justify={'center'}>
            <AppButton variant='ghost' onClick={handleClick}>
              ...
            </AppButton>
          </AppFlex>
        );
      },
    },
  ];
  return (
    <AppBox width={'100%'} style={{ border: '1px solid #D4D4D4', overflow: 'scroll' }}>
      {/* <AppHeading>User List</AppHeading> */}
      <Table columns={columns as any} data={TableData as any} />
    </AppBox>
  );
};

export default UserList;
