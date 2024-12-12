'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { articleStatusOptions } from '@/constants/data-management';
import { Button, Flex, Grid, IconButton, Modal, SelectItem, SelectRoot, Text, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ArrowRight, Filter, Search } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

const ArticleManagementHero = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({ defaultValues: { category: '', date: '', status: '' } });
  const { control } = methods;
  const router = useRouter();

  return (
    <>
      <Grid width={'100%'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 3fr auto' }}>
        <IconButton colorVariant='BLUE' variant='soft' size={'3'} onClick={() => setIsOpen(true)}>
          <Filter />
        </IconButton>
        <Button colorVariant='BLUE' variant='ghost' size={'3'} onClick={() => router.push('/data-management/article-management/create-article')}>
          <Flex gap={'2'} align={'center'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}> افزودن نقطه</Text>
          </Flex>
        </Button>
        <TextField placeholder='جستجو نام نقطه' />
        <IconButton size={'3'} variant='soft'>
          <Search />
        </IconButton>
      </Grid>
      {/* 
      ***
        MODAl_______________________________________________________________________________________________
      ***
      */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='فیلتر' icon={<ArrowRight />} handleClose={() => setIsOpen(false)} />
        <Grid gapY={'4'} p={'4'}>
          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <SelectRoot {...field} placeholder='دسته بندی' lable='دسته بندی'>
                {/* TODO: define select items */}
              </SelectRoot>
            )}
          />
          <Flex height={'77px'} align={'center'} justify={'center'} style={{ border: '2px solid red' }}>
            date picker
          </Flex>
          <Controller
            name='status'
            control={control}
            render={({ field }) => (
              <SelectRoot {...field} placeholder='وضعیت انتشار' lable='وضعیت'>
                {articleStatusOptions.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
        </Grid>
        <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => setIsOpen(false)} isFull={true} />
      </Modal>
    </>
  );
};

export default ArticleManagementHero;
