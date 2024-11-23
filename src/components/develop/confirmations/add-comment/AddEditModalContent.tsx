'use client';

import React from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { Flex, Modal, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Close } from '@/public/icon';

type Props = {
  type: 'create' | 'edit';
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContent = (props: Props) => {
  const { type, isOpen, setIsOpen } = props;
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  const methods = useForm({
    defaultValues: type === 'create' ? { title: '', content: '' } : { title: '', content: '' },
  });
  const { control } = methods;

  return (
    <FormProvider {...methods}>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader handleClose={() => setIsOpen(false)} title={type === 'create' ? 'ثبت نظر برتر' : 'ویرایش نظر برتر'} icon={<Close />} />
        <Flex direction={'column'} gap={'5'} p={'5'}>
          <Controller name='title' control={control} render={({ field }) => <TextField {...field} placeholder='عنوان نقطه' style={{ width: '50%' }} />} />
          <Controller name='content' control={control} render={({ field }) => <TextArea {...field} placeholder='متن نظر' />} />
        </Flex>
        <ModalAction submitButtonText={type === 'create' ? 'ثبت نظر' : 'ویرایش تغییرات'} closeButtonText='لغو و بازگشت' onCloseButton={() => setIsOpen(false)} />
      </Modal>
    </FormProvider>
  );
};

export default ModalContent;
