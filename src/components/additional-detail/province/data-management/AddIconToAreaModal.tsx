import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UploadSvgFroAreaDetail } from '@/api/additional-detail';
import { Flex } from '@/libs/primitives';
import ImagePicker2 from '@/libs/shared/ImagePicker2';
import ItemWithUploader from '@/libs/shared/item-with-uploader/ItemWithUploader';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import Uploader from '@/libs/shared/uploader/Uploader';
import { AreaDetail } from '@/types/additional-detail/additional-detail';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'svg' }>>;
  data: AreaDetail;
};

const AddIconToAreaModal = ({ setIsOpen, data }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const methods = useForm({ defaultValues: { iconPath: data?.pathItem, localIconPath: null, isIcon: Boolean(data?.pathItem) ? true : false } });
  const { watch } = methods;
  const queryClient = useQueryClient();
  console.log('DATA IN MODAL', data);
  /**
   * Services
   * _______________________________________________________________________________
   */
  const { mutate: uploadIconMutate, isPending: uploadIconPending } = useMutation({
    mutationFn: async () => await UploadSvgFroAreaDetail({ aboutId: data.id, type: 'AREA_DETAIL', file: watch('iconPath') as any }),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['province-area'] });
        ToastSuccess('آیکون مورد نظر با موفقیت آپلود شد');
        setIsOpen({ key: 'svg', isOpen: false });
      } else ToastError('مشکلی پیش آمده است . لطفا مجددا تلاش نمایید');
    },
  });
  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <Flex width={'100%'} py={'4'} align={'center'} justify={'center'}>
        {watch('iconPath') ? (
          <ItemWithUploader resetStore='isIcon' type='svg' localPath={`${watch('localIconPath')}`} filePath={data?.pathItem} isOrigin={watch('isIcon')} />
        ) : (
          <ImagePicker2 resetStore='isIcon' name='iconPath' localPath='localIconPath'>
            <Uploader type='icon' />
          </ImagePicker2>
        )}
      </Flex>
      <ModalAction submitButtonText='ثبت ' closeButtonText='لغو' onCloseButton={() => setIsOpen({ key: 'svg', isOpen: false })} onSubmit={() => uploadIconMutate()} isLoading={uploadIconPending} />
    </FormProvider>
  );
};

export default AddIconToAreaModal;
