import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import styled from 'styled-components';

import { Flex, Grid, IconButton, Modal, Text, TextField } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Close, Pencil } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: 'create' | 'edit';
};

const CitiesManagementModal = (props: Props) => {
  const { isOpen, setIsOpen, type } = props;
  const [cityList, setCityList] = useState<{ id: number; label: string }[] | []>();

  console.log('setCityList', setCityList(cityList));

  const methods = useForm({ defaultValues: { province: '' } });
  const { control } = methods;
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalHeader icon={<Close />} title={type === 'create' ? 'افزودن شهرستان' : 'ویرایش شهرستان'} handleClose={() => setIsOpen(false)} />
      <Grid gapY={'4'} p={'12px 16px'}>
        <Controller name='province' control={control} render={({ field }) => <TextField {...field} placeholder='نام شهرستان' />} />
        <Flex p={'13.5px 16px'} width={'50%'} style={{ border: '2px solid red' }}>
          افزودن شهر
        </Flex>
        {cityList?.length === 0 ? (
          <Flex direction={'column'} p={'30.5px 16px'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
            <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
              هنوز شهری اضافه نشده است.
            </Text>
            <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
              از فیلد بالا استفاده کنید و شهر را به لیست اضافه کنید.
            </Text>
          </Flex>
        ) : (
          cityList?.length !== 0 && (
            <Flex align={'center'} gap={'5'} p={'4'} wrap={'wrap'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
              <Flex width={'fit-content'} p={'9.5px 16px'} align={'center'} gap={'4'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
                <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                  تبریز
                </Text>
                <IconButton variant='surface' size={'1'}>
                  <Pencil />
                </IconButton>
                <IconButton variant='surface' size={'1'}>
                  <CloseIcon />
                </IconButton>
              </Flex>
            </Flex>
          )
        )}
      </Grid>
      <ModalAction submitButtonText='ثبت' closeButtonText='لغو' onCloseButton={() => setIsOpen(false)} />
    </Modal>
  );
};

export default CitiesManagementModal;

const CloseIcon = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
