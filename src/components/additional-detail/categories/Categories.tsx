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
import { typoVariant } from '@/theme/typo-variants';

import CategoryItems from './category-items/CategoryItems';
import CreateCategoryModal from './category-modal/CreateCategoryModal';

const Categories = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const methods = useForm({ defaultValues: { sort: '' } });
  const { control, watch } = methods;

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isFetching: categoriesFetching,
    isError: categoriesError,
  } = useQuery({ queryKey: ['categories', watch('sort')], queryFn: async () => await getCategories(watch('sort')) });

  /*
   *** Loading & Error_________________________________________________________________________________________________________________________________________________________________
   */
  if (categoriesLoading || categoriesFetching) return <Spinner style={{ margin: '100px auto', scale: 2 }} />;
  if (!categoriesData || categoriesError) return ToastError('مشکلی پیش آمده. لطفا مجددا تلاش نمایید');

  console.log('CATEGORIES', categoriesData);

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
                    <SelectItem key={item.id} value={item.value}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectRoot>
              )}
            />
          </Flex>
        </Flex>
        {categoriesData?.map((item, index) => (
          <CategoryItems key={index} selected={selectedItem === index} onSelect={() => setSelectedItem(index)} currentIndex={index} {...item} />
        ))}
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title={'افزودن دسته بندی'} handleClose={() => setIsOpen(false)} />
        <CreateCategoryModal data={categoriesData} setIsOpen={setIsOpen} />
      </Modal>
    </FormProvider>
  );
};

export default Categories;
