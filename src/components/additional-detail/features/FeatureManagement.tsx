'use client';

import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addFeatureGroup, getFeatures } from '@/api/additional-detail';
import { Button, Flex, Modal, Text, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Close } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

import FeatureItems from './feature-items/FeatureItems';

const FeatureManagement = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({ defaultValues: { name: '' } });
  const { control, watch } = methods;
  const queryClient = useQueryClient();

  console.log('WATCH', watch());
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: featuresData, isLoading: featureLoading, isFetching: featureFetching, isError: featureError } = useQuery({ queryKey: ['features'], queryFn: async () => await getFeatures() });
  console.log('features data', featuresData);

  const { mutate: featureGroupMutate, isPending: featureGroupPending } = useMutation({
    mutationFn: async () => await addFeatureGroup(watch()),
    onSuccess: data => {
      if (data.status === true) {
        ToastSuccess('ویژگی مورد نظر با موفقیت ایجاد شد');
        queryClient.invalidateQueries({ queryKey: ['features'] });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  /*
   *** Loading & Error_________________________________________________________________________________________________________________________________________________________________
   */
  if (featureLoading || featureFetching) return <Spinner style={{ margin: '100px auto', scale: 2 }} />;
  if (!featuresData || featureError) return ToastError('مشکلی پیش آمده. لطفا مجددا تلاش نمایید');

  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <Flex width={'100%'} direction={'column'} gap={'5'}>
        <Button size={'4'} variant='ghost' style={{ width: 'fit-content' }} onClick={() => setIsOpen(true)}>
          <Flex align={'center'} gap={'2'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}>افزودن دسته ویژگی</Text>
          </Flex>
        </Button>
        {featuresData?.map(item => (
          <FeatureItems key={item.id} {...item} />
        ))}
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='افزودن دسته ویژگی' icon={<Close />} handleClose={() => setIsOpen(false)} />
        <Flex width={'100%'} p={'4'} align={'center'} justify={'center'}>
          <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='عنوان دسته ویژگی' style={{ width: '50%', margin: '0 auto' }} />} />
        </Flex>
        <ModalAction
          submitButtonText='ثبت '
          closeButtonText='لغو'
          onCloseButton={() => setIsOpen(false)}
          onSubmit={() => {
            featureGroupMutate();
            setIsOpen(false);
          }}
          isLoading={featureGroupPending}
        />
      </Modal>
    </FormProvider>
  );
};

export default FeatureManagement;
