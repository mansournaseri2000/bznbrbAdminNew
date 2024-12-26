'use client';

import React, { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteCategory } from '@/api/additional-detail';
import { Box, Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { Close } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CategoriesResponse } from '@/types/additional-detail/additional-detail';

import EditCategoryModal from '../category-modal/EditCategoryModal';

type modalStateType = {
  isOpen: boolean;
  key: 'edit' | 'delete';
};

const CategoryItems = (props: CategoriesResponse) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { name, children, id, isEditable } = props;
  const [modalState, setModalState] = useState<modalStateType>({ isOpen: false, key: 'edit' });
  const queryClient = useQueryClient();
  // const isEditable = true;
  /* 
    ****
    Services
    ****_____________________________________________________________________________
   */

  const { mutate: deleteCategoryMutate, isPending: deleteCategoryPending } = useMutation({
    mutationFn: async () => deleteCategory(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['categories'] });
        ToastSuccess('دسته بندی مورد نظر با موفقیت حذف شد');
        setModalState({ ...modalState, isOpen: false });
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  return (
    <>
      <Grid width={'100%'} gapY={'5'}>
        <AccordionWrapper
          hero={name}
          withEdit
          withDelete
          isDisableDelete={isEditable === false}
          onEdit={e => {
            e.stopPropagation();
            setModalState({ key: 'edit', isOpen: true });
          }}
          onDelete={e => {
            e.stopPropagation();
            setModalState({ key: 'delete', isOpen: true });
          }}
        >
          <Flex width={'100%'} align={'center'} gap={'5'} wrap={'wrap'}>
            {children.length === 0 ? (
              <Text {...typoVariant.body1}>در حال حاضر دیتایی برای این دسته بندی وجود ندارد</Text>
            ) : (
              <>
                {children.map(item => (
                  <Box key={item.id} p={'9.5px 16px'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
                    <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                      {item.name}
                    </Text>
                  </Box>
                ))}
              </>
            )}
          </Flex>
        </AccordionWrapper>
      </Grid>
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'edit' && (
          <>
            <ModalHeader title={'ویرایش دسته بندی'} icon={<Close />} handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <EditCategoryModal setIsOpen={() => setModalState} data={props} />
          </>
        )}
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>آیا از حذف این دسته بندی اطمینان دارید؟ </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteCategoryMutate()}>
                <Text {...typoVariant.body3}>{deleteCategoryPending ? <Spinner /> : 'بله'}</Text>
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

export default CategoryItems;
