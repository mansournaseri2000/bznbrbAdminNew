'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { plansSortConstant } from '@/constants/plans';
import { Button, Flex, Grid, IconButton, Modal, SelectItem, SelectRoot, Text, TextField } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ArrowRight, Filter, Search } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

import FilterContent from '../../../libs/shared/FilterContent';

type Props = {
  onSubmit: () => void;
};

const PlansHero = (props: Props) => {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const router = useRouter();
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
      <Grid width={'100%'} columns={'5'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 2fr auto 1fr' }}>
        <IconButton colorVariant='BLUE' variant='soft' size={'3'} onClick={() => setIsOpen(true)}>
          <Filter />
        </IconButton>

        <Button colorVariant='BLUE' variant='ghost' size={'3'} onClick={() => router.push('/plans/create-plan')}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}> افزودن نقطه</Text>
          </Flex>
        </Button>

        <Controller name='searchQuery' control={control} render={({ field }) => <TextField {...field} placeholder='جستجوی نام کاربر' />} />
        <IconButton size={'3'} variant='soft' onClick={props.onSubmit}>
          <Search />
        </IconButton>

        <Controller
          name='sortDate'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              placeholder='مرتب سازی بر اساس'
              size={'3'}
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
              }}
            >
              {plansSortConstant.map(item => (
                <SelectItem key={item.id} value={String(item.id)} style={{ paddingBottom: '8px 12px', borderBottom: '1px solid #D4D4D4' }}>
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

export default PlansHero;
