'use client';

import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { sortCategoryOptions } from '@/constants/additional-detail';
import { Box, Button, Flex, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import CitiesManagementModal from './CitiesManagementModal';

type TypeOptions = 'edit' | 'create';

const CitiesManagement = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [type, setType] = useState<TypeOptions>('create');
  const methods = useForm({ defaultValues: { sort: '' } });
  const { control } = methods;

  return (
    <FormProvider {...methods}>
      <Flex width={'100%'} direction={'column'} gap={'5'} p={'4'}>
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <Button
            size={'4'}
            variant='ghost'
            onClick={() => {
              setIsOpen(true);
              setType('create');
            }}
          >
            <Flex align={'center'} gap={'2'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن شهرستان</Text>
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
        <AccordionWrapper
          hero='تبریز'
          withEdit
          onEdit={e => {
            e.stopPropagation();
            setIsOpen(true);
            setType('edit');
          }}
        >
          <Flex align={'center'} wrap={'wrap'} gap={'5'}>
            <Box width={'fit-content'} p={'10px 16px'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                آبشار
              </Text>
            </Box>{' '}
            <Box width={'fit-content'} p={'10px 16px'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                طبیعت گردی
              </Text>
            </Box>
          </Flex>
        </AccordionWrapper>
      </Flex>
      {/* 
      ***
        Modal___________________________________________
      ***
      */}
      <CitiesManagementModal isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
    </FormProvider>
  );
};

export default CitiesManagement;
