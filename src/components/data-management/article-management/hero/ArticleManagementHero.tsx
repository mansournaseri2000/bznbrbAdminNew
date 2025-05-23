'use client';

import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useSearchParams } from 'next/navigation';

import { useRouter } from '@bprogress/next';
import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import { Button, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import CustomSearch from '@/libs/shared/custom-search/CustomSearch';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Filter } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

import ArticleFilter from './ArticleFilter';

const ArticleManagementHero = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { control } = useFormContext();
  const router = useRouter();

  const searchParams = useSearchParams();
  const getParam = (key: string) => searchParams.get(key) || '';
  /*
   *** Services _________________________________________________________________________________________________________________________________________________________________
   */
  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  return (
    <>
      <Grid width={'100%'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 3fr' }}>
        <IconButton colorVariant='BLUE' variant='soft' size={'4'} type='button' onClick={() => setIsOpen(true)}>
          <Filter width={16} height={16} />
        </IconButton>
        <Button colorVariant='BLUE' type='button' variant='ghost' size={'4'} onClick={() => router.push('/data-management/article-management/create-article')}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}> افزودن مقاله</Text>
          </Flex>
        </Button>
        <Controller name='title' control={control} render={({ field }) => <CustomSearch {...field} placeholder='جستجو نام نقطه' defaultValue={getParam('title') ? getParam('title') : ''} />} />
      </Grid>
      {/* 
      ***
        MODAl_______________________________________________________________________________________________
      ***
      */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='فیلتر' handleClose={() => setIsOpen(false)} />
        <ArticleFilter province={constantData?.provinces ? constantData.provinces : []} categories={constantData?.categories ? constantData.categories : []} setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default ArticleManagementHero;
