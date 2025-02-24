'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useSearchParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { userDetailSortConstant } from '@/constants/users';
import { Grid, IconButton, Modal, SelectItem, SelectRoot } from '@/libs/primitives';
import CustomSearch from '@/libs/shared/custom-search/CustomSearch';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Filter } from '@/public/icon';

import ToursFilter from './ToursFilter';

type Props = {
  onSubmit: VoidFunction;
  isPending: boolean;
};

const ToursHero = ({ onSubmit, isPending }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { control, setValue } = useFormContext();
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
   * Hooks and Methods
   * _______________________________________________________________________________
   */
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
  /*
   *** JSX_________________________________________________________________________________________________________
   */
  return (
    <>
      <Grid width={'100%'} columns={'3'} align={'center'} gapX={'5'} style={{ gridTemplateColumns: 'auto 3fr 1fr' }}>
        <IconButton type='button' colorVariant='BLUE' variant='soft' size={'4'} onClick={() => setIsOpen(true)}>
          <Filter width={16} height={16} />
        </IconButton>
        <Controller
          name='searchQuery'
          control={control}
          render={({ field }) => <CustomSearch {...field} placeholder='جستجو' defaultValue={getParam('searchQuery') ? getParam('searchQuery') : ''} />}
        />
        <Controller
          name=''
          control={control}
          render={({ field }) => (
            <SelectRoot
              placeholder='مرتب سازی بر اساس'
              size={'3'}
              value={String(field.value || getParam('sort'))}
              onValueChange={val => {
                const currentItem = userDetailSortConstant.find(item => item.id === Number(val));
                handleSortItems(currentItem?.id as any);
                field.onChange(val);
                // onSubmit();
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
        <ToursFilter setIsOpen={setIsOpen} province={constantData?.provinces ?? []} onSubmit={onSubmit} isPending={isPending} />
      </Modal>
    </>
  );
};

export default ToursHero;
