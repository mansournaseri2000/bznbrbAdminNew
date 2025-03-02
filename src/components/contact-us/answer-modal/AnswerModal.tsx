'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { replayItem } from '@/api/contact-us/contact-us';
import { Grid, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastSuccess } from '@/libs/shared/toast/Toast';
import { AllContactRequestsDetail, ReplayItemBody } from '@/types/contact-us/contact-us';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'answer' }>>;
  data: AllContactRequestsDetail;
};

const AnswerModal = ({ setIsOpen, data }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const methods = useForm({
    defaultValues: {
      subject: data.subject,
      name: data.name,
      email: data.email,
      itemContent: data.content,
      content: '',
    },
  });
  const { control, watch } = methods;
  const queryClient = useQueryClient();
  console.log('modal data', data);

  /**
   * services
   * _______________________________________________________________________________
   */
  const { mutate: replayMutate, isPending: replayPending } = useMutation({
    mutationFn: async (body: ReplayItemBody) => await replayItem(body),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['contact-us'] });
        ToastSuccess('پیام مورد نظر با موفقیت پاسخ داده شد');
        setIsOpen({ key: 'answer', isOpen: false });
      } else {
        ToastSuccess('مشکلی پیش آمده است . لطفا مجددا تلاش نمایید');
      }
    },
  });

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const handleSubmit = () => {
    const item: ReplayItemBody = {
      id: data.id,
      subject: watch('subject'),
      content: watch('content'),
    };
    replayMutate(item);
  };

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid width={'100%'} p={'5'} gapY={'14px'}>
        <Controller name='subject' control={control} render={({ field }) => <TextField {...field} placeholder='موضوع' readOnly style={{ borderRadius: 12 }} />} />
        <Grid width={'100%'} columns={'2'} gapX={'5'}>
          <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='نام و نام خانوادگی' readOnly style={{ borderRadius: 12 }} />} />
          <Controller name='email' control={control} render={({ field }) => <TextField {...field} placeholder='ایمیل' readOnly style={{ borderRadius: 12 }} />} />
        </Grid>
        <Controller name='itemContent' control={control} render={({ field }) => <TextArea {...field} placeholder='پیام' rows={5} readOnly style={{ borderRadius: 12 }} />} />
        <Controller name='content' control={control} render={({ field }) => <TextArea {...field} placeholder='متن پاسخ' rows={6} style={{ borderRadius: 12 }} />} />
      </Grid>
      <ModalAction
        submitButtonText='ارسال پاسخ'
        closeButtonText='لغو و بازگشت'
        onCloseButton={() => setIsOpen({ isOpen: false, key: 'answer' })}
        disabled={watch('content').length === 0}
        onSubmit={handleSubmit}
        isLoading={replayPending}
      />
    </>
  );
};

export default AnswerModal;
