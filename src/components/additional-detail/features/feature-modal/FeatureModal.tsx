import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Flex, Modal, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: 'add_feature' | 'edit_feature' | 'add_feature_category' | 'edit_feature_category';
};

const FeatureModal = (props: Props) => {
  const { isOpen, setIsOpen, type } = props;

  // TODO:  fix default value for difference types

  const methods = useForm({
    defaultValues: { textFiled: '' },
  });

  const { control } = methods;
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalHeader
        title={
          type === 'add_feature'
            ? 'افزودن ویژگی'
            : type === 'edit_feature'
            ? 'ویرایش ویژگی'
            : type === 'add_feature_category'
            ? 'افزودن دسته ویژگی'
            : type === 'edit_feature_category'
            ? 'ویرایش دسته ویژگی'
            : ''
        }
        handleClose={() => setIsOpen(false)}
      />
      <Flex width={'100%'} p={'4'} align={'center'} justify={'center'}>
        {/* TODO:  fix for difference types*/}
        <Controller
          name='textFiled'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder={
                type === 'add_feature'
                  ? 'عنوان ویژگی'
                  : type === 'edit_feature'
                  ? 'دارای رستوران'
                  : type === 'add_feature_category'
                  ? 'عنوان دسته ویژگی'
                  : type === 'edit_feature_category'
                  ? 'سختی مسیر'
                  : ''
              }
              style={{ width: '50%' }}
            />
          )}
        />
      </Flex>
      <ModalAction submitButtonText='ثبت ' closeButtonText='لغو' onCloseButton={() => setIsOpen(false)} />
    </Modal>
  );
};

export default FeatureModal;
