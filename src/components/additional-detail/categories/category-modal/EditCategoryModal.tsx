import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { editCategory, Param, UploadIcon, UploadImage } from '@/api/additional-detail';
import { Flex, TextField } from '@/libs/primitives';
import ImagePicker2 from '@/libs/shared/ImagePicker2';
import ItemWithUploader from '@/libs/shared/item-with-uploader/ItemWithUploader';
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
  imagePath: string;
  imageFile: File;
  iconPath: string;
  iconFile: File;
  localImagePath: File | null;
  localIconPath: File | null;
  isBanner: boolean;
  isIcon: boolean;
}

const EditCategoryModal = ({ data, setIsOpen }: Props) => {
  //   /*
  //    *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
  //    */
  const methods = useForm<CategoryFormData>({
    defaultValues: {
      name: data?.name,
      imagePath: data?.banner,
      iconPath: data?.icon,
      localImagePath: null,
      localIconPath: null,
      isBanner: Boolean(data?.banner) ? true : false,
      isIcon: Boolean(data?.icon) ? true : false,
    },
  });
  const { control, watch } = methods;
  const queryClient = useQueryClient();
  //   /**
  //    * Services
  //    * _______________________________________________________________________________
  //    */

  const { mutate: uploadImageMutate } = useMutation({
    mutationFn: async (body: Param) => await UploadImage(body),
  });

  const { mutate: uploadIconMutate } = useMutation({
    mutationFn: async (body: Param) => await UploadIcon(body),
  });

  const { mutate: editCategoryMutate, isPending: editCategoryPending } = useMutation({
    mutationFn: async () => await editCategory(data.id, watch('name') as any),
    onSuccess: localData => {
      if (localData.status === true) {
        const localImage = watch('localImagePath');
        const localIcon = watch('localIconPath');

        if (localImage) {
          uploadImageMutate({
            categoryId: String(data.id),
            file: watch('imagePath') as any,
            type: 'CATEGORY',
          });
        }

        if (localIcon) {
          uploadIconMutate({
            categoryId: String(data.id),
            file: watch('iconPath') as any,
            type: 'CATEGORY',
          });
        }

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
    <FormProvider {...methods}>
      <Flex direction={'column'} align={'center'} p={'12px 16px'} gap={'4'}>
        <Flex gap={'3'}>
          {watch('imagePath') ? (
            <ItemWithUploader resetStore='isBanner' type='image' localPath={`${watch('localImagePath')}`} filePath={data?.banner} isOrigin={watch('isBanner')} />
          ) : (
            <ImagePicker2 resetStore='isBanner' name='imagePath' localPath='localImagePath'>
              <Uploader type='pic' />
            </ImagePicker2>
          )}
          {watch('iconPath') ? (
            <ItemWithUploader resetStore='isIcon' type='svg' localPath={`${watch('localIconPath')}`} filePath={data?.icon} isOrigin={watch('isIcon')} />
          ) : (
            <ImagePicker2 resetStore='isIcon' name='iconPath' localPath='localIconPath'>
              <Uploader type='icon' />
            </ImagePicker2>
          )}
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
    </FormProvider>
  );
};

export default EditCategoryModal;
