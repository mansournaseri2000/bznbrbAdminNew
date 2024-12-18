'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Flex, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Province } from '@/types/place/place-constant';

import CustomDatePicker from './CustomDatePicker';

type Props = {
  province: Province[];
};

const FilterContent = ({ province }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const { control, setValue, watch } = useFormContext();

  const sourceCity = province.filter(item => item.id === Number(watch('originProvinceId')))[0]?.Cities;
  const departureCity = province.filter(item => item.id === Number(watch('destinationProvinceId')))[0]?.Cities;

  console.log('watch', watch());

  return (
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
                field.onChange(Number(val));
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
                field.onChange(Number(val));
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
      </Grid>
      <Flex direction={'column'} gap={'2'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          تاریخ رفت
        </Text>
        <Grid gap={'16px'} columns={'2'}>
          <Controller
            name={'departureDateStart'}
            control={control}
            render={item => (
              <CustomDatePicker
                {...item}
                inputMode='none'
                placeholder='از تاریخ'
                value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                onChangeValue={(val: any) => {
                  setValue('departureDateStart', new Date(val));
                }}
              />
            )}
          />
          <Controller
            name={'departureDateEnd'}
            control={control}
            render={item => (
              <CustomDatePicker
                {...item}
                inputMode='none'
                placeholder='تا تاریخ'
                value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                onChangeValue={(val: any) => {
                  setValue('departureDateEnd', new Date(val));
                }}
              />
            )}
          />
        </Grid>
      </Flex>
      <Flex direction={'column'} gap={'2'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          تاریخ رفت
        </Text>
        <Grid gap={'16px'} columns={'2'}>
          <Controller
            name={'departureDateStart'}
            control={control}
            render={item => (
              <CustomDatePicker
                {...item}
                inputMode='none'
                placeholder='از تاریخ'
                value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                onChangeValue={(val: any) => {
                  setValue('returnDateStart', new Date(val));
                }}
              />
            )}
          />
          <Controller
            name={'departureDateEnd'}
            control={control}
            render={item => (
              <CustomDatePicker
                {...item}
                inputMode='none'
                placeholder='تا تاریخ'
                value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                onChangeValue={(val: any) => {
                  setValue('returnDateEnd', new Date(val));
                }}
              />
            )}
          />
        </Grid>
      </Flex>
    </Grid>
  );
};

export default FilterContent;
