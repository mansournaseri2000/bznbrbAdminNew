'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Flex, Grid, Select, TextArea, TextField } from '@/libs/primitives';
import { Category } from '@/types/place';

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
  const { control, watch } = useFormContext();
  const subCategory = categoris.filter(item => item.id === watch('categoryId'))[0]?.children;

  /**
   * useEffect
   * _______________________________________________________________________________
   */

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
        <Controller
          name='name'
          control={control}
          render={({ field }) => <TextField {...field} placeholder='نام عنوان' aria-label='textFiled' />}
        />
        <Flex gap={'20px'}>
          <Select
            selected={categoris.find(item => item.id === watch('categoryId'))?.name}
            errorText={''}
            items={categoris ? categoris : []}
            placeholder={'دسته بندی'}
            store={'categoryId'}
          />
          <Select
            selected={subCategory.find(item => item.id === watch('subCategoryId'))?.name}
            errorText={''}
            items={subCategory ? subCategory : []}
            placeholder={'زیر دسته بندی'}
            store={'subCategoryId'}
          />
        </Flex>
        <Controller
          name='website'
          control={control}
          render={({ field }) => <TextField {...field} placeholder='Custom URL' aria-label='textFiled' />}
        />
        <Controller
          name='description'
          control={control}
          render={({ field }) => <TextArea {...field} placeholder='توضیحات نقطه' aria-label='TextArea' />}
        />
        <Controller
          name='summary'
          control={control}
          render={({ field }) => <TextArea {...field} placeholder='خلاصه توضیحات' aria-label='TextArea' />}
        />
      </Grid>
    </Container>
  );
};

export default PlaceInfo;

/**
 * styled-component
 * _______________________________________________________________________________
 */
