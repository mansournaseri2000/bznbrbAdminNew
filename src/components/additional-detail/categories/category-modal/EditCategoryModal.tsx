'use client';

import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { PlusIcon } from '@radix-ui/react-icons';
import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { createSubCategory, deleteCategory, editCategory, editCategoryBySubCategories, getSingleCategory } from '@/api/additional-detail';
import { Flex, IconButton, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Close, Pencil } from '@/public/icon';
import { colorPalette } from '@/theme';
import { CategoriesResponse, ChildrenDetail, SubCategoryBody } from '@/types/additional-detail/additional-detail';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'edit' }>>;
  data: CategoriesResponse;
};

interface CategoryFormData {
  categoryName: string;
  parent_id: number | null;
  subCategoryList: ChildrenDetail[];
  subCategoryItem: string;
  subCategoryField: string;
}

const EditCategoryModal = ({ setIsOpen, data }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */

  const { data: singleCategoryData } = useQuery({ queryKey: ['single-category'], queryFn: async () => await getSingleCategory(data.id), initialData: data });

  const methods = useForm<CategoryFormData>({
    defaultValues: {
      categoryName: singleCategoryData.name,
      parent_id: singleCategoryData.parent_id,
      subCategoryList: singleCategoryData.children,
      subCategoryItem: '',
    },
  });
  const { control, watch, setValue } = methods;
  const queryClient = useQueryClient();

  useEffect(() => {
    setValue('subCategoryList', singleCategoryData.children);
  }, [singleCategoryData]);

  /**
   * Services
   * _______________________________________________________________________________
   */

  // console.log('SINGLE CATEGORY DATA', singleCategoryData, data);
  console.log('WATCH FOR NAME', watch('categoryName'));

  const { mutate: editCategoryNameMutate, isPending: editCategoryNamePending } = useMutation({
    mutationFn: async () => await editCategory(data.id, watch('categoryName') as any),
    onSuccess: data => {
      if (data.status === true) {
        ToastSuccess('دسته بندی مورد نظر با موفقیت ویرایش شد');
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: createSubCategoryMutate, isPending: createSubCategoryPending } = useMutation({
    mutationFn: async (body: SubCategoryBody) => await createSubCategory(body),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['single-category'] });
        ToastSuccess('زیردسته بندی مورد نظر با موفقیت ایجاد شد');
        setValue('subCategoryItem', '');
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: deleteSubCategoryMutate } = useMutation({
    mutationFn: async (id: number) => deleteCategory(id),
    onSuccess: async data => {
      if (data.status === true) {
        ToastSuccess('زیردسته بندی مورد نظر با موفقیت حذف شد');
        queryClient.invalidateQueries({ queryKey: ['single-category'] });
      } else {
        ToastError(data.message);
      }
    },
  });

  const { mutate: editCategoryMutate, isPending: editCategoryPending } = useMutation({
    mutationFn: async () => await editCategoryBySubCategories(watch('subCategoryList') as any),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['categories'] });
        ToastSuccess('دسته بندی مورد نظر با موفقیت ویرایش شد');
        setIsOpen({ key: 'edit', isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */

  const addSubCategory = () => {
    createSubCategoryMutate({ parent_id: singleCategoryData.id, subCategoryNames: [watch('subCategoryItem')] });
  };

  const removeSubCategory = (id: number) => {
    deleteSubCategoryMutate(id);
  };

  return (
    <Flex direction={'column'} p={'12px 16px'} gap={'4'}>
      <Flex align={'center'} gap={'3'}>
        <Controller name='categoryName' control={control} render={({ field }) => <TextField {...field} placeholder='نام دسته بندی' />} />
        <IconButton size={'3'} variant='soft' onClick={() => editCategoryNameMutate()}>
          {editCategoryNamePending ? <Spinner /> : <Pencil />}
        </IconButton>
      </Flex>
      <Flex width={'50%'} align={'center'} gap={'3'}>
        <Controller name='subCategoryItem' control={control} render={({ field }) => <TextField {...field} placeholder='افزودن زیر دسته بندی' />} />
        <IconButton size={'3'} variant='soft' onClick={addSubCategory}>
          {createSubCategoryPending ? <Spinner /> : <PlusIcon />}
        </IconButton>
      </Flex>

      <Flex width={'100%'} gap={'5'} wrap={'wrap'} p={'30.5px 16px'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
        {watch('subCategoryList')?.map((item, index) => (
          <Flex key={index} width={'fit-content'} gap={'3'} p={'9.5px 16px'} align={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
            <Controller
              name={`subCategoryList[${index}].name` as any}
              control={control}
              render={({ field }) => (
                <TextField {...field} placeholder='' variant='soft' style={{ marginBottom: '-10px', backgroundColor: colorPalette.gray[3], border: 'none', width: 'fit-content' }} />
              )}
            />

            <IconButton size={'1'} variant='surface' onClick={() => removeSubCategory(item.id)}>
              <CustomClose />
            </IconButton>
          </Flex>
        ))}
      </Flex>
      <ModalAction
        submitButtonText='ثبت '
        closeButtonText='لغو'
        onCloseButton={() => setIsOpen({ key: 'edit', isOpen: false })}
        onSubmit={() => editCategoryMutate()}
        isLoading={editCategoryPending}
      />
    </Flex>
  );
};

export default EditCategoryModal;

const CustomClose = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
