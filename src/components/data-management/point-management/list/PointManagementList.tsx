'use client';

import React from 'react';

// import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ColumnDef } from '@tanstack/react-table';

import { Box, Button, Flex, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { AllFilteredPlacesDetail } from '@/types/place/place-list';

interface PointListDetail {
  id: number;
  name: string;
  province: string;
  city: string;
  parentCategory: string;
  category: string;
  isPlaceInfoComplete: boolean;
  status: boolean;
}

type Props = {
  data: AllFilteredPlacesDetail[];
};

const PointManagementList = (props: Props) => {
  const router = useRouter();

  const columns: ColumnDef<PointListDetail>[] = [
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
      accessorKey: 'name',
      header: ' نام نقطه',
      cell: info => {
        const value = info.getValue() as string | null;
        const status = info.row.original.status;
        return (
          <Flex width={'100%'} align={'center'} gap={'3'} mr={'20px'}>
            <Box width={'12px'} height={'12px'} style={{ borderRadius: 100, backgroundColor: status === true ? colorPalette.blue[6] : colorPalette.pink[6] }}>
              {' '}
            </Box>
            <Text {...typoVariant.body2} style={{ display: 'flex', height: '100%', alignItems: 'center', color: colorPalette.gray[11] }}>
              {value ? value : '-'}
            </Text>
          </Flex>
        );
      },
    },
    {
      accessorKey: 'province',
      header: 'استان',
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
      accessorKey: 'city',
      header: 'شهرستان',
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
      accessorKey: 'parentCategory',
      header: 'دسته بندی',
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
      accessorKey: 'category',
      header: 'نوع نقطه',
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
      accessorKey: 'isPlaceInfoComplete',
      header: 'وضعیت انتشار',
      cell: info => {
        const value = info.getValue() as boolean | null;
        return (
          <Text
            {...typoVariant.body2}
            style={{
              display: 'flex',
              width: 'fit-content',
              alignItems: 'center',
              padding: '4px 8px',
              backgroundColor: value === false ? colorPalette.pink[3] : colorPalette.blue[3],
              color: value === false ? colorPalette.pink[11] : colorPalette.blue[11],
              borderRadius: 4,
            }}
          >
            {value === false ? 'منتشر نشده' : value === true ? 'منتشر شده' : '-'}
          </Text>
        );
      },
    },
    {
      id: 'details',
      cell: ({ row }) => {
        const item = row.original;
        const handleClick = (e: React.MouseEvent) => {
          console.log('item', item);
          e.preventDefault();
          router.push(`/data-management/point-management/edit-point/${item.id}`);
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

  return <Table columns={columns as any} data={props.data as any} />;
};

export default PointManagementList;
