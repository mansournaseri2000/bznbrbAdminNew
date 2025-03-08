'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useSearchParams } from 'next/navigation';

import { useRouter } from '@bprogress/next';
import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { userDetailSortConstant } from '@/constants/users';
import { Button, Flex, Grid, IconButton, Modal, SelectItem, SelectRoot, Text } from '@/libs/primitives';
// import CustomFilter from '@/libs/shared/custom-filter/CustomFilter';
import CustomSearch from '@/libs/shared/custom-search/CustomSearch';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Filter } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

import FilterContent from '../../../libs/shared/FilterContent';

type Props = {
  onSubmit: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isPending: boolean;
};

const PlansHero = ({ onSubmit, isOpen, setIsOpen, isPending }: Props) => {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const router = useRouter();
  const { control, reset, setValue } = useFormContext();
  const searchParams = useSearchParams();
  const getParam = (key: string) => searchParams.get(key) || '';

  /*
   *** Services _________________________________________________________________________________________________________________________________________________________________
   */
  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  /**
   * functions
   * _______________________________________________________________________________
   */
  const addFilter = () => {
    onSubmit();
  };

  // TODO: fix update url for remove filters
  const removeFilter = () => {
    reset({
      page: 1,
      searchQuery: '',
      sortDate: '',
      targetDate: '',
      userId: '',
      originCityId: '',
      originProvinceId: '',
      destinationCityId: '',
      destinationProvinceId: '',
      departureDateStart: '',
      departureDateEnd: '',
      returnDateStart: '',
      returnDateEnd: '',
      sort: '',
    });
    router.replace('/plans');
    onSubmit();
    setIsOpen(false);
  };

  const handleSortItems = (id: number) => {
    switch (id) {
      case 1:
        return setValue('sortDate', 'des'), setValue('targetDate', 'dep');
      case 2:
        return setValue('targetDate', 'dep'), setValue('sortDate', 'asc');
      case 3:
        return setValue('targetDate', 'ret'), setValue('sortDate', 'des');
      case 4:
        return setValue('targetDate', 'ret'), setValue('sortDate', 'asc');
    }
  };

  return (
    <>
      <Grid width={'100%'} columns={'5'} align={'center'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 2fr  1fr' }}>
        <IconButton type='button' colorVariant='BLUE' variant='soft' size={'4'} onClick={() => setIsOpen(true)}>
          <Filter width={16} height={16} />
        </IconButton>

        <Button colorVariant='BLUE' variant='ghost' type='button' size={'4'} onClick={() => router.push('/plans/create-plan')} style={{ padding: '11.5px 16px' }}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}> افزودن برنامه</Text>
          </Flex>
        </Button>

        <Controller
          name='searchQuery'
          control={control}
          render={({ field }) => <CustomSearch {...field} placeholder='جستجو' defaultValue={getParam('searchQuery') ? getParam('searchQuery') : ''} />}
        />
        <Controller
          name='sort'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              placeholder='مرتب سازی بر اساس'
              size={'3'}
              value={String(field.value || getParam('sort'))}
              onValueChange={val => {
                const currentItem = userDetailSortConstant.find(item => item.id === Number(val));
                handleSortItems(currentItem?.id as any);
                field.onChange(val);
                onSubmit();
                setValue('page', 1);
              }}
            >
              {userDetailSortConstant.map(item => (
                <SelectItem key={item.id} value={String(item.id)} style={{ padding: '13.5px 12px' }}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectRoot>
          )}
        />
      </Grid>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='فیلتر' handleClose={() => setIsOpen(false)} />
        <FilterContent province={constantData?.provinces ? constantData.provinces : []} />
        {/* <CustomFilter
          province={constantData?.provinces ?? []}
          categories={constantData?.categories ?? []}
          type={['origin_point_position', 'destination_point_position', 'departure_date', 'return_date']}
        /> */}
        <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => removeFilter()} onSubmit={addFilter} isLoading={isPending} />
      </Modal>
    </>
  );
};

export default PlansHero;
