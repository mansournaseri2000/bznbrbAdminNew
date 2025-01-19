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
  onSubmit: () => void;
};

const FilterContent = ({ province, onSubmit }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const { control, setValue, watch } = useFormContext();

  const sourceCity = province.filter(item => item.id === Number(watch('originProvinceId')))[0]?.Cities;
  const departureCity = province.filter(item => item.id === Number(watch('destinationProvinceId')))[0]?.Cities;

  console.log('watch', watch());

  /**
   * functions
   * _______________________________________________________________________________
   */

  const sample = (date: Date) => {
    const currentDate = new Date(date);
    currentDate.setDate(date.getDate() + 1); // Add one day

    return new Date(currentDate);
  };

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
              disabled={!Boolean(sourceCity)}
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
              disabled={!Boolean(departureCity)}
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
                  setValue('departureDateEnd', sample(new Date(val)));
                  onSubmit();
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
                  setValue('departureDateEnd', new Date(val));
                  onSubmit();
                }}
                disabled={!watch('departureDateStart')}
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
                  setValue('returnDateStart', new Date(val));
                  setValue('returnDateEnd', sample(new Date(val)));
                  onSubmit();
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
                  setValue('returnDateEnd', new Date(val));
                  onSubmit();
                }}
                disabled={!watch('returnDateStart')}
              />
            )}
          />
        </Grid>
      </Flex>
    </Grid>
  );
};

export default FilterContent;
