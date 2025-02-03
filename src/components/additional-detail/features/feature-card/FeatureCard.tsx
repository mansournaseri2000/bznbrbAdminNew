'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteFeatureItem, editFeatureItem } from '@/api/additional-detail';
import { Button, Flex, Grid, IconButton, Modal, Text, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  title: string;
  id: number;
};

type modalStateType = {
  isOpen: boolean;
  key: 'edit' | 'delete';
};

const FeatureCard = (props: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { title, id } = props;
  const [modalState, setModalState] = useState<modalStateType>({ isOpen: false, key: 'edit' });
  const methods = useForm({ defaultValues: { name: title } });
  const { control, watch } = methods;
  const queryClient = useQueryClient();
  /**
   * Services
   * _______________________________________________________________________________
   */

  // const { data: featureItemData } = useQuery({ queryKey: ['feature-item', id], queryFn: async () => await getFeatureItemById(id) });

  const { mutate: editFeatureMutate, isPending: editFeaturePending } = useMutation({
    mutationFn: async () => await editFeatureItem(id, watch()),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['feature-group'] });
        ToastSuccess('آیتم مورد نظر با موفقیت ویرایش شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: deleteFeatureMutate, isPending: deleteFeaturePending } = useMutation({
    mutationFn: async () => await deleteFeatureItem(id),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['feature-group'] });
        ToastSuccess('آیتم مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  return (
    <>
      <Grid width={'100%'} maxWidth={'120px'} p={'12px 20px'} gapY={'4'} justify={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
        <Text {...typoVariant.description1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
          {title}
        </Text>
        <Flex align={'center'} gap={'4'}>
          <IconButton
            variant='surface'
            onClick={() => {
              setModalState({ key: 'edit', isOpen: true });
            }}
          >
            <Pencil />
          </IconButton>
          <IconButton variant='surface' onClick={() => setModalState({ key: 'delete', isOpen: true })}>
            <Trash />
          </IconButton>
        </Flex>
      </Grid>
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'edit' && (
          <>
            <ModalHeader title='ویرایش ویژگی' handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <Flex width={'100%'} p={'4'} align={'center'} justify={'center'}>
              <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='عنوان دسته ویژگی' style={{ width: '50%', margin: '0 auto' }} />} />
            </Flex>
            <ModalAction
              submitButtonText='ثبت '
              closeButtonText='لغو'
              onCloseButton={() => setModalState({ ...modalState, isOpen: false })}
              onSubmit={() => editFeatureMutate()}
              isLoading={editFeaturePending}
            />
          </>
        )}
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از حذف این ویژگی اطمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteFeatureMutate()}>
                <Text {...typoVariant.body3}>{deleteFeaturePending ? <Spinner /> : 'بله'}</Text>
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

export default FeatureCard;
