'use client';

import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import Image from 'next/image';

import EditPointPictureModal from '@/components/place/create-edit-place/modal/EditPointPictureModal';
import { Box, Flex, Grid, IconButton, Modal, TextArea, TextField } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { Picture } from '@/types/place/find-place';

type Props = {
  picture: Picture;
};

const SelectedPrimaryImage = ({ picture }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({ defaultValues: { text: '', description: '' } });
  const { control } = methods;
  /**
   *  JSX
   * _______________________________________________________________________________
   */
  return (
    <FormProvider {...methods}>
      <Grid width={'100%'} gapX={'10px'} p={'12px'} style={{ gridTemplateColumns: 'auto 2fr auto', border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
        <Box width={'610px'} height={'342px'} position={'relative'}>
          <Image src={picture ? `${process.env.NEXT_PUBLIC_BASE_URL_image}${picture.path}` : ''} alt='تصویر شاخص' fill style={{ borderRadius: 8 }} />
        </Box>
        <Flex direction={'column'} gap={'2'}>
          <Controller name='text' control={control} render={({ field }) => <TextField {...field} placeholder='Alt Text' style={{ borderRadius: 12 }} />} />
          <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' rows={6} style={{ borderRadius: 12 }} />} />
        </Flex>
        <Flex direction={'column'} gap={'4'}>
          <IconButton size={'4'} type='button' onClick={() => setIsOpen(true)}>
            <Pencil />
          </IconButton>

          <IconButton size={'4'} variant='ghost' colorVariant='PINK'>
            <Trash />
          </IconButton>
        </Flex>
      </Grid>
      {/*
       * Modal
       * _______________________________________________________________________________
       */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='ویرایش تصویر شاخص' handleClose={() => setIsOpen(false)} />
        <EditPointPictureModal state='pictures' setIsOpen={setIsOpen} originPic={picture} />
      </Modal>
    </FormProvider>
  );
};

export default SelectedPrimaryImage;
