'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { StatusFilterOption } from '@/constants/data-management';
import { Button, Grid, SelectItem, SelectRoot, Text } from '@/libs/primitives';
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
   * const and variables
   * _______________________________________________________________________________
   */
  const { control, setValue, watch, reset } = useFormContext();
  const city = province.filter(item => item.id === Number(watch('provinceId')))[0]?.Cities;
  const subCategory = categories.filter(item => item.id === Number(watch('categoryId')))[0]?.children;

  console.log('watch', watch());

  const removeFilter = () => {
    reset();
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
            name='provinceId'
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
            name='cityId'
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
            name='categoryId'
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
        </Grid>
      </Grid>
      <Grid width={'100%'} columns={'2'} gap={'2'}>
        {/* TODO: define onClick For Buttons */}
        <Button size={'3'} variant='soft'>
          <Text {...typoVariant.body1}>اعمال فیلتر ها</Text>
        </Button>
        <Button size={'3'} onClick={() => removeFilter()}>
          <Text {...typoVariant.body1}>حذف فیلتر ها</Text>
        </Button>
      </Grid>
    </Grid>
  );
};

export default PointFilter;
