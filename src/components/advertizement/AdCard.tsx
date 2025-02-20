'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { CopyIcon } from '@radix-ui/react-icons';

import { Box, Button, Flex, Grid, Heading, IconButton, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { AdsCardDetail } from '@/types/ads/ads';

type ModalStateTypes = {
  isOpen: boolean;
  key: 'delete' | 'edit';
};

const AdCard = ({ id, pic, url, altText, description }: AdsCardDetail) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const [modalState, setModalState] = useState<ModalStateTypes>({ isOpen: false, key: 'edit' });

  return (
    <>
      <Grid width={'100%'} p={'4'} gapY={'4'} style={{ border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <Heading style={{ color: colorPalette.gray[11], fontSize: '32px', fontWeight: 500, lineHeight: '37.5px' }}>{id}</Heading>
          <Flex align={'center'} gap={'4'}>
            <IconButton size={'3'} onClick={() => setModalState({ key: 'edit', isOpen: true })}>
              <Pencil />
            </IconButton>
            <IconButton
              size={'3'}
              variant='surface'
              onClick={() => {
                setModalState({ key: 'delete', isOpen: true });
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
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {modalState.key === 'edit' && (
          <>
            <ModalHeader title='ویرایش آگهی' handleClose={() => setModalState({ ...modalState, isOpen: false })} />
          </>
        )}
        advertizement
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text>
              آیا از حذف آگهی <span style={{ fontWeight: 'bold', color: 'red' }}>{altText}</span> اطمینان دارید؟
            </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'}>
                <Text {...typoVariant.body3}>بله</Text>
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

export default AdCard;
