'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useParams } from 'next/navigation';

import { PlusIcon } from '@radix-ui/react-icons';
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
        ToastSuccess('نظر مورد نظر با موفقیت ایجاد شد');
        setIsOpen(false);
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });
  /* 
    ****
    Services
    ****_____________________________________________________________________________
   */
  return (
    <>
      <Flex width={'100%'} justify={'center'} py={'79px'} align={'center'} style={{ backgroundColor: colorPalette.gray[2], border: `2px dashed ${colorPalette.blue[8]}`, borderRadius: 8 }}>
        <Button variant='surface' onClick={() => setIsOpen(true)}>
          <Flex p={'13.5px 15px 13.5px 19px'} align={'center'} gap={'2'}>
            <PlusIcon width={16} height={16} style={{ color: colorPalette.blue[10] }} />
            <Text {...typoVariant.body1}>افزودن نظر</Text>
          </Flex>
        </Button>
      </Flex>
      {/* 
        ****
        Modal
        ****_____________________________________________________________________________
      */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader handleClose={() => setIsOpen(false)} title='ثبت نظر برتر' />
        <Flex direction={'column'} gap={'14px'} p={'5'}>
          <Controller
            name='name'
            control={control}
            render={({ field }) => <TextField {...field} label='عنوان نقطه' placeholder='عنوان نقطه' selectedValue={Boolean(field.value)} style={{ width: '50%' }} />}
          />
          <Controller name='content' control={control} render={({ field }) => <TextArea {...field} label='متن نظر' placeholder='متن نظر' selectedValue={Boolean(field.value)} rows={5} />} />
        </Flex>
        <ModalAction
          submitButtonText='ثبت نظر'
          closeButtonText='لغو و بازگشت'
          onCloseButton={() => setIsOpen(false)}
          onSubmit={() => createCommentMutate()}
          isLoading={createCommentPending}
          // disabled={watch('name').length === 0 && watch('content').length === 0}
        />
      </Modal>
    </>
  );
};

export default AddComment;
