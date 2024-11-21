import React from 'react';

import CategoriesCard from '@/components/develop/additional-detail/categories-card/CategoriesCard';
import { Button, Flex } from '@/libs/primitives';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';

import CategoriesPagination from './categories-pagination/CategoriesPagination';

const categoriesOptions = [
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
  'زیردسته بندی',
];

const Categories = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} p={'4'}>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Button size={'3'}>افزودن دسته بندی</Button>
        <Flex width={'240px'} align={'center'} justify={'center'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}>
          مرتب سازی
        </Flex>
      </Flex>
      <AccordionWrapper hero='طبیعت گردی'>
        <CategoriesCard header='دسته بندی اول' category={categoriesOptions} />
      </AccordionWrapper>
      <AccordionWrapper hero='طبیعت گردی'>
        <CategoriesCard header='دسته بندی اول' category={categoriesOptions} />
      </AccordionWrapper>{' '}
      <AccordionWrapper hero='طبیعت گردی'>
        <CategoriesCard header='دسته بندی اول' category={categoriesOptions} />
      </AccordionWrapper>{' '}
      <AccordionWrapper hero='طبیعت گردی'>
        <CategoriesCard header='دسته بندی اول' category={categoriesOptions} />
      </AccordionWrapper>{' '}
      <AccordionWrapper hero='طبیعت گردی'>
        <CategoriesCard header='دسته بندی اول' category={categoriesOptions} />
      </AccordionWrapper>
      <CategoriesPagination />
    </Flex>
  );
};

export default Categories;
