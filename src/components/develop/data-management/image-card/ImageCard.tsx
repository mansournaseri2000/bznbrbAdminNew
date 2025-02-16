'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { removeImageSendUser, toggleMakeIsTop } from '@/api/place';
import { Box, Button, Checkbox, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Download, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  picture: string;
  description: string;
  isTop: boolean;
  id: number;
};

const ImageCard = ({ picture, description, id, isTop }: Props) => {
  /**
   * Methods
   * _______________________________________________________________________________
   */
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [imageID, setImageID] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const [isChecked, setIsChecked] = useState(isTop);

  console.log(isChecked);

  const { mutate, isPending } = useMutation({
    mutationFn: async (id: number) => removeImageSendUser(id),
    onSuccess: async data => {
      if (data.status === true) {
        ToastSuccess('تصویر مورد نظر با موفقیت حذف شد');
        setIsOpenModal(false);
        queryClient.invalidateQueries({ queryKey: ['place-user-uploads'] });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: toggleMakeTopMutate, isSuccess } = useMutation({
    mutationFn: async (id: number) => toggleMakeIsTop(id),
    onSuccess: async data => {
      if (data.status === true) {
        ToastSuccess('تصویر مورد نظر با موفقیت به عنوان تصویر برتر انتخاب شد');
        setIsOpenModal(false);
        queryClient.invalidateQueries({ queryKey: ['place-user-uploads'] });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const handleDownload = () => {
    const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL_image}${picture}`;
    window.open(imageUrl, '_blank');
  };

  console.log(isTop, 'isTopisTopisTop');

  return (
    <>
      <Grid width={'100%'} p={'12px'} gap={'10px'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
        <Box width={'100%'} height={'200px'} position={'relative'}>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${picture}`} alt='تصویر مکان ارسال شده' fill style={{ borderRadius: 8 }} />
        </Box>
        <Text {...typoVariant.body2} style={{ color: colorPalette.gray[11], width: 'fit-content' }}>
          {description}
        </Text>
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <Checkbox
            label='تصویر برتر'
            checked={isTop}
            onCheckedChange={() => {
              toggleMakeTopMutate(id);
              if (isSuccess) {
                setIsChecked(prev => !prev);
              }
            }}
          />
          <Flex align={'center'} gap={'10px'}>
            <IconButton size={'3'} type='button' onClick={handleDownload}>
              <Download />
            </IconButton>
            <IconButton
              onClick={() => {
                setIsOpenModal(true);
                setImageID(id);
              }}
              size={'3'}
              type='button'
              colorVariant='PINK'
              variant='surface'
            >
              <Trash />
            </IconButton>
          </Flex>
        </Flex>
      </Grid>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <Grid gapY={'24px'} p={'5'}>
          <Text>آیا از حذف این تصویر اطمینان دارید؟ </Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button type='button' onClick={() => mutate(Number(imageID))} variant='soft' size={'4'}>
              <Text {...typoVariant.body3}>{isPending ? <Spinner /> : 'بله'}</Text>
            </Button>
            <Button type='button' onClick={() => setIsOpenModal(false)} variant='solid' size={'4'}>
              <Text {...typoVariant.body3}>خیر</Text>
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default ImageCard;
