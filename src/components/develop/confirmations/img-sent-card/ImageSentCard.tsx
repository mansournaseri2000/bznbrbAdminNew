import React, { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { acceptPicUserUpload, deletePicUserUpload, makeTopPicUserUpload } from '@/api/confirmations';
import { Box, Button, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Check, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { FilteredPicsDetail } from '@/types/confirmations/image-sent';

type CardProps = FilteredPicsDetail & {
  onShowPoint?: () => void;
  onPublished?: () => void;
  onDelete?: () => void;
  index: number;
};

type modalStateType = {
  isOpen: boolean;
  key: 'accept' | 'delete' | 'isTop';
};

const ImageSentCard: React.FC<CardProps> = (props: CardProps) => {
  /* 
    ****
    const and variables
    ****_____________________________________________________________________________
   */
  const { index, placeName, placeProvince, placeCity, picture, description, placeId, id } = props;
  const router = useRouter();

  const [modalState, setModalState] = useState<modalStateType>({
    isOpen: false,
    key: 'delete',
  });

  const queryClient = useQueryClient();

  /* 
    ****
    Services
    ****_____________________________________________________________________________
   */
  const { mutate: acceptPicUploadMutate, isPending: acceptPicUploadPending } = useMutation({
    mutationFn: async () => acceptPicUserUpload(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['user-image-uploads'] });
        ToastSuccess('تصویر مورد نظر با موفقیت منتشر شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: deletePicUploadMutate, isPending: deletePicUploadPending } = useMutation({
    mutationFn: async () => deletePicUserUpload(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['user-image-uploads'] });
        ToastSuccess('تصویر مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: makeTopPicUploadMutate, isPending: makeTopPicUploadPending } = useMutation({
    mutationFn: async () => makeTopPicUserUpload(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['user-image-uploads'] });
        ToastSuccess('تصویر مورد نظر با موفقیت به عنوان تصویر برتر انتخاب شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  return (
    <>
      <Grid
        width={'100%'}
        gapY={'5'}
        p={'4'}
        style={{
          borderRadius: 8,
          backgroundColor: index % 2 === 0 ? colorPalette.blue[2] : colorPalette.pink[2],
          border: index % 2 === 0 ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
        }}
      >
        <Flex width={'100%'} justify={'between'} align={'center'}>
          <Flex direction={'column'} gap={'2'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
              {placeName}
            </Text>
            <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
              {placeProvince} / {placeCity}
            </Text>
          </Flex>
          <Button colorVariant='BLUE' size={'3'} onClick={() => router.push(`https://bezanimbiroon.ir/place/${placeId}?view=common`)}>
            <Text {...typoVariant.body3}>مشاهده نقطه</Text>
          </Button>
        </Flex>
        <Flex gap={'4'} px={'4'} align={'center'}>
          <Box width={'328px'} height={'150px'} position={'relative'}>
            <Image width={328} height={150} src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${picture}`} alt='user image sent' style={{ borderRadius: 8, objectFit: 'cover' }} />
          </Box>
          <Grid height={'auto'}>
            <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11], textWrap: 'wrap', width: '100%' }}>
              {description}
            </Text>
          </Grid>
        </Flex>

        <Flex width={'100%'} align={'center'} gap={'2'} justify={'end'}>
          <Button size={'3'} colorVariant='PINK' onClick={() => setModalState({ isOpen: true, key: 'isTop' })}>
            <Text {...typoVariant.body1}>تصویر برتر</Text>
          </Button>
          <Button size={'3'} colorVariant='BLUE' variant='soft' onClick={() => setModalState({ isOpen: true, key: 'accept' })}>
            <Flex align={'center'} gap={'2'}>
              <Check />
              <Text {...typoVariant.body1}>تایید و انتشار</Text>
            </Flex>
          </Button>
          <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 12 }} onClick={() => setModalState({ isOpen: true, key: 'delete' })} disabled>
            <Trash />
          </IconButton>
        </Flex>
      </Grid>
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'accept' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از انتشار این تصویر اطمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button onClick={() => acceptPicUploadMutate()} variant='soft' size={'4'}>
                <Text {...typoVariant.body3}>{acceptPicUploadPending ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از حذف این تصویر اطمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button onClick={() => deletePicUploadMutate()} variant='soft' size={'4'}>
                <Text {...typoVariant.body3}>{deletePicUploadPending ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
        {modalState.key === 'isTop' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از انتخاب این تصویر به عنوان تصویر برتر اطمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button onClick={() => makeTopPicUploadMutate()} variant='soft' size={'4'}>
                <Text {...typoVariant.body3}>{makeTopPicUploadPending ? <Spinner /> : 'بله'}</Text>
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

export default ImageSentCard;
