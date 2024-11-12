'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter, useSearchParams } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { StatusFilterOption } from '@/constants/data-management';
import { Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { updateUrl } from '@/libs/utils/updateUrl';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Category, Province } from '@/types/place/place-constant';

type Props = {
  province: Province[];
  categories: Category[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PointFilter = ({ province, categories, setIsOpen }: Props) => {
  /**
   * Variables and Constant
   * _______________________________________________________________________________
   */
  const { control, setValue, watch, reset } = useFormContext();
  const city = province.filter(item => item.id === Number(watch('pro')))[0]?.Cities;
  const subCategory = categories.filter(item => item.id === Number(watch('cat')))[0]?.children;

  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  console.log('watch', watch());
  /**
   * functions
   * _______________________________________________________________________________
   */
  const addFilter = () => {
    const values = watch();
    updateUrl(searchParams, values);
    queryClient.invalidateQueries({ queryKey: ['point-data'] });
    setIsOpen(false);
  };

  const removeFilter = () => {
    reset();
    queryClient.invalidateQueries({ queryKey: ['point-data'] });
    setIsOpen(false);
  };

  return (
    <Grid height={'776px'} style={{ alignContent: 'space-between' }}>
      <Grid width={'100%'} p={'4'} gapY={'4'}>
        <Grid gapY={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            موقعیت نقطه
          </Text>
          <Controller
            name='pro'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='استان'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('cit', '');
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
            name='cit'
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
                {city?.map(item => (
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
            دسته بندی
          </Text>
          <Controller
            name='cat'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='دسته بندی اصلی'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                }}
              >
                {categories.map(item => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
          <Controller
            name='subCategoryId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='زیردسته بندی'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                }}
              >
                {subCategory?.map(item => (
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
            وضعیت
          </Text>
          <Controller
            name='statusId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='وضعیت اطلاعات'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                }}
              >
                {StatusFilterOption.map((item, index) => (
                  <SelectItem key={index} value={String(item.id)}>
                    {item.value}
                  </SelectItem>
                ))}
              </SelectRoot>
            )}
          />
          <Controller
            name='pointTypeId'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                placeholder='نوع نقطه'
                value={String(field.value)}
                onValueChange={val => {
                  field.onChange(val);
                }}
              >
                <Text>دیتا باید فیکس بشه</Text>
              </SelectRoot>
            )}
          />
        </Grid>
      </Grid>
      <ModalAction submitButtonText='اعمال فیلتر ها' closeButtonText='حذف فیلتر ها' onCloseButton={() => removeFilter()} onSubmit={() => addFilter()} />
      {/* TODO: define onClick For Buttons */}
      {/* <Grid width={'100%'} columns={'2'} gap={'2'} p={'4'}>
        <Button size={'3'} variant='soft'>
          <Text {...typoVariant.body1}>اعمال فیلتر ها</Text>
        </Button>
        <Button size={'3'} onClick={() => removeFilter()}>
          <Text {...typoVariant.body1}>حذف فیلتر ها</Text>
        </Button>
      </Grid> */}
    </Grid>
  );
};

export default PointFilter;
