'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Box, Flex, Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { removeComment, updateComment } from '@/api/comment';
import { Button, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import { CommentsDetail } from '@/types/comment/comment-list';

import { ToastError, ToastSuccess } from '../../toast/Toast';

const CommentCard = (props: CommentsDetail) => {
  const { content, createdAt, users, id } = props;

  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [updateIsOpen, setUpdateIsOpen] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: updateCommentMutate, isPending: updateCommentIsPending } = useMutation({
    mutationFn: async () => updateComment(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['all-comments'] });
        ToastSuccess('نظر مورد نظر با موفقیت منتشر شد');
        setUpdateIsOpen(false);
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
    onError: err => {
      console.log(err, 'Err');
    },
  });

  const { mutate: removeCommentMutate, isPending: removeCommentIsPending } = useMutation({
    mutationFn: async () => removeComment(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['all-comments'] });
        ToastSuccess('نظر مورد نظر با موفقیت حذف شد');
        setDeleteIsOpen(false);
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
    onError: err => {
      console.log(err, 'Err');
    },
  });
  return (
    <>
      <CardWrapper direction={'column'} p={'4'} gap={'4'}>
        <Flex width={'100%'} justify={'between'} align={'center'}>
          <Flex align={'center'} gap={'2'}>
            <Box style={{ width: 40, height: 40, position: 'relative', borderRadius: '50%' }}>
              <Image src={users.pic ? users.pic : ''} alt='' fill style={{ borderRadius: '50%' }} />
            </Box>
            <Flex direction={'column'} gap={'1'}>
              <Text>{`${users.name} ${users.last_name}`}</Text>
              <Text>{createdAt}</Text>
            </Flex>
          </Flex>
          <Flex gap={'2'} align={'center'}>
            {/* TODO: define ICON's here */}
            <IconButton size={'3'} radius='full' onClick={() => setDeleteIsOpen(true)}>
              delete
            </IconButton>
            <IconButton size={'3'} radius='full'>
              icon
            </IconButton>
          </Flex>
        </Flex>
        <Text>{content}</Text>
        <Flex gap={'4'} justify={'end'}>
          <Button size={'3'} onClick={() => setUpdateIsOpen(true)}>
            <Text>تایید و انتشار</Text>
          </Button>
          <Button size={'3'} variant='outline'>
            <Text>اطلاعات بیشتر</Text>
          </Button>
        </Flex>
      </CardWrapper>
      <Modal isOpen={updateIsOpen} onClose={() => setUpdateIsOpen(false)}>
        <Grid gapY={'24px'}>
          <Text>آیا از انتشار این نظر اظمینان دارید؟ </Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button onClick={() => updateCommentMutate()} variant='soft' size={'4'}>
              <Text>{updateCommentIsPending ? <Spinner /> : 'بله'}</Text>
            </Button>
            <Button type='button' onClick={() => setUpdateIsOpen(false)} variant='solid' size={'4'}>
              خیر
            </Button>
          </Grid>
        </Grid>
      </Modal>
      <Modal isOpen={deleteIsOpen} onClose={() => setDeleteIsOpen(false)}>
        <Grid gapY={'24px'}>
          <Text>آیا از حذف این نظر اظمینان دارید؟ </Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button onClick={() => removeCommentMutate()} variant='soft' size={'4'}>
              <Text>{removeCommentIsPending ? <Spinner /> : 'بله'}</Text>
            </Button>
            <Button type='button' onClick={() => setDeleteIsOpen(false)} variant='solid' size={'4'}>
              خیر
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default CommentCard;

const CardWrapper = styled(Flex)`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
`;
