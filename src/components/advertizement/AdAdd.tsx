'use client';

import React, { useState } from 'react';

import { Button, Flex, Heading, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import AddEditAdModal from './modal/AddEditAdModal';

type Props = {
  id: string;
};

const AdAdd = ({ id }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Flex width={'100%'} align={'center'} justify={'between'} style={{ backgroundColor: colorPalette.gray[2], border: `2px dashed ${colorPalette.blue[8]}`, borderRadius: 8 }}>
        <Flex p={'44px 32px'}>
          <Heading style={{ fontSize: '96px', fontWeight: 500, lineHeight: '122.5px', color: colorPalette.gray[8] }}>{id}</Heading>
        </Flex>
        <Flex width={'55%'}>
          <Button variant='surface' onClick={() => setIsOpen(true)}>
            <Flex p={'13.5px 15px 13.5px 19px'} align={'center'} gap={'2'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن آگهی</Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
      <AddEditAdModal type='add' isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AdAdd;
