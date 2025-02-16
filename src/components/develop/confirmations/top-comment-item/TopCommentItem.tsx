'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteCommentById, updateCommentById } from '@/api/confirmations';
import { Button, Flex, Grid, IconButton, Modal, Text, TextArea, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CommentsDetail } from '@/types/confirmations/top-comments';

type Props = CommentsDetail & {
  data: CommentsDetail;
};

type modalStateType = {
  isOpen: boolean;
  key: 'edit' | 'delete';
};

const TopCommentItem = (props: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { commentName, commentContent, data, commentId } = props;
  const [modalState, setModalState] = useState<modalStateType>({
    isOpen: false,
    key: 'edit',
  });
  const methods = useForm({
    defaultValues: {
      name: data.commentName,
      content: data.commentContent,
      type: 'COMMENT',
    },
  });
  const { control, watch } = methods;
  const queryClient = useQueryClient();

  console.log('data', data);

  /* 
    ****
    Services
    ****_____________________________________________________________________________
   */
  const { mutate: updateCommentMutate, isPending: updateCommentPending } = useMutation({
    mutationFn: async () => updateCommentById(commentId, watch() as any),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['top-comments-item'] });
        ToastSuccess('نظر مورد نظر با موفقیت بروزرسانی شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: deleteCommentMutate, isPending: deleteCommentPending } = useMutation({
    mutationFn: async () => deleteCommentById(commentId),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['top-comments-item'] });
        ToastSuccess('نظر مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  return (
    <>
      <Flex width={'100%'} gap={'4'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
        <Flex width={'100%'} direction={'column'} gap={'4'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {commentName}
          </Text>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
            {commentContent}
          </Text>
        </Flex>
        <Flex direction={'column'} gap={'2'}>
          <IconButton size={'3'} onClick={() => setModalState({ isOpen: true, key: 'edit' })}>
            <Pencil />
          </IconButton>
          <IconButton size={'3'} colorVariant='PINK' onClick={() => setModalState({ isOpen: true, key: 'delete' })}>
            <Trash />
          </IconButton>
        </Flex>
      </Flex>
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'edit' && (
          <>
            <ModalHeader handleClose={() => setModalState({ ...modalState, isOpen: false })} title='ویرایش نظر برتر' />
            <Flex direction={'column'} gap={'14px'} p={'5'}>
              <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='عنوان نقطه' style={{ width: '50%' }} />} />
              <Controller name='content' control={control} render={({ field }) => <TextArea {...field} placeholder='متن نظر' rows={5} />} />
            </Flex>
            <ModalAction
              submitButtonText='ویرایش تغییرات'
              closeButtonText='لغو و بازگشت'
              onCloseButton={() => setModalState({ ...modalState, isOpen: false })}
              onSubmit={() => updateCommentMutate()}
              isLoading={updateCommentPending}
              disabled={watch('name').length === 0 && watch('content').length === 0}
            />
          </>
        )}
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text {...typoVariant.title1}>آیا از حذف این نظر اطمینان دارید؟</Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteCommentMutate()}>
                <Text {...typoVariant.body3}>{deleteCommentPending ? <Spinner /> : 'بله'}</Text>s
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
      </Modal>
    </>
  );
};

export default TopCommentItem;
