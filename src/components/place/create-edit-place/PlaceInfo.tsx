'use client';

import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { Flex, Grid, SelectItem, SelectRoot, TextArea, TextField } from '@/libs/primitives';
import { Category } from '@/types/place/place-constant';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  categoris: Category[];
};

const PlaceInfo = ({ categoris }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { control, setValue } = useFormContext();
  const categoryId = useWatch({ name: 'category_id' });
  const subCategoryId = useWatch({ name: 'sub_category_id' });
  const subCategory = categoris.find(item => item.id === Number(categoryId))?.children;

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Grid height={'max-content'} gap={'16px'}>
      <Controller
        name='name'
        control={control}
        render={({ field }) => <TextField {...field} label='نام عنوان' placeholder='نام عنوان' selectedValue={Boolean(field.value)} aria-label='textFiled' />}
      />
      <Flex gap={'20px'}>
        <Controller
          name='category_id'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              label='دسته بندی'
              placeholder={'دسته بندی'}
              selectedValue={Boolean(field.value)}
              value={String(categoryId)}
              onValueChange={val => {
                console.log(field.value, 'category_id');

                field.onChange(val);
                setValue('sub_category_id', '');
              }}
            >
              {categoris.map(item => {
                return (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                );
              })}
            </SelectRoot>
          )}
        />
        <Controller
          name='sub_category_id'
          control={control}
          render={({ field }) => (
            <SelectRoot
              {...field}
              label='زیر دسته بندی'
              placeholder={'زیر دسته بندی'}
              selectedValue={Boolean(field.value)}
              value={String(subCategoryId)}
              disabled={!Boolean(categoryId)}
              onValueChange={val => {
                console.log(field.value, 'test');
                field.onChange(val);
              }}
            >
              {subCategory &&
                subCategory.map(item => {
                  return (
                    <SelectItem key={item.id} value={String(item.id)}>
                      {item.name}
                    </SelectItem>
                  );
                })}
            </SelectRoot>
          )}
        />
      </Flex>
      <Controller
        name='slug'
        control={control}
        render={({ field }) => <TextField {...field} label='عنوان یکتا' placeholder='عنوان یکتا' selectedValue={Boolean(field.value)} aria-label='textFiled' />}
      />
      <Controller
        name='basicInfoDescription'
        control={control}
        render={({ field }) => <TextArea {...field} label='توضیحات تکمیلی' placeholder='توضیحات تکمیلی' selectedValue={Boolean(field.value)} aria-label='TextArea' rows={6} />}
      />
      <Controller
        name='basicInfosummary'
        control={control}
        render={({ field }) => <TextArea {...field} label='خلاصه توضیحات' placeholder='خلاصه توضیحات' selectedValue={Boolean(field.value)} aria-label='TextArea' rows={6} />}
      />
    </Grid>
  );
};

export default PlaceInfo;

/**
 * styled-component
 * _______________________________________________________________________________
 */
