'use client';

import React, { useState } from 'react';

import { Button, Flex, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import ModalContent from './AddEditModalContent';

const AddComment = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Flex width={'100%'} justify={'center'} py={'79px'} align={'center'} style={{ backgroundColor: colorPalette.gray[2], border: `2px dashed ${colorPalette.blue[8]}`, borderRadius: 8 }}>
        <Button variant='surface' onClick={() => setIsOpen(true)}>
          <Flex p={'13.5px 15px 13.5px 19px'} align={'center'} gap={'2'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}>افزودن نظر</Text>
          </Flex>
        </Button>
      </Flex>
      <ModalContent type='create' isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AddComment;
