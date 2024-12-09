'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { userDetailSortConstant } from '@/constants/users';
import { Flex, IconButton, Modal, SelectItem, SelectRoot } from '@/libs/primitives';
import FilterContent from '@/libs/shared/FilterContent';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ArrowRight, Filter } from '@/public/icon';

const UserProfileHero = () => {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { control } = useFormContext();

  /*
   *** Services _________________________________________________________________________________________________________________________________________________________________
   */
  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

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
                  field.onChange(val);
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
        <FilterContent setIsOpen={setIsOpen} province={constantData?.provinces ? constantData.provinces : []} />
      </Modal>
    </>
  );
};

export default UserProfileHero;
