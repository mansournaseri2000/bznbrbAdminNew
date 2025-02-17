import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createCategoryList } from '@/api/additional-detail';
import { Box, Flex, Text } from '@/libs/primitives';
import CustomAddItem from '@/libs/shared/custom-add-item/CustomAddItem';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CategoriesResponse, CreateCategoryBody } from '@/types/additional-detail/additional-detail';

type Props = {
  data: CategoriesResponse[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface CategoryFormData {
  name: string;
  parent_id: number | null;
  categoryList: string[];
}

const CreateCategoryModal = ({ data, setIsOpen }: Props) => {
  //   /*
  //    *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
  //    */
  const methods = useForm<CategoryFormData>({
    defaultValues: {
      name: '',
      parent_id: 0,
      categoryList: data.map(item => item.name),
    },
  });
  const { control, watch, setValue, getValues } = methods;
  const queryClient = useQueryClient();

  //   /**
  //    * Services
  //    * _______________________________________________________________________________
  //    */
  const { mutate: createCategoryMutate, isPending: createCategoryPending } = useMutation({
    mutationFn: async (body: CreateCategoryBody[]) => await createCategoryList(body),
    onSuccess: data => {
      if (data.status === true) {
        ToastSuccess('دسته بندی مورد نظر با موفقیت ایجاد شد');
        queryClient.invalidateQueries({ queryKey: ['categories'] });
        setIsOpen(false);
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  //   /**
  //    * Methods
  //    * _______________________________________________________________________________
  //    */

  const addCategory = () => {
    const categoryItem = getValues('name').trim();
    const categoryList = getValues('categoryList');
    if (categoryItem && !categoryList?.includes(categoryItem)) {
      setValue('categoryList', [...categoryList, categoryItem]);
      setValue('name', '');
    } else if (categoryItem) {
      ToastError('دسته بندی تکراری است');
    }
  };

  const handleSubmit = () => {
    const categoryList = getValues('categoryList');
    const existingCategories = data.map(item => item.name);
    const newCategories = categoryList
      .filter(name => !existingCategories.includes(name))
      .map(name => ({
        name,
        parent_id: 0,
      }));

    if (newCategories.length > 0) {
      createCategoryMutate(newCategories);
    } else {
      ToastError('هیچ دسته بندی جدیدی اضافه نشده است');
    }
  };

  return (
    <>
      <Flex direction={'column'} p={'12px 16px'} gap={'4'}>
        <Box width={'50%'}>
          <Controller name='name' control={control} render={({ field }) => <CustomAddItem {...field} placeholder='افزودن دسته بندی' onClick={() => addCategory()} />} />
        </Box>
        <Flex width={'100%'} align={'center'} gap={'5'} p={'4'} wrap={'wrap'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
          {watch('categoryList').map((item, index) => (
            <Box key={index} p={'9.5px 16px'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                {item}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
      <ModalAction submitButtonText='ثبت' closeButtonText='لغو' onSubmit={handleSubmit} onCloseButton={() => setIsOpen(false)} isLoading={createCategoryPending} />
    </>
  );
};

export default CreateCategoryModal;
