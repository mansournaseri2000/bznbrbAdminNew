'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter, useSearchParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { userDetailSortConstant } from '@/constants/users';
import { Button, Flex, Grid, IconButton, Modal, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import CustomSearch from '@/libs/shared/custom-search/CustomSearch';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ArrowRight, Filter } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

import FilterContent from '../../../libs/shared/FilterContent';

type Props = {
  onSubmit: () => void;
};

const PlansHero = (props: Props) => {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { control, reset, setValue } = useFormContext();
  const searchParams = useSearchParams();
  const getParam = (key: string) => searchParams.get(key) || '';

  // console.log('Watch', watch());
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
    setIsOpen(false);
  };

  // TODO: fix update url for remove filters
  const removeFilter = () => {
    reset({
      page: 1,
      limit: 10,
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
    props.onSubmit();
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
          <Filter />
        </IconButton>

        <Button colorVariant='BLUE' variant='ghost' size={'4'} onClick={() => router.push('/plans/create-plan')}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}> افزودن نقطه</Text>
          </Flex>
        </Button>

        <Controller
          name='searchQuery'
          control={control}
          render={({ field }) => <CustomSearch {...field} placeholder='جستجو' defaultValue={getParam('searchQuery') ? getParam('searchQuery') : ''} onClick={props.onSubmit} />}
        />
        <Controller
          name='sort'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              placeholder='مرتب سازی بر اساس'
              size={'3'}
              value={String(field.value)}
              onValueChange={val => {
                const currentItem = userDetailSortConstant.find(item => item.id === Number(val));
                handleSortItems(currentItem?.id as any);
                field.onChange(val);
                props.onSubmit();
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
        <ModalHeader title='فیلتر' icon={<ArrowRight />} handleClose={() => setIsOpen(false)} />
        <FilterContent province={constantData?.provinces ? constantData.provinces : []} />
        <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => removeFilter()} onSubmit={() => addFilter()} />
      </Modal>
    </>
  );
};

export default PlansHero;
