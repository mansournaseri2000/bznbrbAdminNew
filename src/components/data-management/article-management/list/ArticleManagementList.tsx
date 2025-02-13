'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { ColumnDef } from '@tanstack/react-table';

import { Box, Button, Flex, Text } from '@/libs/primitives';
import { Table } from '@/libs/shared';
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
  const router = useRouter();
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
      accessorKey: 'title',
      header: 'عنوان مقاله',
      cell: info => {
        const value = info.getValue() as string | null;
        const status = info.row.original.status;
        return (
          <Flex width={'100%'} align={'center'} justify={'center'} gap={'3'} mr={'20px'}>
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
  return <Table columns={columns as any} data={props.data as any} />;
};

export default ArticleManagementList;
