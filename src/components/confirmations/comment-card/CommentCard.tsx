'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Box, Flex, Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { removeComment, updateComment } from '@/api/comment';
import { Button, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';
import { Check, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { AllCommentsDetail } from '@/types/confirmations/pending-comments';

type CommentCardProps = AllCommentsDetail & {
  index: number;
};

type modalStateType = {
  isOpen: boolean;
  key: 'update' | 'remove' | 'info';
};

const CommentCard = (props: CommentCardProps) => {
  /* 
    ****
    const and variables
    ****_____________________________________________________________________________
   */
  const { content, commentDate, pic, id, index, fullName, placeName, placeCity, placeProvince, type, placeId, articleCity, articleProvince, articleTitle, articleId } = props;

  const [modalState, setModalState] = useState<modalStateType>({
    isOpen: false,
    key: 'remove',
  });

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
        queryClient.invalidateQueries({ queryKey: ['pending-comments'] });
        ToastSuccess('نظر مورد نظر با موفقیت منتشر شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: removeCommentMutate, isPending: removeCommentIsPending } = useMutation({
    mutationFn: async () => removeComment(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['pending-comments'] });
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

  /* 
    ****
    Methods
    ****_____________________________________________________________________________
   */
  const handleRedirect = () => {
    if (type === 'PLACE') {
      window.open(`https://bezanimbiroon.ir/place/${placeId}?view=common`, '_blank');
    } else {
      window.open(`https://bezanimbiroon.ir/article/${articleId}`, '_blank');
    }
  };

  return (
    <>
      <Grid
        width={'100%'}
        p={'4'}
        gap={'4'}
        style={{
          borderRadius: 8,
          backgroundColor: index % 2 === 0 ? colorPalette.blue[2] : colorPalette.pink[2],
          border: index % 2 === 0 ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
        }}
      >
        {/* {type === 'PLACE' && ( */}
        <Flex width={'100%'} justify={'between'} align={'center'}>
          <Flex direction={'column'} gap={'2'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
              {type === 'PLACE' ? placeName : articleTitle}
            </Text>
            <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11], opacity: '50%' }}>
              {type === 'PLACE'
                ? Boolean(placeProvince) && Boolean(placeCity)
                  ? `${placeProvince} / ${placeCity}`
                  : ''
                : Boolean(articleProvince) && Boolean(articleCity)
                ? `${articleProvince} / ${articleCity} `
                : ''}
            </Text>
          </Flex>
          <Button size={'3'} colorVariant={index % 2 === 0 ? 'BLUE' : 'PINK'} onClick={handleRedirect}>
            <Text {...typoVariant.body3}>{type === 'PLACE' ? 'مشاهده نقطه' : type === 'ARTICLE' && 'مشاهده مقاله'}</Text>
          </Button>
        </Flex>
        {/* )} */}
        <Flex width={'100%'} justify={'between'} align={'center'}>
          <Flex align={'center'} gap={'2'}>
            <Box style={{ width: 40, height: 40, position: 'relative', borderRadius: '50%' }}>
              <Image src={pic ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${pic}` : ''} alt='' fill style={{ borderRadius: '50%' }} />
            </Box>
            <Flex direction={'column'} gap={'1'}>
              <Text style={{ color: colorPalette.gray[11] }}>{fullName}</Text>
              <Text style={{ color: colorPalette.gray[9] }}>{convertTimestampToPersianDate(commentDate)}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
          {content}
        </Text>
        <Flex gap={'4'} justify={'end'}>
          <Button size={'3'} colorVariant={index % 2 === 0 ? 'BLUE' : 'PINK'} variant='soft' onClick={() => setModalState({ isOpen: true, key: 'update' })}>
            <Check />
            <Text {...typoVariant.body3}>تایید و انتشار</Text>
          </Button>
          <IconButton size={'3'} radius='full' colorVariant='PINK' disabled onClick={() => setModalState({ isOpen: true, key: 'remove' })}>
            <Trash />
          </IconButton>
        </Flex>
      </Grid>

      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'update' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از انتشار این نظر اظمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button onClick={() => updateCommentMutate()} variant='soft' size={'4'}>
                <Text {...typoVariant.body3}>{updateCommentIsPending ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
        {modalState.key === 'remove' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از حذف این نظر اظمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button onClick={() => removeCommentMutate()} variant='soft' size={'4'}>
                <Text {...typoVariant.body3}>{removeCommentIsPending ? <Spinner /> : 'بله'}</Text>
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

export default CommentCard;
