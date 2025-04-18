'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Grid, SelectItem, SelectRoot, TextField } from '@/libs/primitives';
import { Category, Province } from '@/types/place/place-constant';

type Props = {
  categories: Category[];
  province: Province[];
};

const InitialData = ({ categories, province }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const methods = useFormContext();
  const { control, setValue, watch } = methods;
  const subCategory = categories.filter(item => item.id === Number(watch('parentCategoryId')))[0]?.children;
  const provinceCities = province.filter(item => item.id === Number(watch('provincesId')))[0]?.Cities;

  return (
    <Grid width={'100%'} gap={'14px'}>
      <Controller name='on_titile' control={control} render={({ field }) => <TextField {...field} label='رو تیتر' placeholder='رو تیتر' selectedValue={Boolean(field.value)} />} />
      <Controller name='title' control={control} render={({ field }) => <TextField {...field} label='عنوان مقاله' placeholder='عنوان مقاله' selectedValue={Boolean(field.value)} />} />
      <Controller name='slug' control={control} render={({ field }) => <TextField {...field} label='Custom URL' selectedValue={Boolean(field.value)} placeholder='Custom URL' />} />
      <Grid width={'100%'} columns={'2'} gap={'14px'}>
        <Controller name='writer' control={control} render={({ field }) => <TextField {...field} label='نام نویسنده' selectedValue={Boolean(field.value)} placeholder='نام نویسنده' />} />
        <Controller name='source' control={control} render={({ field }) => <TextField {...field} label='منبع' selectedValue={Boolean(field.value)} placeholder='منبع' />} />
        <Controller
          name='parentCategoryId'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              label='دسته بندی'
              selectedValue={Boolean(field.value)}
              placeholder='دسته بندی'
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
                setValue('categoryId', '');
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
          name='categoryId'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              label='زیر دسته بندی'
              selectedValue={Boolean(field.value)}
              placeholder='زیر دسته بندی'
              disabled={!Boolean(watch('parentCategoryId'))}
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
        <Controller
          name='provincesId'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              label='استان'
              selectedValue={Boolean(field.value)}
              placeholder='استان'
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
                setValue('citiesId', '');
              }}
            >
              {province.map(item => (
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
              label='شهرستان'
              selectedValue={Boolean(field.value)}
              placeholder='شهرستان'
              disabled={!Boolean(provinceCities)}
              value={String(field.value)}
              onValueChange={val => {
                field.onChange(val);
              }}
            >
              {provinceCities?.map(item => (
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

export default InitialData;
