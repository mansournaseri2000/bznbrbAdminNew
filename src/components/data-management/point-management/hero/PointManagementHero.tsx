'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { Button, Flex, Grid, IconButton, Modal, Text, TextField } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ArrowRight, Filter, Search } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

import PointFilter from './PointFilter';

const PointManagementHero = () => {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { control } = useFormContext();
  const queryClient = useQueryClient();

  /*
   *** Services _________________________________________________________________________________________________________________________________________________________________
   */
  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  // console.log('constant', constantData);

  const handleSubmit = () => {
    queryClient.invalidateQueries({ queryKey: ['point-data'] });
  };

  return (
    <>
      <Grid width={'100%'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 3fr auto' }}>
        <IconButton colorVariant='BLUE' variant='soft' size={'3'} onClick={() => setIsOpen(true)}>
          <Filter />
        </IconButton>
        <Button colorVariant='BLUE' variant='ghost' size={'3'} onClick={() => router.push('/data-management/point-management/create-point')}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}> افزودن نقطه</Text>
          </Flex>
        </Button>

        <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='جستجو نام نقطه' />} />
        <IconButton size={'3'} variant='soft' onClick={handleSubmit}>
          <Search />
        </IconButton>
      </Grid>
      {/*** 
         MODAL_____________________________________________________________________________________________________________________
        ***/}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='فیلتر' icon={<ArrowRight />} handleClose={() => setIsOpen(false)} />
        <PointFilter province={constantData?.provinces ? constantData.provinces : []} categories={constantData?.categories ? constantData.categories : []} setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default PointManagementHero;
