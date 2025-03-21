'use client';

import React, { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import { deleteCategory, deleteFeatureItem, deleteTown } from '@/api/additional-detail';
import { Button, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { Close, HasMedia, Pencil } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import EditSubCategoryModal from '../categories/category-modal/EditSubCategoryModal';
import EditTownModal from '../cities/cities-modal/EditTownModal';
import EditFeatureItemModal from '../features/feature-modal/EditFeatureItemModal';

type Props = {
  label: string;
  hasMedia: boolean;
  id: number;
  data: any;
  type: 'category' | 'feature' | 'town';
  cityID: number;
};

type ModalStateType = {
  isOpen: boolean;
  key: 'edit-subCategory' | 'delete-subCategory' | 'edit-feature' | 'delete-feature' | 'edit-town' | 'delete-town';
};

const ChipsItem = ({ label, hasMedia, type, id, data, cityID }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [modalState, setModalState] = useState<ModalStateType>({ key: 'edit-subCategory', isOpen: false });
  const queryClient = useQueryClient();

  /* 
    ****
    Services
    ****_____________________________________________________________________________
   */

  const { mutate: deleteSubCategoryMutate, isPending: deleteSubCategoryPending } = useMutation({
    mutationFn: async () => deleteCategory(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['single-category'] });
        ToastSuccess('زیر دسته بندی مورد نظر با موفقیت حذف شد');
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

  const { mutate: deleteTownMutate, isPending: deleteTownPending } = useMutation({
    mutationFn: async () => await deleteTown(id),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['single-city'] });
        ToastSuccess('شهر مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  /* 
    ****
    Methods
    ****_____________________________________________________________________________
   */

  const handleButtonClick = (action: 'edit' | 'delete'): void => {
    switch (action) {
      case 'edit':
        if (type === 'category') {
          setModalState({ isOpen: true, key: 'edit-subCategory' });
        } else if (type === 'feature') {
          setModalState({ isOpen: true, key: 'edit-feature' });
        } else if (type === 'town') {
          setModalState({ isOpen: true, key: 'edit-town' });
        }
        break;
      case 'delete':
        if (type === 'category') {
          setModalState({ isOpen: true, key: 'delete-subCategory' });
        } else if (type === 'feature') {
          setModalState({ isOpen: true, key: 'delete-feature' });
        } else if (type === 'town') {
          setModalState({ isOpen: true, key: 'delete-town' });
        }
        break;
      default:
        break;
    }
  };

  /* 
    ****
    JSX
    ****_____________________________________________________________________________
   */
  return (
    <>
      <Flex align={'center'} gap={'3'} p={'9.5px 16px'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
        {hasMedia && <HasMedia width={14.13} height={14.13} />}
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
          {label}
        </Text>
        <IconButton variant='surface' size={'1'} onClick={() => handleButtonClick('edit')}>
          <Pencil width={16} height={16} />
        </IconButton>
        <IconButton variant='surface' size={'1'} onClick={() => handleButtonClick('delete')}>
          <ClosIcon width={16} height={16} />
        </IconButton>
      </Flex>
      {/* 
        ****
        Modals
        ****_____________________________________________________________________________
      */}
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {/* 
        ****
        edit subCategory modal
        ****_____________________________________________________________________________
      */}
        {modalState.key === 'edit-subCategory' && (
          <>
            <ModalHeader title={'ویرایش زیر دسته بندی'} handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <EditSubCategoryModal setIsOpen={() => setModalState({ key: 'edit-subCategory', isOpen: false })} data={data} />
          </>
        )}
        {/* 
        ****
        delete subCategory modal
        ****_____________________________________________________________________________
      */}
        {modalState.key === 'delete-subCategory' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>
              آیا از حذف زیر دسته بندی <span style={{ fontWeight: 'bold', color: 'red' }}> {label}</span> اطمینان دارید؟
            </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteSubCategoryMutate()}>
                <Text {...typoVariant.body3}>{deleteSubCategoryPending ? <Spinner /> : 'بله'}</Text>
              </Button>
              <Button type='button' onClick={() => setModalState({ ...modalState, isOpen: false })} variant='solid' size={'4'}>
                <Text {...typoVariant.body3}>خیر</Text>
              </Button>
            </Grid>
          </Grid>
        )}
        {/* 
        ****
        edit feature modal
        ****_____________________________________________________________________________
      */}
        {modalState.key === 'edit-feature' && (
          <>
            <ModalHeader title={'ویرایش ویژگی'} handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <EditFeatureItemModal setIsOpen={() => setModalState({ key: 'edit-feature', isOpen: false })} data={data} />
          </>
        )}
        {/* 
        ****
        delete feature modal
        ****_____________________________________________________________________________
      */}
        {modalState.key === 'delete-feature' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>
              آیا از حذف ویژگی <span style={{ fontWeight: 'bold', color: 'red' }}> {label}</span> اطمینان دارید؟
            </Text>
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

        {/* 
        ****
        edit town modal
        ****_____________________________________________________________________________
      */}

        {modalState.key === 'edit-town' && (
          <>
            <ModalHeader title='ویرایش شهر' handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <EditTownModal setIsOpen={() => setModalState({ key: 'edit-town', isOpen: false })} data={data} cityID={cityID} />
          </>
        )}

        {/* 
        ****
        delete feature modal
        ****_____________________________________________________________________________
      */}
        {modalState.key === 'delete-town' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>
              آیا از حذف ویژگی <span style={{ fontWeight: 'bold', color: 'red' }}> {label}</span> اطمینان دارید؟
            </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteTownMutate()}>
                <Text {...typoVariant.body3}>{deleteTownPending ? <Spinner /> : 'بله'}</Text>
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

export default ChipsItem;

const ClosIcon = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
