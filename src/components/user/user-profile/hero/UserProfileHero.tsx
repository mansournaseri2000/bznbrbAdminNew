'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { userDetailSortConstant } from '@/constants/users';
import { Grid, IconButton, Modal, SelectItem, SelectRoot, TextField } from '@/libs/primitives';
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
      <Grid width={'100%'} columns={'3'} gapX={'5'} style={{ gridTemplateColumns: 'auto 3fr 0.7fr' }}>
        <IconButton colorVariant='BLUE' variant='soft' size={'3'} onClick={() => setIsOpen(true)}>
          <Filter />
        </IconButton>
        <Controller name='search' control={control} render={({ field }) => <TextField {...field} placeholder='جستجو' />} />
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
      </Grid>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='فیلتر' icon={<ArrowRight />} handleClose={() => setIsOpen(false)} />
        <FilterContent setIsOpen={setIsOpen} province={constantData?.provinces ? constantData.provinces : []} />
      </Modal>
    </>
  );
};

export default UserProfileHero;
