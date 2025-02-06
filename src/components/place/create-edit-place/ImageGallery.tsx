'use client';

import React, { useState } from 'react';

import ImageCreator from '@/components/develop/shared/image-creator/ImageCreator';
import { Button, Flex, Heading, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
// import ImagePicker2 from '@/libs/shared/ImagePicker2';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { UserSentPicturesForPlaceDetail } from '@/types/place/find-place';

import EditPointPictureModal from './modal/EditPointPictureModal';

type Props = {
  userPicUpload: UserSentPicturesForPlaceDetail[];
};

const ImageGallery = ({ userPicUpload }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {userPicUpload.length === 0 ? (
        <Flex direction={'column'} gap={'6'} align={'center'} py={'87.5px'}>
          <Heading as='h3' size={'3'} style={{ color: colorPalette.gray[11] }}>
            هنوز تصاویر گالری اضافه نشده اند.
          </Heading>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11], textAlign: 'center' }}>
            تصاویر گالری مجموعه تصاویری هستند که تنها در صفحه نقطه نمایش داده می شوند.
          </Text>

          <Button size={'4'} type='button' onClick={() => setIsOpen(true)}>
            <Flex gap={'2'} align={'center'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن تصویر</Text>
            </Flex>
          </Button>
        </Flex>
      ) : (
        <Flex width={'100%'} direction={'column'} gap={'5'}>
          <Button variant='ghost' size={'3'} style={{ width: 'fit-content' }}>
            <Flex align={'center'} gap={'2'}>
              <Text {...typoVariant.body1}>+</Text>
              <Text {...typoVariant.body1}>افزودن تصویر</Text>
            </Flex>
          </Button>

          {userPicUpload.map(item => (
            <ImageCreator key={item.id} userPicUpload={item} />
          ))}
        </Flex>
      )}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='تصاویر' handleClose={() => setIsOpen(false)} />
        <EditPointPictureModal state='pictures' setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default ImageGallery;
