'use client';

import React from 'react';

// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
import { ColumnDef } from '@tanstack/react-table';

import { Button, Flex, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { PlacesDetail } from '@/types/place/place-list';

// import TableData from './data.json';

interface PointListDetail {
  name: string;
  province: string;
  city: string;
  pointType: string;
  category: string;
  status: 'ناقص' | 'کامل';
}

type Props = {
  data: PlacesDetail[];
};

const PointManagementList = (props: Props) => {
  // const [placeItem, setPlaceItem] = useState<PlacesDetail>(props?.data[0]);
  // const [isOpen, setIsOpen] = useState(false);

  // const { push } = useRouter();

  const columns: ColumnDef<PointListDetail>[] = [
    {
      accessorKey: 'name',
      header: ' نام نقطه',
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
      header: 'شهر',
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
      accessorKey: 'pointType',
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
      accessorKey: 'status',
      header: 'وضعیت اطلاعات',
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
              backgroundColor: value === 'ناقص' ? colorPalette.pink[3] : colorPalette.blue[3],
              color: value === 'ناقص' ? colorPalette.pink[11] : colorPalette.blue[11],
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
