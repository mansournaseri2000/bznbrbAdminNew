'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Flex, Grid, Modal, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { colorPalette } from '@/theme';

type Props = {
  type: 'edit' | 'add';
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddEditAdModal = (props: Props) => {
  const { isOpen, setIsOpen, type } = props;

  const methods = useFormContext();
  const { control } = methods;

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalHeader title={type === 'edit' ? 'ویرایش آگهی' : 'افزودن آگهی'} handleClose={() => setIsOpen(false)} />
      <Grid width={'100%'} p={'4'} style={{ justifyItems: 'center' }}>
        <Flex width={'328px'} height={'200px'} align={'center'} justify={'center'} mb={'3'} style={{ borderRadius: 8, border: `1px solid ${colorPalette.gray[6]}` }}>
          image picker
        </Flex>
        <Controller name='text' control={control} render={({ field }) => <TextField {...field} placeholder='Alt Text' />} />
        <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' rows={3} />} />
      </Grid>
      <ModalAction submitButtonText={type === 'edit' ? 'ثبت تغییرات' : 'ثبت آگهی'} closeButtonText='لغو' onCloseButton={() => setIsOpen(false)} />
    </Modal>
  );
};

export default AddEditAdModal;
