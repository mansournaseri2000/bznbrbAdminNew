import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import Image from 'next/image';

import { Box, Button, Flex, Grid, Text, TextArea, TextField } from '@/libs/primitives';
import ImagePicker2 from '@/libs/shared/ImagePicker2';
import ModalAction from '@/libs/shared/ModalAction';
import { Camera } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  state: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditPointPictureModal = ({ state, setIsOpen }: Props) => {
  const methods = useForm({ defaultValues: { pic: '', province: '', city: '', town: '', alternativeText: '', description: '', briefDescription: '' } });
  const { control, watch } = methods;
  return (
    <>
      <Grid minHeight={'286px'} p={'4'} gapY={'5'}>
        <ImagePicker2 name={state} resetStore='' localPath=''>
          <Button size={'3'} style={{ width: 'fit-content' }}>
            <Flex align={'center'} gap={'2'}>
              <Camera />
              <Text {...typoVariant.body1}>ارسال تصویر</Text>
            </Flex>
          </Button>
        </ImagePicker2>
        {watch('pic').length !== 0 && (
          <>
            <Box width={'538px'} height={'331px'} position={'relative'} style={{ border: '1px solid red', borderRadius: 8 }}>
              <Image src={''} alt='' fill style={{ borderRadius: 8, objectFit: 'cover' }} />
            </Box>
            <Grid width={'100%'} gap={'5'} columns={'3'}>
              <Controller name='province' control={control} render={({ field }) => <TextField {...field} placeholder='استان' />} />
              <Controller name='city' control={control} render={({ field }) => <TextField {...field} placeholder='شهرستان' />} />
              <Controller name='town' control={control} render={({ field }) => <TextField {...field} placeholder='شهر' />} />
            </Grid>
            <Controller name='alternativeText' control={control} render={({ field }) => <TextField {...field} placeholder='متن جایگزین' />} />

            <Controller name='description' control={control} render={({ field }) => <TextArea {...field} placeholder='توضیحات تصویر' rows={6} />} />

            <Controller name='briefDescription' control={control} render={({ field }) => <TextArea {...field} placeholder='شزح مختصر' rows={6} />} />
          </>
        )}
      </Grid>
      <ModalAction submitButtonText='ثبت و ارسال' closeButtonText='لفو و بازگشت' onCloseButton={() => setIsOpen(false)} />
    </>
  );
};

export default EditPointPictureModal;
