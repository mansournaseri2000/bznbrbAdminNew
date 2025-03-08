'use client';

import React, { useState } from 'react';

import { useRouter } from '@bprogress/next';
import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';

import { removeArticle } from '@/api/data-management';
import { Box, Button, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { ArticleSDetail } from '@/types/data-management/article';

interface ArticleDetail {
  title: string;
  status: boolean;
  writer: string;
  citiesName: string;
  parentCategoryName: string;
  categoryName: string;
  is_published: boolean;
  id: number;
}

type Props = {
  data: ArticleSDetail[];
};

const ArticleManagementList = (props: Props) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentItemId, setCurrentItemId] = useState<number | null>(null);

  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationFn: async (id: number) => removeArticle(id),
    onSuccess: async data => {
      if (data.status === true) {
        ToastSuccess(' آیتم مورد نظر با موفقیت حذف شد');
        queryClient.invalidateQueries({ queryKey: ['article-list'] });
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

  const columns: ColumnDef<ArticleDetail>[] = [
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
      accessorKey: 'title',
      header: () => (
        <Flex maxWidth={'55%'} m={'auto'}>
          <Text {...typoVariant.body2}>عنوان مقاله</Text>
        </Flex>
      ),
      cell: info => {
        const value = info.getValue() as string | null;
        const status = info.row.original.status;
        return (
          <Flex width={'100%'} maxWidth={'70%'} align={'center'} justify={'start'} gap={'3'} mr={'20px'}>
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
      accessorKey: 'writer',
      header: 'نویسنده',
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
      accessorKey: 'citiesName',
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
      accessorKey: 'parentCategoryName',
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
      accessorKey: 'categoryName',
      header: 'زیر دسته بندی',
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
      accessorKey: 'is_published',
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
            {value === true ? 'منتشر شده' : 'منتشر نشده'}
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
          console.log('item', item);
          e.preventDefault();
          router.push(`/data-management/article-management/edit-article/${item.id}`);
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

export default ArticleManagementList;
