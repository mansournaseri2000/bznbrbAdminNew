'use client';

import React, { useState } from 'react';

import { PlusIcon } from '@radix-ui/react-icons';
import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getCategories } from '@/api/additional-detail';
import { Button, Flex, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import CategoryItems from './category-items/CategoryItems';
import CreateCategoryModal from './category-modal/CreateCategoryModal';

const Categories = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isFetching: categoriesFetching,
    isError: categoriesError,
  } = useQuery({ queryKey: ['categories'], queryFn: async () => await getCategories() });

  /*
   *** Loading & Error_________________________________________________________________________________________________________________________________________________________________
   */
  if (categoriesLoading || categoriesFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 3 }} />
      </Flex>
    );
  if (!categoriesData || categoriesError) return ToastError('مشکلی پیش آمده. لطفا مجددا تلاش نمایید');
  console.log('category data', categoriesData);

  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
  return (
    <>
      <Flex width={'100%'} direction={'column'} gap={'5'}>
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <Button size={'3'} variant='ghost' onClick={() => setIsOpen(true)} style={{ paddingBlock: 11.5 }}>
            <Flex align={'center'} gap={'2'}>
              <PlusIcon width={16} height={16} style={{ color: colorPalette.blue[10] }} />
              <Text {...typoVariant.body1}>افزودن دسته بندی</Text>
            </Flex>
          </Button>
        </Flex>
        {categoriesData?.map((item, index) => (
          <CategoryItems key={item.id} selected={selectedItem === item.id} onSelect={() => setSelectedItem(item.id)} currentIndex={index} {...item} />
        ))}
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title={'افزودن دسته بندی'} handleClose={() => setIsOpen(false)} />
        <CreateCategoryModal data={categoriesData} setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default Categories;
