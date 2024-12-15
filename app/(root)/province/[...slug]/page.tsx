'use client';

import React, { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';

import { getAllProvincesById } from '@/api/province';
import CitiesManagementModal from '@/components/confirmations/cities-management/CitiesManagementModal';
import { sortCategoryOptions } from '@/constants/additional-detail';
import { Button, Flex, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { typoVariant } from '@/theme/typo-variants';

type TypeOptions = 'edit' | 'create';

export default function Cities({ params }: { params: { slug: string } }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [type, setType] = useState<TypeOptions>('create');
  const methods = useForm({ defaultValues: { provinceId: Number(params.slug[1]), sortProvincesBy: 'asc' } });
  const { control, watch } = methods;

  const { data: citiesData, mutate: citiesMutate } = useMutation({
    mutationFn: async () => await getAllProvincesById(watch() as any),
    onSuccess: async data => {
      console.log('data', data);
    },
    onError: async data => {
      console.log('DATA Error', data);
    },
  });

  useEffect(() => {
    citiesMutate();
  }, []);

  console.log('CitiesData', citiesData?.Cities);

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
              name='sortProvincesBy'
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
        {citiesData?.Cities.map(item => (
          <AccordionWrapper
            key={item.id}
            hero={item.name}
            withEdit
            onEdit={e => {
              e.stopPropagation();
              setIsOpen(true);
              setType('edit');
            }}
          >
            دیتای این قسمت نیست
          </AccordionWrapper>
        ))}
        {/* <AccordionWrapper
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
        </AccordionWrapper> */}
      </Flex>
      {/* 
      ***
        Modal___________________________________________
      ***
      */}
      <CitiesManagementModal isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
    </FormProvider>
  );
}
