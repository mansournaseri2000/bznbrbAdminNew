import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { editFeatureItem, FeatureUploaderParams, UploadIconForFeature, UploadImageForFeature } from '@/api/additional-detail';
import { Flex, TextField } from '@/libs/primitives';
import ImagePicker2 from '@/libs/shared/ImagePicker2';
import ItemWithUploader from '@/libs/shared/item-with-uploader/ItemWithUploader';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import Uploader from '@/libs/shared/uploader/Uploader';
import { FeatureDetail } from '@/types/additional-detail/additional-detail';

type Props = {
  data: FeatureDetail;
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'edit-feature' }>>;
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

const EditFeatureItemModal = ({ setIsOpen, data }: Props) => {
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
    mutationFn: async (body: FeatureUploaderParams) => await UploadImageForFeature(body),
  });

  const { mutate: uploadIconMutate } = useMutation({
    mutationFn: async (body: FeatureUploaderParams) => await UploadIconForFeature(body),
  });

  const { mutate: editFeatureItemMutate, isPending: editFeatureItemPending } = useMutation({
    mutationFn: async () => await editFeatureItem(data.id, watch('name') as any),
    onSuccess: localData => {
      if (localData.status === true) {
        const localImage = watch('localImagePath');
        const localIcon = watch('localIconPath');

        if (localImage) {
          uploadImageMutate({
            featureId: String(data.id),
            file: watch('imagePath') as any,
            type: 'FEATURE',
          });
        }

        if (localIcon) {
          uploadIconMutate({
            featureId: String(data.id),
            file: watch('iconPath') as any,
            type: 'FEATURE',
          });
        }

        queryClient.invalidateQueries({ queryKey: ['feature-group'] });
        queryClient.invalidateQueries({ queryKey: ['features'] });
        ToastSuccess(' ویژگی مورد نظر با موفقیت ویرایش شد');
        setIsOpen({ key: 'edit-feature', isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });
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
        onCloseButton={() => setIsOpen({ key: 'edit-feature', isOpen: false })}
        onSubmit={() => editFeatureItemMutate()}
        isLoading={editFeatureItemPending}
      />
    </FormProvider>
  );
};

export default EditFeatureItemModal;
