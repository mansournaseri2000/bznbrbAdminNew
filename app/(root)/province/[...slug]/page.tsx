'use client';

import React, { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import styled from 'styled-components';

import { getAllProvincesById } from '@/api/province';
// import CitiesManagementModal from '@/components/confirmations/cities-management/CitiesManagementModal';
import { sortCategoryOptions } from '@/constants/additional-detail';
import { Button, Flex, Grid, IconButton, Modal, SelectItem, SelectRoot, Text, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { Close, Pencil } from '@/public/icon';
import { colorPalette } from '@/theme';
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
      </Flex>
      {/* 
      ***
        Modal___________________________________________
      ***
      */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader icon={<Close />} title={type === 'create' ? 'افزودن شهرستان' : 'ویرایش شهرستان'} handleClose={() => setIsOpen(false)} />
        <Grid gapY={'4'} p={'12px 16px'}>
          <Controller name='provinceId' control={control} render={({ field }) => <TextField {...field} placeholder='نام شهرستان' />} />
          <Flex p={'13.5px 16px'} width={'50%'} style={{ border: '2px solid red' }}>
            افزودن شهر
          </Flex>
          {citiesData?.Cities?.length === 0 ? (
            <Flex direction={'column'} p={'30.5px 16px'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
              <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
                هنوز شهری اضافه نشده است.
              </Text>
              <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
                از فیلد بالا استفاده کنید و شهر را به لیست اضافه کنید.
              </Text>
            </Flex>
          ) : (
            citiesData?.Cities?.length !== 0 && (
              <Flex align={'center'} gap={'5'} p={'4'} wrap={'wrap'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
                <Flex width={'fit-content'} p={'9.5px 16px'} align={'center'} gap={'4'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
                  <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                    تبریز
                  </Text>
                  <IconButton variant='surface' size={'1'}>
                    <Pencil />
                  </IconButton>
                  <IconButton variant='surface' size={'1'}>
                    <CloseIcon />
                  </IconButton>
                </Flex>
              </Flex>
            )
          )}
        </Grid>
        <ModalAction submitButtonText='ثبت' closeButtonText='لغو' onCloseButton={() => setIsOpen(false)} />
      </Modal>
      {/* <CitiesManagementModal isOpen={isOpen} setIsOpen={setIsOpen} type={type} /> */}
    </FormProvider>
  );
}

const CloseIcon = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
