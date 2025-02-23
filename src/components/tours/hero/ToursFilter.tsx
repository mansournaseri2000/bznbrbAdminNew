'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Flex, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import CustomSearch from '@/libs/shared/custom-search/CustomSearch';
import CustomDatePicker from '@/libs/shared/CustomDatePicker';
import ModalAction from '@/libs/shared/ModalAction';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Province } from '@/types/place/place-constant';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  province: Province[];
};

const ToursFilter = ({ setIsOpen, province }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const { control, setValue, watch } = useFormContext();
  const city = province.filter(item => item.id === Number(watch('provinceId')))[0]?.Cities;
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid width={'100%'} p={'4'} gapY={'4'}>
        <Grid gapY={'4'}>
          <Controller
            name='provinceId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                lable='مبدا'
                placeholder='استان'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(Number(val));
                  setValue('cityId', '');
                  setValue('page', 1);
                }}
              >
                {province?.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />

          <Controller
            name='cityId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                disabled={!Boolean(city)}
                placeholder='شهر'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('page', 1);
                }}
              >
                {city?.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            بودجه
          </Text>
          <Controller name='startBudget' control={control} render={({ field }) => <CustomSearch {...field} placeholder='از' type='input' />} />
          <Controller name='endBudget' control={control} render={({ field }) => <CustomSearch {...field} placeholder='تا' type='input' />} />
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
        </Grid>
      </Grid>
      <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => setIsOpen(false)} />
    </>
  );
};

export default ToursFilter;
