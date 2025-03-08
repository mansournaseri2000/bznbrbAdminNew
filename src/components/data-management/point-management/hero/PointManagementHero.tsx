'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from '@bprogress/next';
import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { Button, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import CustomSearch from '@/libs/shared/custom-search/CustomSearch';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Filter } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

import PointFilter from './PointFilter';

const PointManagementHero = () => {
  /*
   *** Variables and Constants _________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { control, watch } = useFormContext();

  /*
   *** Services _________________________________________________________________________________________________________________________________________________________________
   */
  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  return (
    <>
      <Grid width={'100%'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 3fr ' }}>
        <IconButton colorVariant='BLUE' variant='soft' size={'4'} type='button' onClick={() => setIsOpen(true)}>
          <Filter width={16} height={16} />
        </IconButton>
        <Button colorVariant='BLUE' variant='ghost' type='button' size={'4'} onClick={() => router.push('/data-management/point-management/create-point')}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}> افزودن نقطه</Text>
          </Flex>
        </Button>

        <Controller
          name='searchQuery'
          control={control}
          render={({ field }) => <CustomSearch {...field} placeholder='جستجو نام نقطه' defaultValue={watch('searchQuery') ? watch('searchQuery') : ''} />}
        />
      </Grid>
      {/*** 
         MODAL_____________________________________________________________________________________________________________________
        ***/}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='فیلتر' handleClose={() => setIsOpen(false)} />
        <PointFilter
          province={constantData?.provinces ? constantData.provinces : []}
          categories={constantData?.categories ? constantData.categories : []}
          PlaceType={constantData?.PlaceType ? constantData.PlaceType : []}
          setIsOpen={setIsOpen}
        />
      </Modal>
    </>
  );
};

export default PointManagementHero;
