'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import { Flex, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
// import CustomSearch from '@/libs/shared/custom-search/CustomSearch';
import CustomDatePicker from '@/libs/shared/CustomDatePicker';
import ModalAction from '@/libs/shared/ModalAction';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Province } from '@/types/place/place-constant';

import PriceField from '../PriceField';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  province: Province[];
  onSubmit: VoidFunction;
  isPending: boolean;
};

const ToursFilter = ({ setIsOpen, province, onSubmit, isPending }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const router = useRouter();

  const { control, setValue, watch, reset } = useFormContext();
  const city = province.filter(item => item.id === Number(watch('provincesId')))[0]?.Cities;
  /**
   * Methods
   * _______________________________________________________________________________
   */
  const addFilter = () => {
    onSubmit();
    setIsOpen(false);
  };

  const removeFilter = () => {
    reset({
      page: 1,
      limit: 10,
      searchQuery: '',
      sortDate: '',
      sort: '',
      provincesId: '',
      citiesId: '',
      budgetStart: '',
      budgetEnd: '',
      departureDateStart: '',
      departureDateEnd: '',
      returnDateStart: '',
      returnDateEnd: '',
    });
    router.replace('/tours');
    onSubmit();
    setIsOpen(false);
  };
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid width={'100%'} p={'4'} gapY={'4'}>
        <Grid gapY={'4'}>
          <Grid gapY={'4'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12], paddingInlineStart: 8 }}>
              مبدا
            </Text>
            <Controller
              name='provincesId'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  label='استان'
                  placeholder='استان'
                  selectedValue={Boolean(field.value)}
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
              name='citiesId'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  label='شهر'
                  placeholder='شهر'
                  selectedValue={Boolean(field.value)}
                  disabled={!Boolean(city)}
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
          </Grid>
          <Grid gapY={'4'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12], paddingInlineStart: 8 }}>
              بودجه
            </Text>
            <PriceField control={control} placeholder='از' name='budgetStart' label='بودجه از' />
            <PriceField control={control} placeholder='تا' name='budgetEnd' label='بودجه تا' />
          </Grid>
          <Flex direction={'column'} gap={'4'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12], paddingInlineStart: 8 }}>
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
                    label='از تاریخ'
                    placeholder='از تاریخ'
                    selectedValue={Boolean(item.field.value)}
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
                    label='تا تاریخ'
                    placeholder='تا تاریخ'
                    selectedValue={Boolean(item.field.value)}
                    value={Boolean(item.field.value) ? new Date(item.field.value).toISOString() : ''}
                    minDate={watch('departureDateStart')}
                    inputMode='none'
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
          <Flex direction={'column'} gap={'4'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12], paddingInlineStart: 8 }}>
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
                    label='از تاریخ'
                    placeholder='از تاریخ'
                    selectedValue={Boolean(item.field.value)}
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
                    label='تا تاریخ'
                    placeholder='تا تاریخ'
                    selectedValue={Boolean(item.field.value)}
                    minDate={watch('returnDateStart')}
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
      <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => removeFilter()} onSubmit={() => addFilter()} isLoading={isPending} />
    </>
  );
};

export default ToursFilter;
