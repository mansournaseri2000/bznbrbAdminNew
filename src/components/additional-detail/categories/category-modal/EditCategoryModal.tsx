import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { editCategory } from '@/api/additional-detail';
import { Flex, TextField } from '@/libs/primitives';
import ImagePicker2 from '@/libs/shared/ImagePicker2';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import Uploader from '@/libs/shared/uploader/Uploader';
import { CategoriesResponse } from '@/types/additional-detail/additional-detail';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'edit-category' }>>;
  data: CategoriesResponse;
};

interface CategoryFormData {
  name: string;
  parent_id: number | null;
  imagePath: string;
  imageFile: File;
  iconPath: string;
  iconFile: File;
}

const EditCategoryModal = ({ data, setIsOpen }: Props) => {
  //   /*
  //    *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
  //    */
  const methods = useForm<CategoryFormData>({
    defaultValues: {
      name: data?.name,
      parent_id: data?.parent_id,
    },
  });
  const { control, watch } = methods;
  const queryClient = useQueryClient();
  //   /**
  //    * Services
  //    * _______________________________________________________________________________
  //    */
  const { mutate: editCategoryMutate, isPending: editCategoryPending } = useMutation({
    mutationFn: async () => await editCategory(data.id, watch('name') as any),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['categories'] });
        ToastSuccess('دسته بندی مورد نظر با موفقیت ویرایش شد');
        setIsOpen({ key: 'edit-category', isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });
  //   /**
  //    * Hooks and Methods
  //    * _______________________________________________________________________________
  //    */

  return (
    <>
      <Flex direction={'column'} align={'center'} p={'12px 16px'} gap={'4'}>
        <Flex gap={'3'}>
          <ImagePicker2 name=''>
            <Uploader type='pic' />
          </ImagePicker2>
          <ImagePicker2 name=''>
            <Uploader type='icon' />
          </ImagePicker2>
        </Flex>
        <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='' style={{ width: '50%', margin: '0 auto' }} />} />
      </Flex>
      <ModalAction
        submitButtonText='ثبت '
        closeButtonText='لغو'
        onCloseButton={() => setIsOpen({ key: 'edit-category', isOpen: false })}
        onSubmit={() => editCategoryMutate()}
        isLoading={editCategoryPending}
      />
    </>
  );
};

export default EditCategoryModal;
