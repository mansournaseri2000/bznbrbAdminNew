'use client';

import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addFeatureItem, deleteFeatureGroup, editFeatureGroup } from '@/api/additional-detail';
import { Button, Flex, Grid, Modal, Text, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { Close } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';
import { addFeatureItemBody, FeaturesResponse } from '@/types/additional-detail/additional-detail';

import FeatureCard from '../feature-card/FeatureCard';

// import FeatureModal from '../feature-modal/FeatureModal';

type modalStateType = {
  isOpen: boolean;
  key: 'edit' | 'add' | 'delete';
};

const FeatureItems = (props: FeaturesResponse) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { name, features, id } = props;

  const [modalState, setModalState] = useState<modalStateType>({ isOpen: false, key: 'edit' });
  const methods = useForm({ defaultValues: { name: '' } });
  const { control, watch, reset, setValue } = methods;
  const queryClient = useQueryClient();

  console.log('NAME', watch());
  /**
   * Services
   * _______________________________________________________________________________
   */
  const { mutate: addFeatureMutate, isPending: addFeaturePending } = useMutation({
    mutationFn: async (body: addFeatureItemBody) => await addFeatureItem(body),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['features'] });
        ToastSuccess('ویژگی مورد نظر با موفقیت ایجاد شد');
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: editFeatureGroupMutate, isPending: editFeatureGroupPending } = useMutation({
    mutationFn: async () => await editFeatureGroup(id, watch()),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['features'] });
        ToastSuccess('ویژگی مورد نظر با موفقیت ویرایش شد');
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: deleteFeatureGroupMutate, isPending: deleteFeatureGroupPending } = useMutation({
    mutationFn: async () => await deleteFeatureGroup(id),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['features'] });
        ToastSuccess('ویژگی مورد نظر با موفقیت حذف شد');
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid width={'100%'} gapY={'5'}>
        <AccordionWrapper
          hero={name}
          withButton
          withDelete
          isDisableDelete
          onEdit={e => {
            e.stopPropagation();
            setValue('name', name);
            setModalState({ key: 'edit', isOpen: true });
          }}
          onButtonSubmit={e => {
            e.stopPropagation();
            reset({ name: '' });
            setModalState({ key: 'add', isOpen: true });
          }}
          onDelete={e => {
            e.stopPropagation();
            setModalState({ key: 'delete', isOpen: true });
          }}
        >
          <Flex width={'100%'} gap={'5'} align={'center'} wrap={'wrap'}>
            {features.length === 0 ? (
              <Text {...typoVariant.body1}>در حال حاضر دیتایی برای این ویژگی وجود ندارد</Text>
            ) : (
              <>
                {features.map(item => (
                  <FeatureCard key={item.id} title={item.name} id={item.id} />
                ))}
              </>
            )}
          </Flex>
        </AccordionWrapper>
      </Grid>

      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {/*
         *** for Edit OR Add Feature_________________________________________________________________________________________________________________________________________________________________
         */}
        {modalState.key !== 'delete' && (
          <>
            <ModalHeader title={modalState.key === 'edit' ? 'ویرایش دسته ویژگی' : 'افزودن دسته ویژگی'} icon={<Close />} handleClose={() => setModalState({ ...modalState, isOpen: false })} />

            <Flex width={'100%'} p={'4'} align={'center'} justify={'center'}>
              <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='عنوان دسته ویژگی' style={{ width: '50%', margin: '0 auto' }} />} />
            </Flex>

            <ModalAction
              submitButtonText='ثبت'
              closeButtonText='لغو'
              onCloseButton={() => setModalState({ ...modalState, isOpen: false })}
              onSubmit={() => (modalState.key === 'add' ? addFeatureMutate({ name: watch('name'), featureGroupid: id }) : editFeatureGroupMutate())}
              isLoading={modalState.key === 'add' ? addFeaturePending : editFeatureGroupPending}
            />
          </>
        )}
        {/*
         *** For Delete Feature_________________________________________________________________________________________________________________________________________________________________
         */}
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از حذف این ویژگی اطمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteFeatureGroupMutate()}>
                <Text {...typoVariant.body3}>{deleteFeatureGroupPending ? <Spinner /> : 'بله'}</Text>
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

export default FeatureItems;
