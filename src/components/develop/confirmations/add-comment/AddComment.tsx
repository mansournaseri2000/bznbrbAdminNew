'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useParams } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createComment } from '@/api/confirmations';
import { Button, Flex, Modal, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

const AddComment = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const params = useParams();
  const provinceId = params.slug[2];
  const methods = useForm({
    defaultValues: {
      name: '',
      content: '',
      type: 'COMMENT',
      provincesId: Number(provinceId),
    },
  });

  const { control, watch } = methods;
  const queryClient = useQueryClient();

  /* 
    ****
    Services
    ****_____________________________________________________________________________
   */
  const { mutate: createCommentMutate, isPending: createCommentPending } = useMutation({
    mutationFn: async () => createComment(watch() as any),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['top-comments-item'] });
        ToastSuccess('نظر مورد نظر با موفقیت ایچاد شد');
        setIsOpen(false);
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });
  return (
    <>
      <Flex width={'100%'} justify={'center'} py={'79px'} align={'center'} style={{ backgroundColor: colorPalette.gray[2], border: `2px dashed ${colorPalette.blue[8]}`, borderRadius: 8 }}>
        <Button variant='surface' onClick={() => setIsOpen(true)}>
          <Flex p={'13.5px 15px 13.5px 19px'} align={'center'} gap={'2'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}>افزودن نظر</Text>
          </Flex>
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader handleClose={() => setIsOpen(false)} title='ثبت نظر برتر' />
        <Flex direction={'column'} gap={'5'} p={'5'}>
          <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='عنوان نقطه' style={{ width: '50%' }} />} />
          <Controller name='content' control={control} render={({ field }) => <TextArea {...field} placeholder='متن نظر' />} />
        </Flex>
        <ModalAction submitButtonText='ثبت نظر' closeButtonText='لغو و بازگشت' onCloseButton={() => setIsOpen(false)} onSubmit={() => createCommentMutate()} isLoading={createCommentPending} />
      </Modal>
    </>
  );
};

export default AddComment;
