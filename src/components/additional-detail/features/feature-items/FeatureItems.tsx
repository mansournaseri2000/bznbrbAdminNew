'use client';

import React, { forwardRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addFeatureItem, deleteFeatureGroup, getFeatureGroupById } from '@/api/additional-detail';
import { Box, Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import CustomAddItem from '@/libs/shared/custom-add-item/CustomAddItem';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { FeaturesResponse } from '@/types/additional-detail/additional-detail';

import ChipsItem from '../../chips-item/ChipsItem';
import EditFeatureModal from '../feature-modal/EditFeatureModal';

type FeatureItemsProps = FeaturesResponse & {
  selected: boolean;
  onSelect: VoidFunction;
  currentIndex: number;
};

type modalStateType = {
  isOpen: boolean;
  key: 'edit' | 'delete';
};

const FeatureItems = forwardRef<HTMLDivElement, FeatureItemsProps>((props, ref) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { id, name, selected, onSelect } = props;

  const [modalState, setModalState] = useState<modalStateType>({ isOpen: false, key: 'edit' });
  const methods = useForm({ defaultValues: { name: '' } });
  const { control, watch, setValue, getValues } = methods;
  const queryClient = useQueryClient();

  /**
   * Services
   * _______________________________________________________________________________
   */

  const {
    data: singleFeatureData,
    isLoading: singleFeatureLoading,
    isFetching: singleFeatureFetching,
  } = useQuery({ queryKey: ['feature-group', selected], queryFn: async () => await getFeatureGroupById(id), initialData: props as FeaturesResponse, enabled: selected === true });

  const { mutate: addFeatureMutate, isPending: addFeaturePending } = useMutation({
    mutationFn: async () => await addFeatureItem({ name: watch('name'), featureGroupid: id }),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['feature-group'] });
        ToastSuccess('ویژگی مورد نظر با موفقیت ایجاد شد');
        setValue('name', '');
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

  //   /**
  //    * Methods
  //    * _______________________________________________________________________________
  //    */

  const handleAddFeature = () => {
    const featureItem = getValues('name').trim();
    if (!featureItem) {
      ToastError('نام ویژگی نمی‌تواند خالی باشد');
      return;
    }
    if (singleFeatureData.features.some(item => item.name === featureItem)) {
      ToastError('این ویژگی از قبل وجود دارد');
      return;
    }
    addFeatureMutate();
  };

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid width={'100%'} gapY={'5'} ref={ref} onClick={onSelect}>
        <AccordionWrapper
          hero={name}
          withEdit
          withDelete
          hasMedia={singleFeatureData.hasMedia === true}
          onEdit={e => {
            e.stopPropagation();
            setValue('name', singleFeatureData.name);
            setModalState({ key: 'edit', isOpen: true });
          }}
          onDelete={e => {
            e.stopPropagation();
            setModalState({ key: 'delete', isOpen: true });
          }}
        >
          <Flex direction={'column'} gap={'5'}>
            <Flex width={'100%'} gap={'5'} align={'center'} wrap={'wrap'}>
              {singleFeatureLoading || singleFeatureFetching ? (
                <Spinner style={{ margin: '0 auto', scale: 1.2 }} />
              ) : singleFeatureData?.features?.length === 0 ? (
                <Flex direction={'column'} gap={'5'}>
                  <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
                    هنوز ویژگی اضافه نشده است.
                  </Text>
                  <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
                    از فیلد زیر استفاده کنید و ویژگی را به لیست اضافه کنید.
                  </Text>
                </Flex>
              ) : (
                <>
                  {singleFeatureData?.features.map(item => (
                    <ChipsItem type='feature' key={item.id} label={item.name} hasMedia={item.hasMedia} id={item.id} data={item} />
                  ))}
                </>
              )}
            </Flex>
            <Box width={'40%'}>
              <Controller
                name='name'
                control={control}
                render={({ field }) => <CustomAddItem {...field} placeholder='افزودن ویژگی' onClick={() => handleAddFeature()} isLoading={addFeaturePending} />}
              />
            </Box>
          </Flex>
        </AccordionWrapper>
      </Grid>

      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {/*
         *** for Edit OR Add Feature_________________________________________________________________________________________________________________________________________________________________
         */}
        {modalState.key !== 'delete' && (
          <>
            <ModalHeader title={'ویرایش دسته ویژگی'} handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <EditFeatureModal setIsOpen={() => setModalState({ key: 'edit', isOpen: false })} data={props} />
          </>
        )}
        {/*
         *** For Delete Feature_________________________________________________________________________________________________________________________________________________________________
         */}
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
              آیا از حذف دسته ویژگی <span style={{ fontWeight: 'bold', color: 'red' }}>{name}</span> اطمینان دارید؟
            </Text>
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
});

export default React.memo(FeatureItems);
