'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import 'react-responsive-pagination/themes/classic.css';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';

import { removePlace, useGetAllPlaces } from '@/api/place';
import { SearchAllPlaces } from '@/components/place';
import { useDebounce, UseGetFilterTable } from '@/libs/hooks';
import { Button, Flex, Grid, Modal, Text, TextField } from '@/libs/primitives';
import ReceiptInfo from '@/libs/shared/shared-components/receipt-info/ReceiptInfo';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { picture, PlaceDetail } from '@/types/place';

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
  const queryClient = useQueryClient();
  const columns: ColumnDef<PlaceDetail>[] = [
    {
      accessorKey: 'pictrues',
      header: 'تصویر',
      cell: info => {
        const pictures = info.getValue<picture[]>();
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
          push(`/place/${item.id}`);
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
          console.log(item);
          setPlaceItem(item);
          setIsOpen(true);
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
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();
  const [page, setPage] = useState(Number(searchParams.page));
  const { data, isError, isLoading } = useGetAllPlaces({ page: page });

  const { control, watch } = useForm<SearchFormInputs>({
    defaultValues: { plcaeName: '', city: '', province: '' },
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

  const newData = UseGetFilterTable(debouncedSearchCriteria, data ? data?.placesDetail : []);
  const [placeItem, setPlaceItem] = useState<PlaceDetail>(newData[0]);
  const { mutate: removePlaceMutate, isPending: removePlaceIsPending } = useMutation({
    mutationFn: async () => removePlace(placeItem.id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['all-places'] });
        ToastSuccess('مکان مورد نظر با موفقیت حذف شد');
        setIsOpen(false);
      } else {
        ToastError('لطفا دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err, 'useRemovePlace');
    },
  });

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <>
      <Flex p={'48px'} justify={'center'} align={'center'} direction={'column'} gap={'10px'}>
        <Flex width={'100%'} justify={'center'}>
          <ReceiptInfo
            date='24 فروردین 1403'
            gateWay='سامان'
            paidAmount='24.000.000 ريال'
            payableAmount='24.000.000 ريال'
            status={false}
            time='16:40'
            trackingNumber={877}
          />
        </Flex>
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
          <SearchAllPlaces />
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

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Grid gap={'24px'}>
          <Text>{`آیا از حذف ${placeItem?.name} مطمین هستید ؟`}</Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button onClick={() => removePlaceMutate()} variant='soft' size={'4'}>
              <Text>{removePlaceIsPending ? <Spinner /> : 'بله'}</Text>
            </Button>
            <Button type='button' onClick={() => setIsOpen(false)} variant='solid' size={'4'}>
              خیر
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default LandingPage;
