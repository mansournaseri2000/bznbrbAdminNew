'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from 'next/navigation';

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
          <Controller
            name='provincesId'
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
            name='citiesId'
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
          <Controller name='budgetStart' control={control} render={({ field }) => <CustomSearch {...field} placeholder='از' type='input' inputType='number' />} />
          <Controller name='budgetEnd' control={control} render={({ field }) => <CustomSearch {...field} placeholder='تا' type='input' inputType='number' />} />
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
      <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => removeFilter()} onSubmit={() => addFilter()} isLoading={isPending} />
    </>
  );
};

export default ToursFilter;
