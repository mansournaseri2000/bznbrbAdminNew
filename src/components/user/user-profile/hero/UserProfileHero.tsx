'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter, useSearchParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { userDetailSortConstant } from '@/constants/users';
import { Flex, IconButton, Modal, SelectItem, SelectRoot } from '@/libs/primitives';
import FilterContent from '@/libs/shared/FilterContent';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { updateURLWithQueryParams } from '@/libs/utils/updateUrl';
import { ArrowRight, Filter } from '@/public/icon';

type Props = {
  onSubmit: () => void;
};

const UserProfileHero = (props: Props) => {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { control, watch, reset, setValue } = useFormContext();

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
    const values = watch();
    updateURLWithQueryParams(router, searchParams, values);
    setIsOpen(false);
  };

  // TODO: fix update url for remove filters
  const removeFilter = () => {
    reset();
    updateURLWithQueryParams(router, searchParams, {});
    setIsOpen(false);
  };

  const handleSortItems = (id: number) => {
    switch (id) {
      case 1:
        return setValue('sortDate', 'des'), setValue('targetDate', 'dep');
        break;
      case 2:
        return setValue('targetDate', 'dep'), setValue('sortDate', 'asc');
        break;

      case 3:
        return setValue('targetDate', 'ret'), setValue('sortDate', 'des');
        break;

      case 4:
        return setValue('targetDate', 'ret'), setValue('sortDate', 'asc');
    }
  };

  return (
    <>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <IconButton colorVariant='BLUE' variant='soft' size={'3'} onClick={() => setIsOpen(true)}>
          <Filter />
        </IconButton>

        <Flex width={'240px'}>
          <Controller
            name='sort'
            control={control}
            render={({ field }) => (
              <SelectRoot
                size={'3'}
                {...field}
                placeholder='مرتب سازی بر اساس'
                value={String(field.value)}
                onValueChange={val => {
                  const currentItem = userDetailSortConstant.find(item => item.id === Number(val));
                  handleSortItems(currentItem?.id as any);
                  field.onChange(val);
                  props.onSubmit();
                }}
              >
                {userDetailSortConstant.map(item => (
                  // TODO: fix item style
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='فیلتر' icon={<ArrowRight />} handleClose={() => setIsOpen(false)} />
        <FilterContent province={constantData?.provinces ? constantData.provinces : []} />
        <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => removeFilter()} onSubmit={() => addFilter()} />
      </Modal>
    </>
  );
};

export default UserProfileHero;
