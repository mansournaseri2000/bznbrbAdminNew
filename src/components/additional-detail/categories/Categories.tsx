'use client';

import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { sortCategoryOptions } from '@/constants/additional-detail';
import { Button, Flex, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import { typoVariant } from '@/theme/typo-variants';

import CategoryItems from './category-items/CategoryItems';
import CategoryModal from './category-modal/CategoryModal';

const Categories = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({ defaultValues: { sort: '' } });
  const { control } = methods;
  return (
    <FormProvider {...methods}>
      <Flex width={'100%'} direction={'column'} gap={'5'} p={'4'}>
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
        <CategoryItems />
      </Flex>
      <CategoryModal isOpen={isOpen} setIsOpen={setIsOpen} type='edit_category' />
    </FormProvider>
  );
};

export default Categories;
