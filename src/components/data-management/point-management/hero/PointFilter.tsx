'use client';

import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { StatusFilterOption } from '@/constants/data-management';
import { Button, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Category, Province } from '@/types/place/place-constant';

type Props = {
  province: Province[];
  categories: Category[];
};

type FormData = {
  province: string;
  city: string;
  category: string;
  subCategory: string;
  status: 'کامل' | 'ناقص';
};

const PointFilter = ({ province, categories }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const methods = useForm<FormData>({ defaultValues: { province: '', city: '', category: '', subCategory: '', status: 'کامل' } });
  const { control, setValue, watch } = methods;

  const city = province.filter(item => item.id === Number(watch('province')))[0]?.Cities;
  const subCategory = categories.filter(item => item.id === Number(watch('category')))[0]?.children;

  console.log('watch', watch());

  return (
    <FormProvider {...methods}>
      <Grid height={'776px'} style={{ alignContent: 'space-between' }}>
        <Grid width={'100%'} p={'4'} gapY={'4'}>
          <Grid gapY={'2'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
              موقعیت نقطه
            </Text>
            <Controller
              name='province'
              control={control}
              render={({ field }) => (
                <SelectRoot
                  {...field}
                  placeholder='استان'
                  value={String(field.value)}
                  onValueChange={val => {
                    field.onChange(val);
                    setValue('city', '');
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
              name='city'
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
              name='category'
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
              name='subCategory'
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
              name='status'
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
          </Grid>
        </Grid>
        <Grid width={'100%'} columns={'2'} gap={'2'}>
          {/* TODO: define onClick For Buttons */}
          <Button size={'3'} variant='soft'>
            <Text>اعمال فیلتر ها</Text>
          </Button>
          <Button size={'3'}>
            <Text>حذف فیلتر ها</Text>
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export default PointFilter;
