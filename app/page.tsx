'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { ColumnDef } from '@tanstack/react-table';

import { TableData } from '@/constants/table';
import { useDebounce } from '@/libs/hooks/useDebounce';
import useFilteredData from '@/libs/hooks/UseGetFilterTable';
import { Button, Flex, Text, TextField } from '@/libs/primitives';
import { Table } from '@/libs/shared';
import { Data } from '@/types/point';

/**
 * props
 * _______________________________________________________________________________
 */

interface SearchFormInputs {
  searchText: string;
}

export default function Home() {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [page, setPage] = useState(0);
  const { control, watch } = useForm<SearchFormInputs>({
    defaultValues: { searchText: '' },
  });
  const searchText = watch('searchText');
  const { push } = useRouter();
  const columns: ColumnDef<Data>[] = [
    {
      accessorKey: 'image',
      header: 'تصویر',
      cell: info => (
        <Image
          src={info.getValue() as string}
          alt='profile'
          width={50}
          height={50}
          style={{ borderRadius: '4px' }}
        />
      ),
    },
    {
      accessorKey: 'pointName',
      header: 'نام نقطه',
      cell: info => (
        <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
          {info.getValue() as string}
        </Text>
      ),
    },
    {
      accessorKey: 'category',
      header: 'دسته‌بندی',
      cell: info => (
        <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
          {info.getValue() as string}
        </Text>
      ),
    },
    {
      accessorKey: 'status',
      header: 'وضعیت',
      cell: info => {
        const status = info.getValue() as 'complete' | 'incomplete';
        return (
          <Text
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              color: status === 'complete' ? 'green' : 'red',
            }}
          >
            {status === 'complete' ? 'تکمیل شده' : 'ناتمام'}
          </Text>
        );
      },
    },
    {
      accessorKey: 'province',
      header: 'استان',
      cell: info => (
        <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
          {info.getValue() as string}
        </Text>
      ),
    },
    {
      accessorKey: 'city',
      header: 'شهر',
      cell: info => (
        <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
          {info.getValue() as string}
        </Text>
      ),
    },
    {
      id: 'details',
      header: 'جزییات بیشتر',
      cell: ({ row }) => {
        const item = row.original; // Access the row's original data
        const handleClick = () => {
          push(`/point/${item.pointID}`); // Use pointName or another unique field for routing
        };
        return (
          <Flex height={'100%'} align={'center'}>
            <Button variant='outline' onClick={handleClick}>
              جزییات بیشتر
            </Button>
          </Flex>
        );
      },
    },
  ];
  const debouncedSearchText = useDebounce(searchText, 500);
  const newData = useFilteredData(debouncedSearchText, TableData);

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex p={'48px'} height={'100vh'} justify={'center'} align={'center'} direction={'column'} gap={'10px'}>
      <Flex
        gap={'16px'}
        direction={'column'}
        p={'16px'}
        width={'100%'}
        minHeight={'600px'}
        maxWidth={'1000px'}
        style={{
          borderRadius: '8px',
        }}
      >
        <Button type='button' style={{ width: 'fit-content' }}>
          {' '}
          اضافه کردن
        </Button>
        <Controller
          name='searchText'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder='نام نقطه مورد نظرتان را وارد کنید ...'
              aria-label='Search field'
            />
          )}
        />
        <Table columns={columns} data={newData} />
        <ResponsivePagination current={page} total={30} onPageChange={p => setPage(p)} />
      </Flex>
    </Flex>
  );
}
