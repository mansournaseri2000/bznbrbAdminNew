'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Box, Flex, Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { removeComment, updateComment } from '@/api/comment';
import CommentInfo from '@/components/develop/comment/comment-info/CommentInfo';
import { Button, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import { Chart, Check } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CommentsDetail } from '@/types/comment/comment-list';

import { ToastError, ToastSuccess } from '../../../../libs/shared/toast/Toast';

type CommentCardProps = CommentsDetail & {
  colorVariant?: 'blue' | 'pink';
};

type modalStateType = {
  isOpen: boolean;
  key: 'update' | 'remove' | 'info';
};

const CommentCard: React.FC<CommentCardProps> = (props: CommentCardProps) => {
  const { content, createdAt, users, id, places, colorVariant } = props;

  const [modalState, setModalState] = useState<modalStateType>({
    isOpen: false,
    key: 'remove',
  });

  console.log('place', places);
  const queryClient = useQueryClient();
  /* 
    ****
    update comment service
    ****_____________________________________________________________________________
   */
  const { mutate: updateCommentMutate, isPending: updateCommentIsPending } = useMutation({
    mutationFn: async () => updateComment(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['all-comments'] });
        ToastSuccess('نظر مورد نظر با موفقیت منتشر شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
    onError: err => {
      console.log(err, 'Err');
    },
  });

  /* 
    ****
    remove comment service
    ****_____________________________________________________________________________
   */
  const { mutate: removeCommentMutate, isPending: removeCommentIsPending } = useMutation({
    mutationFn: async () => removeComment(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['all-comments'] });
        ToastSuccess('نظر مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
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
      <Grid
        width={'100%'}
        p={'4'}
        gap={'4'}
        style={{
          borderRadius: 8,
          backgroundColor: colorVariant === 'blue' ? colorPalette.blue[2] : colorPalette.pink[2],
          border: colorVariant === 'blue' ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
        }}
      >
        <Flex width={'100%'} justify={'between'} align={'center'}>
          <Flex align={'center'} gap={'2'}>
            <Box style={{ width: 40, height: 40, position: 'relative', borderRadius: '50%' }}>
              <Image src={users.pic ? users.pic : ''} alt='' fill style={{ borderRadius: '50%' }} />
            </Box>
            <Flex direction={'column'} gap={'1'}>
              <Text style={{ color: colorPalette.gray[11] }}>{`${users.name} ${users.last_name}`}</Text>
              <Text style={{ color: colorPalette.gray[9] }}>{createdAt}</Text>
            </Flex>
          </Flex>
          <Flex gap={'2'} align={'center'}>
            {/* TODO: define ICON's here */}
            {/* <IconButton size={'3'} radius='full' onClick={() => setModalState({ isOpen: true, key: 'remove' })}>
              delete
            </IconButton> */}
            <IconButton size={'3'} style={{ borderRadius: 40 }}>
              <Chart />
            </IconButton>
          </Flex>
        </Flex>
        <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
          {content}
        </Text>
        <Flex gap={'4'} justify={'end'}>
          <Button size={'3'} colorVariant='BLUE' variant='soft' onClick={() => setModalState({ isOpen: true, key: 'update' })}>
            <Check />
            <Text {...typoVariant.body3}>تایید و انتشار</Text>
          </Button>
          <Button size={'3'} colorVariant='BLACK' onClick={() => setModalState({ isOpen: true, key: 'info' })}>
            <Text {...typoVariant.body3}>اطلاعات بیشتر</Text>
          </Button>
        </Flex>
      </Grid>

      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'update' && (
          <Grid gapY={'24px'}>
            <Text>آیا از انتشار این نظر اظمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button onClick={() => updateCommentMutate()} variant='soft' size={'4'}>
                <Text>{updateCommentIsPending ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                خیر
              </Button>
            </Grid>
          </Grid>
        )}
        {modalState.key === 'remove' && (
          <Grid gapY={'24px'}>
            <Text>آیا از حذف این نظر اظمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button onClick={() => removeCommentMutate()} variant='soft' size={'4'}>
                <Text>{removeCommentIsPending ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                خیر
              </Button>
            </Grid>
          </Grid>
        )}
        {modalState.key === 'info' && (
          <CommentInfo {...props} onUpdate={() => updateCommentMutate()} onRemove={() => removeCommentMutate()} updatePending={updateCommentIsPending} removePending={removeCommentIsPending} />
        )}
      </Modal>
    </>
  );
};

export default CommentCard;

// const CardWrapper = styled(Flex)`
//   width: 100%;
//   border-radius: 4px;
//   border: 1px solid #d4d4d4;
// `;
