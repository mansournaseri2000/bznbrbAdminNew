'use client';

import React, { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { useParams, useRouter } from 'next/navigation';

import { PlusIcon } from '@radix-ui/react-icons';
import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery } from '@tanstack/react-query';

import { getProvinceAbout, updateProvinceAbout } from '@/api/additional-detail';
import { Button, Flex, Grid, IconButton, Modal, Text, TextField } from '@/libs/primitives';
import FormSubmitWrapper from '@/libs/shared/FormSubmitWrapper';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import SimpleWrapper2 from '@/libs/shared/wrapper/SimpleWrapper2';
import { ImageIcon, Pencil } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { AreaDetail, UpdateProvinceBody } from '@/types/additional-detail/additional-detail';

import AddAreaModal from './AddAreaModal';
import AddIconToAreaModal from './AddIconToAreaModal';
import EditAreaModal from './EditAreaModal';

type ModalStateType = {
  isOpen: boolean;
  key: 'add' | 'edit' | 'svg';
};

const DataManagement = () => {
  const params = useParams();
  const provinceId = Number(params.slug[2]);
  /**
   * get Services
   * _______________________________________________________________________________
   */
  const {
    data: provinceAreData,
    isLoading: provinceAreLoading,
    isFetching: provinceAreFetching,
  } = useQuery({ queryKey: ['province-area', provinceId], queryFn: async () => await getProvinceAbout(provinceId), staleTime: 0 });
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [modalState, setModalState] = useState<ModalStateType>({ isOpen: false, key: 'add' });
  const [currentItem, setCurrentItem] = useState<AreaDetail>();
  const { back } = useRouter();

  const methods = useForm({
    defaultValues: {
      id: provinceId,
      type: 'PROVINCE',
      titleOfDetail: Boolean(provinceAreData?.titleOfDetail) ? provinceAreData?.titleOfDetail : '',
      famousPerson: Boolean(provinceAreData?.famousPerson) ? provinceAreData?.famousPerson : '',
      infoDescription: Boolean(provinceAreData?.infoDescription) ? provinceAreData?.infoDescription : '',
      areaDetails: Boolean(provinceAreData?.AreaDetails) ? provinceAreData?.AreaDetails : [],
      titleItem: currentItem?.titleItem ? currentItem?.titleItem : '',
      descriptionItem: currentItem?.descriptionItem ? currentItem?.descriptionItem : '',
    },
  });
  const { control, setValue, watch } = methods;
  console.log('data', provinceAreData);
  /**
   * Services
   * _______________________________________________________________________________
   */
  const { mutate: updateProvinceMutate, isPending: updateProvincePending } = useMutation({
    mutationFn: async (body: UpdateProvinceBody) => await updateProvinceAbout(body),
    onSuccess: data => {
      if (data.status === true) {
        ToastSuccess('اطلاعات استان با موفقیت بروزرسانی شد');
        back();
      } else {
        ToastError('مشکلی پیش آمده است . لطفا مجددا تلاش نمایید');
      }
    },
  });
  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  useEffect(() => {
    if (provinceAreData) {
      setValue('titleOfDetail', provinceAreData.titleOfDetail || '');
      setValue('famousPerson', provinceAreData.famousPerson || '');
      setValue('infoDescription', provinceAreData.infoDescription || '');
      setValue('areaDetails', provinceAreData.AreaDetails || []);
    }
  }, [provinceAreData, setValue]);

  useEffect(() => {
    if (currentItem) {
      setValue('titleItem', currentItem.titleItem);
      setValue('descriptionItem', currentItem.descriptionItem);
    }
  }, [currentItem]);

  const handleSubmit = () => {
    const data: UpdateProvinceBody = {
      id: provinceId,
      type: 'PROVINCE',
      titleOfDetail: watch('titleOfDetail') as any,
      famousPerson: watch('famousPerson') as any,
      infoDescription: watch('infoDescription') as any,
    };
    updateProvinceMutate(data);
  };

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <Grid width={'100%'} gapY={'5'}>
        <SimpleWrapper2 hero='اطلاعات' type='changeAble'>
          <Grid width={'100%'} gapY={'14px'}>
            <Controller name='titleOfDetail' control={control} render={({ field }) => <TextField {...field} placeholder='عنوان' />} />
            <Controller name='famousPerson' control={control} render={({ field }) => <TextField {...field} placeholder='شخصیت برجسته' />} />
            <Controller name='infoDescription' control={control} render={({ field }) => <TextField {...field} placeholder='متن صفحه استان' />} />
            <Button size={'4'} variant='ghost' style={{ width: 'fit-content' }} onClick={() => setModalState({ isOpen: true, key: 'add' })} disabled={provinceAreData?.AreaDetails.length === 3}>
              <Flex align={'center'} gap={'2'}>
                <PlusIcon width={16} height={16} style={{ color: colorPalette.blue[10] }} />
                <Text {...typoVariant.body1}> افزودن جاذبه</Text>
              </Flex>
            </Button>
            {provinceAreLoading || provinceAreFetching ? (
              <Spinner style={{ margin: '40px auto', scale: 1.5 }} />
            ) : (
              provinceAreData?.AreaDetails.length !== 0 &&
              provinceAreData?.AreaDetails.map((item, index) => (
                <Grid key={item.id} gapX={'5'} gapY={'14px'} style={{ gridTemplateColumns: '1fr 1fr auto auto' }}>
                  <Controller
                    name={`areaDetails.${index}.titleItem`}
                    control={control}
                    render={({ field }) => <TextField {...field} placeholder='عنوان جاذبه' defaultValue={item.titleItem} readOnly />}
                  />
                  <Controller
                    name={`areaDetails.${index}.descriptionItem`}
                    control={control}
                    render={({ field }) => <TextField {...field} placeholder='توضیح جاذبه' defaultValue={item.descriptionItem} readOnly />}
                  />
                  <IconButton
                    size={'3'}
                    type='button'
                    onClick={() => {
                      setCurrentItem(item);
                      setModalState({ key: 'edit', isOpen: true });
                    }}
                  >
                    <Pencil width={16} height={16} />
                  </IconButton>
                  <IconButton
                    size={'3'}
                    type='button'
                    onClick={() => {
                      setCurrentItem(item);
                      setModalState({ key: 'svg', isOpen: true });
                    }}
                  >
                    <ImageIcon width={16} height={16} />
                  </IconButton>
                </Grid>
              ))
            )}
          </Grid>
        </SimpleWrapper2>
        <FormSubmitWrapper
          buttonsPosition='end'
          submitButtonText='ثبت'
          closeButtonText='لغو'
          onCloseButton={() => back()}
          onSubmit={() => handleSubmit()}
          isLoading={updateProvincePending}
          disabled={watch('titleOfDetail')?.length === 0 && watch('famousPerson')?.length === 0 && watch('infoDescription')?.length === 0}
        />
      </Grid>
      {/* 
        ****
         MODAL
        **** _______________________________________________________________________________
        */}
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {/* 
        ****
         modal for add area
        **** _______________________________________________________________________________
        */}
        {modalState.key === 'add' && (
          <>
            <ModalHeader title='افزودن جاذبه' handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <AddAreaModal setIsOpen={() => setModalState({ isOpen: false, key: 'add' })} />
          </>
        )}
        {/* 
        ****
         modal for edit area
        **** _______________________________________________________________________________
        */}
        {modalState.key === 'edit' && (
          <>
            <ModalHeader title='ویرایش جاذبه' handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <EditAreaModal setIsOpen={() => setModalState({ isOpen: false, key: 'edit' })} currentItem={currentItem as any} />
          </>
        )}
        {/* 
        ****
         modal for add or edit SVG
        **** _______________________________________________________________________________
        */}
        {modalState.key === 'svg' && (
          <>
            <ModalHeader title='ویرایش آیکون جاذبه' handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <AddIconToAreaModal setIsOpen={() => setModalState({ isOpen: false, key: 'svg' })} data={currentItem as any} />
          </>
        )}
      </Modal>
    </FormProvider>
  );
};

export default DataManagement;
