'use client';

import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import 'react-responsive-pagination/themes/classic.css';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';

import { getAllPlacesConstants, getAllPlacesWithParams, removePlace } from '@/api/place';
import { SearchAllPlaces, SearchByCity } from '@/components/place';
import { useDebounce, UseGetFilterTable } from '@/libs/hooks';
import { Button, Flex, Grid, Modal, SelectItem, SelectRoot, Text, TextField } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { Pictrue, PlacesDetail } from '@/types/place/place-list';

const ResponsivePagination = dynamic(() => import('react-responsive-pagination').then(madule => madule.default), { ssr: false });

const Table = dynamic(() => import('@/libs/shared/Table'), {
  ssr: false,
  loading: () => <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />,
});

/**
 * props
 * _______________________________________________________________________________
 */

const LandingPage = ({ searchParams }: { params: { slug: string }; searchParams: { page: string } }) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const queryClient = useQueryClient();
  const columns: ColumnDef<PlacesDetail>[] = [
    {
      accessorKey: 'index',
      header: 'ردیف',
      cell: info => <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{info.row.index + 1}</Text>,
    },
    {
      accessorKey: 'id',
      header: 'شناسه',
      cell: info => <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{info.getValue() as any}</Text>,
    },
    {
      accessorKey: 'pictrues',
      header: 'تصویر',
      cell: info => {
        const pictures = info.getValue<Pictrue[]>();
        const imageUrl = pictures?.length > 0 ? `http://37.32.8.14/${pictures[0].path}` : '/placeholder.jpg';
        return <Image loading='lazy' src={imageUrl} alt='profile' width={50} height={50} style={{ borderRadius: '4px' }} />;
      },
    },
    {
      accessorKey: 'name',
      header: 'نام نقطه',
      cell: info => <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{info.getValue() as string}</Text>,
    },
    {
      accessorKey: 'province',
      header: 'استان',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      accessorKey: 'city',
      header: 'شهر',
      cell: info => {
        const value = info.getValue() as string | null;
        return <Text style={{ display: 'flex', height: '100%', alignItems: 'center' }}>{value ? value : '-'}</Text>;
      },
    },
    {
      id: 'details',
      header: 'جزییات بیشتر',
      cell: ({ row }) => {
        const item = row.original;
        const handleClick = () => {
          push(`/place/edit/${item.id}`);
        };
        return (
          <Flex height={'100%'} align={'center'}>
            <Button variant='soft' size={'4'} onClick={handleClick}>
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
          setPlaceItem(item);
          setIsOpen(true);
        };
        return (
          <Flex height={'100%'} align={'center'}>
            <Button variant='soft' size={'4'} onClick={handleClick}>
              حذف کردن
            </Button>
          </Flex>
        );
      },
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();
  const [page, setPage] = useState(searchParams.page ? Number(searchParams.page) : 1);
  // const { data, isError } = useGetAllPlaces({ page: page });

  const methods = useForm({
    defaultValues: { plcaeName: '', city: '', province: '', provinceID: '', categoryID: '' },
  });

  const { watch, control } = methods;

  const {
    data: testData,
    isLoading: testIsLoadoing,
    isError,
  } = useQuery({
    queryKey: ['all-places-with-parmas', page, watch('provinceID'), watch('categoryID')],
    queryFn: async () => getAllPlacesWithParams(page, watch('categoryID'), watch('provinceID')),
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

  const { data: constantData, isLoading: constantDataLoading } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  const newData = UseGetFilterTable(debouncedSearchCriteria, testData ? testData?.placesDetail : []);
  const [placeItem, setPlaceItem] = useState<PlacesDetail>(newData[0]);
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

  if (constantDataLoading || !constantData) return <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />;

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <>
      <FormProvider {...methods}>
        <Flex p={'48px'} justify={'center'} align={'center'} direction={'column'} gap={'10px'}>
          <Flex
            gap={'20px'}
            direction={'column'}
            p={'16px'}
            width={'100%'}
            maxWidth={'1000px'}
            style={{
              borderRadius: '8px',
            }}
          >
            <Flex gap={'20px'}>
              <Link href={'/place/create'}>
                <Button type='button' size={'4'} variant='soft' style={{ width: '150px', minHeight: '45px', paddingInline: '20px', marginBottom: '10px' }}>
                  اضافه کردن
                </Button>
              </Link>
              <Grid style={{ flex: 1 }} gap={'10px'} columns={'3'}>
                <Controller name='plcaeName' control={control} render={({ field }) => <TextField {...field} placeholder='نام نقطه مورد نظرتان را وارد کنید ...' aria-label='Search field' />} />
                <Controller name='province' control={control} render={({ field }) => <TextField {...field} placeholder='نام استان مورد نظرتان را وارد کنید ...' aria-label='Search field' />} />
                <Controller name='city' control={control} render={({ field }) => <TextField {...field} placeholder='نام شهر مورد نظرتان را وارد کنید ...' aria-label='Search field' />} />
              </Grid>
            </Flex>
            <SearchAllPlaces />
            {/* <SerachByProvince province={constantData?.provinces} /> */}
            <Grid columns={'2'} gap={'16px'}>
              <Grid gap={'16px'} p={'16px'} style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
                <Text>جستجو بر اساس نام استان</Text>
                <Controller
                  name='provinceID'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                      }}
                      placeholder={'استان'}
                    >
                      {constantData?.provinces.map(item => {
                        return (
                          <SelectItem key={item.id} value={String(item.id)}>
                            {item.name}
                          </SelectItem>
                        );
                      })}
                    </SelectRoot>
                  )}
                />
              </Grid>
              <Grid gap={'16px'} p={'16px'} style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
                <Text>جستجو بر اساس نام دسته بندی</Text>
                <Controller
                  name='categoryID'
                  control={control}
                  render={({ field }) => (
                    <SelectRoot
                      {...field}
                      value={String(field.value)}
                      onValueChange={val => {
                        field.onChange(val);
                      }}
                      placeholder={'دسته بندی'}
                    >
                      {constantData?.categories.map(item => {
                        return (
                          <SelectItem key={item.id} value={String(item.id)}>
                            {item.name}
                          </SelectItem>
                        );
                      })}
                    </SelectRoot>
                  )}
                />
              </Grid>
            </Grid>

            <SearchByCity province={constantData?.provinces} />

            {isError ? (
              <Text>مشکلی پیش آمده لطفا مجدد تلاش نمایید</Text>
            ) : testIsLoadoing ? (
              <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />
            ) : (
              <Table columns={columns as any} data={newData} />
            )}

            <ResponsivePagination
              current={page}
              total={testData?.totalPages as number}
              onPageChange={p => {
                setPage(p);
                updateUrlWithPageNumber(p);
              }}
            />
          </Flex>
        </Flex>
      </FormProvider>
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
