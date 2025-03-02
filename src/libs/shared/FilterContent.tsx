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
  // onSubmit: () => void;
};

const FilterContent = ({ province }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const { control, setValue, watch } = useFormContext();
  const sourceCity = province.filter(item => item.id === Number(watch('originProvinceId')))[0]?.Cities;
  const departureCity = province.filter(item => item.id === Number(watch('destinationProvinceId')))[0]?.Cities;

  /**
   * functions
   * _______________________________________________________________________________
   */

  return (
    <Grid width={'100%'} p={'4'} gapY={'4'}>
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
                  const newDate = new Date(val);
                  newDate.setHours(0, 0, 0, 0); // Set hour to 23, minutes to 59, seconds to 0, milliseconds to 0
                  setValue('departureDateStart', newDate.getTime());
                  setValue('page', 1);
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
                value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                minDate={watch('departureDateStart')}
                inputMode='none'
                placeholder='تا تاریخ'
                onChangeValue={(val: any) => {
                  const newDate = new Date(val);
                  newDate.setHours(23, 59, 0, 0);
                  setValue('departureDateEnd', newDate.getTime());
                  setValue('page', 1);
                }}
              />
            )}
          />
        </Grid>
      </Flex>
      <Flex direction={'column'} gap={'2'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          تاریخ برگشت
        </Text>
        <Grid gap={'16px'} columns={'2'}>
          <Controller
            name={'returnDateStart'}
            control={control}
            render={item => (
              <CustomDatePicker
                {...item}
                inputMode='none'
                placeholder='از تاریخ'
                value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                onChangeValue={(val: any) => {
                  const newDate = new Date(val);
                  newDate.setHours(0, 0, 0, 0); // Set hour to 23, minutes to 59, seconds to 0, milliseconds to 0
                  setValue('returnDateStart', newDate.getTime());
                  setValue('page', 1);
                }}
              />
            )}
          />
          <Controller
            name={'returnDateEnd'}
            control={control}
            render={item => (
              <CustomDatePicker
                {...item}
                value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                inputMode='none'
                minDate={watch('returnDateStart')}
                placeholder='تا تاریخ'
                onChangeValue={(val: any) => {
                  const newDate = new Date(val);
                  newDate.setHours(23, 59, 0, 0);
                  setValue('returnDateEnd', newDate.getTime());
                  setValue('page', 1);
                }}
              />
            )}
          />
        </Grid>
      </Flex>
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
                setValue('page', 1);
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
              disabled={!Boolean(sourceCity)}
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(Number(val));
                setValue('page', 1);
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
                setValue('page', 1);
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
              disabled={!Boolean(departureCity)}
              placeholder='شهر'
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
                setValue('page', 1);
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
    </Grid>
  );
};

export default FilterContent;
