import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Flex, TextField } from '@/libs/primitives';
// import ImagePicker2 from '@/libs/shared/ImagePicker2';
import ModalAction from '@/libs/shared/ModalAction';
// import Uploader from '@/libs/shared/uploader/Uploader';
import { ChildrenDetail } from '@/types/additional-detail/additional-detail';

type Props = {
  data: ChildrenDetail;
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'edit-subCategory' }>>;
};

const EditSubCategoryModal = ({ data, setIsOpen }: Props) => {
  const methods = useForm({ defaultValues: { name: data.name } });
  const { control } = methods;

  return (
    <>
      <Flex direction={'column'} align={'center'} p={'12px 16px'} gap={'4'}>
        <Flex gap={'3'}>
          {/* <ImagePicker2 name=''>
            <Uploader type='pic' />
          </ImagePicker2>
          <ImagePicker2 name=''>
            <Uploader type='icon' />
          </ImagePicker2> */}s
        </Flex>
        <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='' style={{ width: '50%', margin: '0 auto' }} />} />
      </Flex>
      <ModalAction submitButtonText='ثبت ' closeButtonText='لغو' onCloseButton={() => setIsOpen({ key: 'edit-subCategory', isOpen: false })} />
    </>
  );
};

export default EditSubCategoryModal;
