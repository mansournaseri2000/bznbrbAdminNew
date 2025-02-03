import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { Flex, TextField } from '@/libs/primitives';
import ImagePicker2 from '@/libs/shared/ImagePicker2';
import ModalAction from '@/libs/shared/ModalAction';
import Uploader from '@/libs/shared/uploader/Uploader';
import { FeatureDetail } from '@/types/additional-detail/additional-detail';

type Props = {
  data: FeatureDetail;
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'edit-feature' }>>;
};

const EditFeatureItemModal = ({ setIsOpen, data }: Props) => {
  const methods = useForm({ defaultValues: { name: data.name, banner: data.banner, icon: data.icon } });
  const { control } = methods;
  return (
    <FormProvider {...methods}>
      <Flex direction={'column'} align={'center'} p={'12px 16px'} gap={'4'}>
        <Flex gap={'3'}>
          <ImagePicker2 name='banner'>
            <Uploader type='pic' />
          </ImagePicker2>
          <ImagePicker2 name='icon'>
            <Uploader type='icon' />
          </ImagePicker2>
        </Flex>
        <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='' style={{ width: '50%', margin: '0 auto' }} />} />
      </Flex>
      <ModalAction submitButtonText='ثبت ' closeButtonText='لغو' onCloseButton={() => setIsOpen({ key: 'edit-feature', isOpen: false })} />
    </FormProvider>
  );
};

export default EditFeatureItemModal;
