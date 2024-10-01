'use client';

import { Controller, useFormContext, useWatch } from 'react-hook-form';

import { Flex, Grid, Select, TextArea, TextField } from '@/libs/primitives';
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
  const { control } = useFormContext();
  const categoryId = useWatch({ name: 'category_id' });
  const subCategoryId = useWatch({ name: 'sub_category_id' });
  const subCategory = categoris.find(item => item.id === categoryId)?.children;

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
        <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='نام عنوان' aria-label='textFiled' />} />
        <Flex gap={'20px'}>
          <Select selected={categoris.find(item => item.id === categoryId)?.name} errorText={''} items={categoris || []} placeholder={'دسته بندی'} store={'category_id'} />
          <Select selected={subCategory?.find(item => item.id === subCategoryId)?.name} errorText={''} items={subCategory || []} placeholder={'زیر دسته بندی'} store={'sub_category_id'} />
        </Flex>
        <Controller name='website' control={control} disabled render={({ field }) => <TextField {...field} placeholder='Custom URL' aria-label='textFiled' />} />
        <Controller name='basicInfoDescription' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات نقطه' aria-label='TextArea' />} />
        <Controller name='basicInfosummary' control={control} render={({ field }) => <TextArea {...field} placeholder='خلاصه توضیحات' aria-label='TextArea' />} />
      </Grid>
    </Container>
  );
};

export default PlaceInfo;

/**
 * styled-component
 * _______________________________________________________________________________
 */
