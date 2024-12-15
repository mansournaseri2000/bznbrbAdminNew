'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter, useSearchParams } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { Flex, Grid, Heading, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { updateURLWithQueryParams } from '@/libs/utils/updateUrl';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Province } from '@/types/place/place-constant';

type Props = {
  province: Province[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterContent = ({ province, setIsOpen }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const { control, setValue, watch, reset } = useFormContext();

  const sourceCity = province.filter(item => item.id === Number(watch('originProvinceId')))[0]?.Cities;
  const departureCity = province.filter(item => item.id === Number(watch('destinationProvinceId')))[0]?.Cities;

  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const router = useRouter();

  console.log('watch', watch());

  /**
   * functions
   * _______________________________________________________________________________
   */
  const addFilter = () => {
    const values = watch();

    updateURLWithQueryParams(router, searchParams, values);
    queryClient.invalidateQueries({ queryKey: ['plans-data'] });
    setIsOpen(false);
  };

  // TODO: fix update url for remove filters
  const removeFilter = () => {
    reset();
    updateURLWithQueryParams(router, searchParams, {});

    queryClient.invalidateQueries({ queryKey: ['plans-data'] });
    setIsOpen(false);
  };

  return (
    <Grid height={'776px'} style={{ alignContent: 'space-between' }}>
      <Grid width={'100%'} p={'4'} gapY={'4'}>
        <Grid gapY={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            مبدا
          </Text>
          <Controller
            name='originProvinceId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='استان'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('originCityId', '');
                }}
              >
                {province?.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {/* TODO: fix item style */}
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
          <Controller
            name='originCityId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='شهر'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                }}
              >
                {sourceCity?.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
        </Grid>
        <Grid gapY={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            مقصد
          </Text>
          <Controller
            name='destinationProvinceId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='استان'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('destinationCityId', '');
                }}
              >
                {province?.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {/* TODO: fix item style */}
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
          <Controller
            name='destinationCityId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='شهر'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                }}
              >
                {departureCity?.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
          <Flex height={'350px'} align={'center'} justify={'center'} mt={'4'} style={{ border: '2px solid red' }}>
            <Heading as='h4' size={'4'}>
              date picker
            </Heading>
          </Flex>
        </Grid>
      </Grid>
      <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => removeFilter()} onSubmit={() => addFilter()} />
    </Grid>
  );
};

export default FilterContent;
