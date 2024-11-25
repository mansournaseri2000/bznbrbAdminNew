'use client';

import React, { useState } from 'react';

import CategoriesCard from '@/components/develop/additional-detail/categories-card/CategoriesCard';
import { Grid } from '@/libs/primitives';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';

import CategoryModal from '../category-modal/CategoryModal';

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

const CategoryItems = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Grid width={'100%'} gapY={'5'}>
        <AccordionWrapper
          hero='طبیعت گردی'
          withEdit
          onEdit={e => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          <CategoriesCard header='دسته بندی اول' category={categoriesOptions} />
        </AccordionWrapper>
        <AccordionWrapper hero='طبیعت گردی' withEdit onEdit={() => setIsOpen(true)}>
          <CategoriesCard header='دسته بندی اول' category={categoriesOptions} />
        </AccordionWrapper>{' '}
        <AccordionWrapper hero='طبیعت گردی' withEdit onEdit={() => setIsOpen(true)}>
          <CategoriesCard header='دسته بندی اول' category={categoriesOptions} />
        </AccordionWrapper>{' '}
        <AccordionWrapper hero='طبیعت گردی' withEdit onEdit={() => setIsOpen(true)}>
          <CategoriesCard header='دسته بندی اول' category={categoriesOptions} />
        </AccordionWrapper>{' '}
        <AccordionWrapper hero='طبیعت گردی' withEdit onEdit={() => setIsOpen(true)}>
          <CategoriesCard header='دسته بندی اول' category={categoriesOptions} />
        </AccordionWrapper>
      </Grid>
      <CategoryModal isOpen={isOpen} setIsOpen={setIsOpen} type='edit_category' />
    </>
  );
};

export default CategoryItems;
