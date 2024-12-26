'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { PlusIcon } from '@radix-ui/react-icons';
import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { createCategory, createSubCategory } from '@/api/additional-detail';
import { Flex, IconButton, Text, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CreateCategoryBody, SubCategoryBody } from '@/types/additional-detail/additional-detail';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface CategoryFormData {
  categoryName: string;
  parent_id: number | null;
  subCategoryList: string[];
  subCategoryItem: string;
}

const CreateCategoryModal = (props: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { setIsOpen } = props;

  const methods = useForm<CategoryFormData>({
    defaultValues: {
      categoryName: '',
      parent_id: null,
      subCategoryList: [],
      subCategoryItem: '',
    },
  });
  const { control, watch, setValue, getValues } = methods;
  const queryClient = useQueryClient();

  /**
   * Services
   * _______________________________________________________________________________
   */
  const { mutate: createCategoryMutate, isPending: createCategoryPending } = useMutation({
    mutationFn: async (body: CreateCategoryBody) => await createCategory(body),
    onSuccess: data => {
      if (data.status === true) {
        ToastSuccess('دسته بندی مورد نظر با موفقیت ایجاد شد');
        setValue('parent_id', data.data.id);
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: createSubCategoryMutate, isPending: createSubCategoryPending } = useMutation({
    mutationFn: async (body: SubCategoryBody) => await createSubCategory(body),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['categories'] });
        ToastSuccess('دسته بندی مورد نظر با موفقیت ایجاد شد');
        setIsOpen(false);
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
    const subCategoryItem = getValues('subCategoryItem');
    const subCategoryList = getValues('subCategoryList');
    if (subCategoryItem && !subCategoryList.includes(subCategoryItem)) {
      setValue('subCategoryList', [...subCategoryList, subCategoryItem]);
      setValue('subCategoryItem', ''); // Clear the input
    }
  };

  const removeSubCategory = (index: number) => {
    const subCategoryList = getValues('subCategoryList');
    setValue(
      'subCategoryList',
      subCategoryList.filter((_, i) => i !== index)
    );
  };

  console.log(watch());

  return (
    <Flex direction={'column'} p={'12px 16px'} gap={'4'}>
      <Flex align={'center'} gap={'3'}>
        <Controller name='categoryName' control={control} render={({ field }) => <TextField {...field} placeholder='نام دسته بندی' />} />
        <IconButton size={'3'} variant='soft' onClick={() => createCategoryMutate({ name: watch('categoryName') })}>
          {createCategoryPending ? <Spinner /> : <PlusIcon />}
        </IconButton>
      </Flex>
      <Flex width={'50%'} align={'center'} gap={'3'}>
        <Controller name='subCategoryItem' control={control} render={({ field }) => <TextField disabled={!Boolean(watch('parent_id'))} {...field} placeholder='افزودن زیر دسته بندی' />} />
        <IconButton disabled={!Boolean(watch('parent_id'))} size={'3'} variant='soft' onClick={addSubCategory}>
          <PlusIcon />
        </IconButton>
      </Flex>

      <Flex width={'100%'} gap={'5'} wrap={'wrap'} p={'30.5px 16px'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
        {watch('subCategoryList').length === 0 ? (
          <Flex direction={'column'} gap={'5'}>
            <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
              هنوز زیردسته بندی اضافه نشده است.
            </Text>
            <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
              از فیلد بالا استفاده کنید و زیردسته بندی را به لیست اضافه کنید.
            </Text>
          </Flex>
        ) : (
          watch('subCategoryList').map((item, index) => (
            <Flex key={index} width={'fit-content'} gap={'3'} p={'9.5px 16px'} align={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                {item}
              </Text>

              <IconButton size={'1'} variant='surface' onClick={() => removeSubCategory(index)}>
                <CustomClose />
              </IconButton>
            </Flex>
          ))
        )}
      </Flex>
      <ModalAction
        submitButtonText='ثبت '
        closeButtonText='لغو'
        onCloseButton={() => setIsOpen(false)}
        onSubmit={() => createSubCategoryMutate({ parent_id: watch('parent_id') as number, subCategoryNames: watch('subCategoryList') })}
        isLoading={createSubCategoryPending}
      />
    </Flex>
  );
};

export default CreateCategoryModal;

const CustomClose = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
