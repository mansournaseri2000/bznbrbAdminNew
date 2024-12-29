'use client';

import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getCategories } from '@/api/additional-detail';
import { sortCategoryOptions } from '@/constants/additional-detail';
import { Button, Flex, Modal, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError } from '@/libs/shared/toast/Toast';
import { Close } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

import CategoryItems from './category-items/CategoryItems';
import CreateCategoryModal from './category-modal/CreateCategoryModal';

const Categories = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({ defaultValues: { sort: '' } });
  const { control } = methods;

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isFetching: categoriesFetching,
    isError: categoriesError,
  } = useQuery({ queryKey: ['categories'], queryFn: async () => await getCategories() });

  console.log('Categories Data', categoriesData);
  /*
   *** Loading & Error_________________________________________________________________________________________________________________________________________________________________
   */
  if (categoriesLoading || categoriesFetching) return <Spinner style={{ margin: '100px auto', scale: 2 }} />;
  if (!categoriesData || categoriesError) return ToastError('مشکلی پیش آمده. لطفا مجددا تلاش نمایید');

  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <Flex width={'100%'} direction={'column'} gap={'5'}>
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <Button size={'4'} variant='ghost' onClick={() => setIsOpen(true)}>
            <Flex align={'center'} gap={'2'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن دسته بندی</Text>
            </Flex>
          </Button>
          <Flex width={'240px'}>
            <Controller
              name='sort'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='مرتب سازی'
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                  }}
                >
                  {sortCategoryOptions.map(item => (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
          </Flex>
        </Flex>
        {categoriesData?.map(item => (
          <CategoryItems key={item.id} {...item} />
        ))}
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title={'افزودن دسته بندی'} icon={<Close />} handleClose={() => setIsOpen(false)} />
        <CreateCategoryModal setIsOpen={setIsOpen} />
      </Modal>
    </FormProvider>
  );
};

export default Categories;
