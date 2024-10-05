'use client';

import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { Flex, Grid, SelectItem, SelectRoot, TextArea, TextField } from '@/libs/primitives';
import { Category } from '@/types/place/place-constant';

import Container from './Container';

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
    <Container height='auto' title='اطلاعات اولیه'>
      <Grid height={'max-content'} gap={'16px'}>
        <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='نام عنوان' title='نام عنوان' aria-label='textFiled' />} />
        <Flex gap={'20px'}>
          <Controller
            name='category_id'
            control={control}
            render={({ field }) => (
              <SelectRoot
                {...field}
                value={String(categoryId)}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('sub_category_id', '');
                }}
                placeholder={'دسته بندی'}
                lable='دسته بندی'
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
                value={String(subCategoryId)}
                onValueChange={val => {
                  field.onChange(val);
                  setValue('cityID', '');
                }}
                placeholder={'زیر دسته بندی'}
                lable='زیر دسته بندی'
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
        <Controller name='website' control={control} disabled render={({ field }) => <TextField title='Custom URL' {...field} placeholder='Custom URL' aria-label='textFiled' />} />
        <Controller name='basicInfoDescription' control={control} render={({ field }) => <TextArea title='توضیحات نقطه' {...field} placeholder='توضیحات نقطه' aria-label='TextArea' />} />
        <Controller name='basicInfosummary' control={control} render={({ field }) => <TextArea title='خلاصه توضیحات' {...field} placeholder='خلاصه توضیحات' aria-label='TextArea' />} />
      </Grid>
    </Container>
  );
};

export default PlaceInfo;

/**
 * styled-component
 * _______________________________________________________________________________
 */
