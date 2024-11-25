'use client';

import React from 'react';

import styled from 'styled-components';

import { createAndEditCategoryConstant } from '@/constants/additional-detail';
import { Flex, IconButton, Modal, Text } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Close, Pencil } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  type: 'add_category' | 'edit_category';
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CategoryModal = (props: Props) => {
  const { type, isOpen, setIsOpen } = props;
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalHeader title={type === 'add_category' ? 'افزودن دسته بندی' : 'ویرایش دسته بندی'} icon={<Close />} handleClose={() => setIsOpen(false)} />
      <Flex direction={'column'} p={'12px 16px'} gap={'4'}>
        <Flex p={'5'} style={{ border: '1px solid red' }}>
          طبیعت گردی
        </Flex>
        <Flex width={'50%'} p={'5'} style={{ border: '1px solid red' }}>
          افزودن زیر دسته بندی
        </Flex>
        <Flex width={'100%'} gap={'5'} wrap={'wrap'} p={'4'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
          {type === 'edit_category' ? (
            <>
              {createAndEditCategoryConstant.map((item, index) => (
                <Flex key={index} width={'fit-content'} gap={'3'} p={'9.5px 16px'} align={'center'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
                  <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                    {item.name}
                  </Text>
                  <IconButton size={'1'} variant='surface'>
                    <Pencil />
                  </IconButton>
                  <IconButton size={'1'} variant='surface'>
                    <CustomClose />
                  </IconButton>
                </Flex>
              ))}
            </>
          ) : (
            <Flex direction={'column'} gap={'5'}>
              <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
                هنوز زیردسته بندی اضافه نشده است.
              </Text>
              <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
                از فیلد بالا استفاده کنید و زیردسته بندی را به لیست اضافه کنید.
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>

      <ModalAction submitButtonText='ثبت ' closeButtonText='لغو' onCloseButton={() => setIsOpen(false)} />
    </Modal>
  );
};

export default CategoryModal;

const CustomClose = styled(Close)`
  path {
    fill: ${colorPalette.pink[11]};
  }
`;
