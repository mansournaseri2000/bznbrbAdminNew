'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { CopyIcon } from '@radix-ui/react-icons';

import { Box, Flex, Grid, Heading, IconButton, Modal, Text } from '@/libs/primitives';
import ModalAction from '@/libs/shared/ModalAction';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { AdsListResponce } from '@/types/ads/ads';

import AddEditAdModal from './AddEditAdModal';

type Type = 'delete' | 'edit';

const AdCard = ({ id, pic, url, altText, description }: AdsListResponce) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [type, setType] = useState<Type>('edit');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Grid width={'100%'} p={'4'} gapY={'4'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <Heading style={{ color: colorPalette.gray[11], fontSize: '32px', fontWeight: 500, lineHeight: '37.5px' }}>{id}</Heading>
          <Flex align={'center'} gap={'4'}>
            <IconButton
              size={'3'}
              onClick={() => {
                setType('edit');
                setIsOpen(true);
              }}
            >
              <Pencil />
            </IconButton>
            <IconButton
              size={'3'}
              variant='surface'
              onClick={() => {
                setType('delete');
                setIsOpen(true);
              }}
            >
              <Trash />
            </IconButton>
          </Flex>
        </Flex>
        <Flex width={'100%'} gap={'10px'}>
          <Box width={'328px'} height={'200px'} position={'relative'}>
            <Image src={pic} alt='تصویر تبلیغ' fill style={{ borderRadius: 8 }} />
          </Box>
          <Flex width={'77.5%'} direction={'column'} mt={'2'} style={{ justifyContent: 'space-between' }}>
            <Flex direction={'column'} gap={'3'}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                {altText}
              </Text>
              <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
                {description}
              </Text>
            </Flex>
            {url && (
              <Flex p={'12px 16px'} gap={'2'} align={'center'}>
                <IconButton variant='surface' size={'1'}>
                  <CopyIcon style={{ color: colorPalette.blue[10] }} />
                </IconButton>
                <Text {...typoVariant.body3} style={{ color: colorPalette.blue[11] }}>
                  {url}
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Grid>
      {type === 'delete' ? (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <ModalHeader title='حذف آگهی' handleClose={() => setIsOpen(false)} />
          <Grid width={'100%'} p={'4'}>
            <Heading as='h2' size={'5'}>
              آیا از حذف این آگهی اطمینان داید؟
            </Heading>
          </Grid>
          <ModalAction submitButtonText='حذف آگهی' closeButtonText='لغو' onCloseButton={() => setIsOpen(false)} />
        </Modal>
      ) : (
        type === 'edit' && <AddEditAdModal type='edit' isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default AdCard;
