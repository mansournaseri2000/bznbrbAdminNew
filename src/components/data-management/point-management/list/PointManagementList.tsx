'use client';

import React, { useState } from 'react';

// import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';

import { removePlace } from '@/api/confirmations';
import { Box, Button, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Trash } from '@/public/icon';
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
  onRevalidate: any;
  constant: any;
};

const PointManagementList = (props: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState<number | null>(null);

  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationFn: async (id: number) => removePlace(id),
    onSuccess: async data => {
      if (data.status === true) {
        props.onRevalidate();
        ToastSuccess(' آیتم مورد نظر با موفقیت حذف شد');
        setIsOpen(false);
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
        setIsOpen(false);
      }
    },
    onError: () => {
      ToastError('لطفا دوباره تلاش نمایید');
      setIsOpen(false);
    },
  });

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
      accessorKey: 'id', // ✅ Added placeId column
      header: 'شناسه مکان',
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
      accessorKey: 'name',
      header: () => (
        <Flex maxWidth={'170px'} m={'auto'}>
          <Text {...typoVariant.body2}>نام نقطه</Text>
        </Flex>
      ),
      cell: info => {
        const value = info.getValue() as string | null;
        const status = info.row.original.status;
        return (
          <Flex width={'100%'} align={'center'} justify={'start'} maxWidth={'250px'} gap={'3'} mr={'20px'}>
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
      accessorKey: 'type',
      header: 'نوع نقطه',
      cell: info => {
        const data = props.constant.PlaceType?.find((item: any) => item.id == info.getValue());
        const value = data?.name as string | null;
        return (
          <Text {...typoVariant.body2} style={{ display: 'flex', height: '100%', alignItems: 'center', color: colorPalette.gray[11] }}>
            {value ? value : '-'}
          </Text>
        );
      },
    },
    {
      accessorKey: 'isPublished',
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
      id: 'remove',
      cell: ({ row }) => {
        const item = row.original;
        const handleClick = (e: React.MouseEvent) => {
          e.preventDefault();
          setIsOpen(true);
          setCurrentItemId(item.id);
        };
        return (
          <IconButton variant='solid' size={'3'} type='button' colorVariant='PINK' onClick={handleClick}>
            <Trash />
          </IconButton>
        );
      },
    },
    {
      id: 'details',
      cell: ({ row }) => {
        const item = row.original;
        const handleClick = (e: React.MouseEvent) => {
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

  return (
    <>
      <Table columns={columns as any} data={props.data as any} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Grid gapY={'24px'} p={'5'}>
          <Text>آیا از حذف این آیتم اطمینان دارید؟ </Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button type='button' onClick={() => deleteMutate(Number(currentItemId))} variant='soft' size={'4'}>
              <Text {...typoVariant.body3}>{deletePending ? <Spinner /> : 'بله'}</Text>
            </Button>
            <Button type='button' onClick={() => setIsOpen(false)} variant='solid' size={'4'}>
              <Text {...typoVariant.body3}>خیر</Text>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default PointManagementList;
