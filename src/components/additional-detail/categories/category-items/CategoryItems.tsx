'use client';

/* 
__________________________________________________________________________________________________________________________________________________________
Description for this component :
******
To prevent data from being fetched for all items 
an forwardRef was used so that after clicking on each item, the data for that item is fetched.
__________________________________________________________________________________________________________________________________________________________
*/
import React, { forwardRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createSubCategory, deleteCategory, getSingleCategory } from '@/api/additional-detail';
import ChipsItem from '@/components/additional-detail/chips-item/ChipsItem';
import { Box, Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import CustomAddItem from '@/libs/shared/custom-add-item/CustomAddItem';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CategoriesResponse } from '@/types/additional-detail/additional-detail';

import EditCategoryModal from '../category-modal/EditCategoryModal';

type CategoryItemsProps = CategoriesResponse & {
  selected: boolean;
  onSelect: VoidFunction;
  currentIndex: number;
};

type ModalStateType = {
  isOpen: boolean;
  key: 'edit-category' | 'delete-category';
};

const CategoryItems = forwardRef<HTMLDivElement, CategoryItemsProps>((props, ref) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { name, id, isEditable, hasMedia, selected, onSelect } = props;
  const [modalState, setModalState] = useState<ModalStateType>({ isOpen: false, key: 'edit-category' });
  const queryClient = useQueryClient();

  const methods = useForm({ defaultValues: { name: '' } });
  const { control, watch, setValue, getValues } = methods;

  /* 
    ****
    Services
    ****_____________________________________________________________________________
   */

  const {
    data: singleCategoryData,
    isLoading: singleCategoryLoading,
    isFetching: singleCategoryFetching,
  } = useQuery({ queryKey: ['single-category', selected], queryFn: async () => getSingleCategory(id), initialData: props, enabled: selected === true });

  const { mutate: deleteCategoryMutate, isPending: deleteCategoryPending } = useMutation({
    mutationFn: async () => deleteCategory(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['categories'] });
        ToastSuccess('دسته بندی مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: createSubCategoryMutate, isPending: createSubCategoryPending } = useMutation({
    mutationFn: async () => createSubCategory({ name: watch('name'), parent_id: id }),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['single-category'] });
        setValue('name', '');
        ToastSuccess('زیر دسته بندی مورد نظر با موفقیت ایجاد شد');
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });
  //   /**
  //    * Methods
  //    * _______________________________________________________________________________
  //    */
  const handleCreateSubCategory = () => {
    const subCategoryItem = getValues('name').trim();
    if (!subCategoryItem) {
      ToastError('نام زیر دسته بندی نمی‌تواند خالی باشد');
      return;
    }
    if (singleCategoryData.children.some(item => item.name === subCategoryItem)) {
      ToastError('این زیر دسته بندی از قبل وجود دارد');
      return;
    }
    createSubCategoryMutate();
  };

  return (
    <>
      <Grid width={'100%'} gapY={'5'} ref={ref} onClick={onSelect}>
        <AccordionWrapper
          hero={name}
          withEdit
          withDelete
          hasMedia={hasMedia === true}
          isDisableDelete={isEditable === false}
          onEdit={e => {
            e.stopPropagation();
            setModalState({ key: 'edit-category', isOpen: true });
          }}
          onDelete={e => {
            e.stopPropagation();
            setModalState({ key: 'delete-category', isOpen: true });
          }}
        >
          <Flex direction={'column'} gap={'5'}>
            <Flex width={'100%'} align={'center'} gap={'5'} wrap={'wrap'}>
              {singleCategoryLoading || singleCategoryFetching ? (
                <Spinner style={{ margin: '0 auto', scale: 1.2 }} />
              ) : singleCategoryData?.children.length === 0 ? (
                <Flex direction={'column'} gap={'5'}>
                  <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
                    هنوز زیر دسته بندی اضافه نشده است.
                  </Text>
                  <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
                    از فیلد زیر استفاده کنید و زیردسته بندی را به لیست اضافه کنید.
                  </Text>
                </Flex>
              ) : (
                <>
                  {singleCategoryData?.children.map(item => (
                    <ChipsItem type='category' key={item.id} label={item.name} hasMedia={item.hasMedia} id={item.id} data={item} />
                  ))}
                </>
              )}
            </Flex>
            <Box width={'40%'}>
              <Controller
                name='name'
                control={control}
                render={({ field }) => <CustomAddItem {...field} placeholder='افزودن زیر دسته بندی' onClick={() => handleCreateSubCategory()} isLoading={createSubCategoryPending} />}
              />
            </Box>
          </Flex>
        </AccordionWrapper>
      </Grid>
      {/* 
          ****
          Modals _____________________________________________________________________________
          ****
        */}
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {/* 
          ****
          Edit Category _____________________________________________________________________________
          ****
        */}
        {modalState.key === 'edit-category' && (
          <>
            <ModalHeader title={'ویرایش دسته بندی'} handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <EditCategoryModal setIsOpen={() => setModalState({ key: 'edit-category', isOpen: false })} data={props} />
          </>
        )}
        {/* 
          ****
          Delete Category _____________________________________________________________________________
          ****
        */}
        {modalState.key === 'delete-category' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از حذف این دسته بندی اطمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteCategoryMutate()}>
                <Text {...typoVariant.body3}>{deleteCategoryPending ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
      </Modal>
    </>
  );
});

export default React.memo(CategoryItems);
