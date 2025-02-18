import React, { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteContactUsItem } from '@/api/contact-us/contact-us';
import { Button, Flex, Grid, IconButton, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';
import { Check, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { AllContactRequestsDetail } from '@/types/contact-us/contact-us';

import AnswerModal from '../answer-modal/AnswerModal';

type Props = AllContactRequestsDetail & {
  index: number;
  data: AllContactRequestsDetail;
};

type ModalStateType = {
  isOpen: boolean;
  key: 'answer' | 'delete';
};

const ContactUsCard = (props: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { index, subject, content, name, created_at, status, email, data } = props;
  const [modalState, setModalState] = useState<ModalStateType>({ key: 'answer', isOpen: false });
  const queryClient = useQueryClient();
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { mutate: deleteMutate, isPending: deletePending } = useMutation({
    mutationFn: async () => await deleteContactUsItem(data.id),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['contact-us'] });
        ToastSuccess('پیام مورد نظر با موفقیت حذف شد');
        setModalState({ key: 'delete', isOpen: false });
      } else {
        ToastError('مشکلی پیش آمده است . لطفا مجددا تلاش نمایید');
      }
    },
  });

  /*
   ***  
   Hooks and Methods _________________________________________________________________________________________________________________________________________________________________
   */

  const handleShowModal = () => {
    if (status === 'PENDING') {
      setModalState({ key: 'answer', isOpen: true });
    }
  };

  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
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
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {subject}
          </Text>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {email}
          </Text>
        </Flex>
        <Flex direction={'column'} gap={'1'}>
          <Text style={{ color: colorPalette.gray[11], fontWeight: 400, fontSize: '12px', lineHeight: '15.6px' }}>{name ? name : '__'}</Text>
          <Text style={{ color: colorPalette.gray[9], fontWeight: 400, fontSize: '10px', lineHeight: '13px' }}>{created_at ? convertTimestampToPersianDate(created_at) : '__'}</Text>
        </Flex>
        <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
          {content}
        </Text>
        <Flex width={'100%'} align={'center'} justify={'end'} gap={'2'}>
          <Button size={'2'} variant='soft' type='button' colorVariant={status === 'DONE' ? 'BLACK' : 'BLUE'} onClick={handleShowModal} style={status === 'DONE' ? { pointerEvents: 'none' } : {}}>
            {status === 'DONE' ? (
              <Flex align={'center'} gap={'2'}>
                <Check />
                <Text {...typoVariant.body3}>پاسخ داده شده</Text>
              </Flex>
            ) : (
              status === 'PENDING' && <Text {...typoVariant.body3}>بدون پاسخ</Text>
            )}
          </Button>
          <IconButton size={'2'} type='button' colorVariant='PINK' onClick={() => setModalState({ key: 'delete', isOpen: true })}>
            <Trash />
          </IconButton>
        </Flex>
      </Grid>
      {/*
       *** Modal_________________________________________________________________________________________________________________________________________________________________
       */}
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {/*
         ***
          Answer Modal _________________________________________________________________________________________________________________________________________________________________
         */}
        {modalState.key === 'answer' && status === 'PENDING' && (
          <>
            <ModalHeader title='ثبت پاسخ' handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <AnswerModal setIsOpen={() => setModalState({ isOpen: false, key: 'answer' })} data={data} />
          </>
        )}
        {/*
         ***
          delete Modal _________________________________________________________________________________________________________________________________________________________________
         */}
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>
              آیا از حذف مورد <span style={{ fontWeight: 'bold', color: 'red' }}>{subject}</span> اطمینان دارید؟
            </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteMutate()}>
                <Text {...typoVariant.body3}>{deletePending ? <Spinner /> : 'بله'}</Text>
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

export default ContactUsCard;
