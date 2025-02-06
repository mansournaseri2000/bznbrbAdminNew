'use client';

import React, { useState } from 'react';

import SelectedPrimaryImage from '@/components/develop/data-management/selected-primary-image/SelectedPrimaryImage';
import { Button, Flex, Heading, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { Picture } from '@/types/place/find-place';

import EditPointPictureModal from './modal/EditPointPictureModal';

type Props = {
  picture: Picture;
};

const PrimaryImage = ({ picture }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {!picture ? (
        <Flex direction={'column'} gap={'6'} align={'center'} py={'87.5px'}>
          <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
            هنوز تصویر شاخصی اضافه نشده است.
          </Heading>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
            دقت داشته باشید که تصویر شاخص اولین تصویر نقطه و تصویری است که بر روی کارت <br /> نقطه نمایش داده می شود!
          </Text>

          <Button size={'4'} type='button' onClick={() => setIsOpen(true)}>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن تصویر شاخص</Text>
            </Flex>
          </Button>
        </Flex>
      ) : (
        <SelectedPrimaryImage picture={picture} />
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='تصویر شاخص' handleClose={() => setIsOpen(false)} />
        <EditPointPictureModal state='pictures' setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default PrimaryImage;
