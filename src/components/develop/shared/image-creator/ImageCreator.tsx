import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { ImageItem } from '@/api/place';
import { Box, Flex, Grid, IconButton, Modal, Text, TextArea, TextField } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { Pencil, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  userPicUpload: ImageItem;
};

const ImageCreator = ({ userPicUpload }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm({
    defaultValues: { link: userPicUpload.path ? userPicUpload.path : '', alt: userPicUpload.alt ? userPicUpload.alt : '', description: userPicUpload.description ? userPicUpload.description : '' },
  });
  const { control, watch } = methods;

  return (
    <>
      <Grid width={'100%'} gapX={'10px'} p={'12px'} style={{ gridTemplateColumns: 'auto 2fr auto', border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
        <Box width={'328px'} height={'200px'} position={'relative'}>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${userPicUpload.path}`} alt='تصویر نقطه' fill style={{ borderRadius: 8 }} />
        </Box>
        <Flex direction={'column'} gap={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
            {watch('link')}
          </Text>
          <Controller name='alt' control={control} render={({ field }) => <TextField {...field} placeholder='Alt Text' style={{ borderRadius: 12 }} />} />
          <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' style={{ height: 88, borderRadius: 12 }} />} />
        </Flex>
        <Flex direction={'column'} gap={'4'}>
          <IconButton size={'3'} type='button' onClick={() => setIsOpen(true)}>
            <Pencil />
          </IconButton>

          <IconButton size={'3'} variant='surface' colorVariant='PINK'>
            <Trash />
          </IconButton>
        </Flex>
      </Grid>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='ویرایش تصاویر' handleClose={() => setIsOpen(false)} />
        {/* <EditPointPictureModal setIsOpen={setIsOpen} state='' /> */}
      </Modal>
    </>
  );
};

export default ImageCreator;
