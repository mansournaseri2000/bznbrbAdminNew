'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import 'react-responsive-pagination/themes/classic.css';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';

import { getAllPlces } from '@/api/auth';
import { useDebounce, UseGetFilterTable } from '@/libs/hooks';
import { Button, Flex, Grid, Text, TextField } from '@/libs/primitives';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { Picture, PlaceDetail } from '@/types/point';

const ResponsivePagination = dynamic(
  () => import('react-responsive-pagination').then(madule => madule.default),
  { ssr: false }
);

const Table = dynamic(() => import('@/libs/shared/Table'), {
  ssr: false,
  loading: () => <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />,
});

/**
 * props
 * _______________________________________________________________________________
 */

interface SearchFormInputs {
  plcaeName: string;
  province: string;
  city: string;
}

const LandingPage = ({ searchParams }: { params: { slug: string }; searchParams: { page: string } }) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { push } = useRouter();
  const [page, setPage] = useState(Number(searchParams.page));
  const { control, watch } = useForm<SearchFormInputs>({
    defaultValues: { plcaeName: '', city: '', province: '' },
  });
  const { data, isError, isLoading } = useQuery({
    queryKey: ['all-places', page],
    queryFn: async () => getAllPlces(page),
  });

  const debouncedPlaceName = useDebounce(watch('plcaeName') || '', 300);
  const debouncedProvince = useDebounce(watch('province') || '', 300);
  const debouncedCity = useDebounce(watch('city') || '', 300);

  // Create debounced search criteria object
  const debouncedSearchCriteria = {
    placeName: debouncedPlaceName,
    province: debouncedProvince,
    city: debouncedCity,
  };

  const columns: ColumnDef<PlaceDetail>[] = [
    {
      accessorKey: 'pictrues',
      header: 'تصویر',
      cell: info => {
        const pictures = info.getValue<Picture[]>();
        const imageUrl = pictures.length > 0 ? `http://37.32.8.14/${pictures[0].path}` : '/placeholder.jpg';
        return (
          <Image
            loading='lazy'
            src={imageUrl}
            alt='profile'
            width={50}
            height={50}
            style={{ borderRadius: '4px' }}
          />
        );
      },
    },
    {
      accessorKey: 'name',
      header: 'نام نقطه',
      cell: info => (
        <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
          {info.getValue() as string}
        </Text>
      ),
    },
    {
      accessorKey: 'province',
      header: 'استان',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>
        );
      },
    },
    {
      accessorKey: 'city',
      header: 'شهر',
      cell: info => {
        const value = info.getValue() as string | null;
        return (
          <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>
        );
      },
    },
    {
      id: 'details',
      header: 'جزییات بیشتر',
      cell: ({ row }) => {
        const item = row.original;
        const handleClick = () => {
          push(`/point/${item.id}`);
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
    {
      id: 'trash',
      header: 'پاک کردن',
      cell: ({ row }) => {
        const item = row.original;
        const handleClick = () => {
          console.log(item.id);
        };
        return (
          <Flex height={'100%'} align={'center'}>
            <Button variant='outline' onClick={handleClick}>
              حذف کردن
            </Button>
          </Flex>
        );
      },
    },
  ];
  const newData = UseGetFilterTable(debouncedSearchCriteria, data ? data?.placesDetail : []);

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex p={'48px'} justify={'center'} align={'center'} direction={'column'} gap={'10px'}>
      <Flex
        gap={'10px'}
        direction={'column'}
        p={'16px'}
        width={'100%'}
        maxWidth={'1000px'}
        style={{
          borderRadius: '8px',
        }}
      >
        <Flex gap={'20px'}>
          <Button type='button' style={{ width: 'fit-content', minHeight: '45px', paddingInline: '20px' }}>
            اضافه کردن
          </Button>
          <Grid style={{ flex: 1 }} gap={'10px'} columns={'3'}>
            <Controller
              name='plcaeName'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder='نام نقطه مورد نظرتان را وارد کنید ...'
                  aria-label='Search field'
                />
              )}
            />
            <Controller
              name='province'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder='نام استان مورد نظرتان را وارد کنید ...'
                  aria-label='Search field'
                />
              )}
            />
            <Controller
              name='city'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder='نام شهر مورد نظرتان را وارد کنید ...'
                  aria-label='Search field'
                />
              )}
            />
          </Grid>
        </Flex>

        {isError ? (
          <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
        ) : isLoading ? (
          <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
        ) : (
          <Table columns={columns as any} data={newData} />
        )}

        <ResponsivePagination
          current={page}
          total={data?.totalPages as number}
          onPageChange={p => {
            setPage(p);
            updateUrlWithPageNumber(p);
          }}
        />
      </Flex>
    </Flex>
  );
};

export default LandingPage;
