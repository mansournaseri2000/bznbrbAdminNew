import React, { useEffect } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

// import { useMutation } from '@tanstack/react-query';

// import { CityUploaderParams, UploadIconForCity, UploadImageForCity } from '@/api/additional-detail';
import { Flex, TextField } from '@/libs/primitives';
import ImagePicker2 from '@/libs/shared/ImagePicker2';
import ItemWithUploader from '@/libs/shared/item-with-uploader/ItemWithUploader';
import ModalAction from '@/libs/shared/ModalAction';
import Uploader from '@/libs/shared/uploader/Uploader';
import { citiesDetailForProvince } from '@/types/additional-detail/additional-detail';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<{ isOpen: boolean; key: 'edit' }>>;
  data: citiesDetailForProvince;
};

const EditCityModal = ({ setIsOpen, data }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const methods = useForm({
    defaultValues: {
      name: data.name,
      imagePath: data?.banner,
      iconPath: data?.icon,
      localImagePath: null,
      localIconPath: null,
      isBanner: Boolean(data?.banner) ? true : false,
      isIcon: Boolean(data?.icon) ? true : false,
    },
  });
  const { control, reset, watch } = methods;

  /**
   * Services
   * _______________________________________________________________________________
   */

  // const { mutate: uploadImageMutate } = useMutation({
  //   mutationFn: async (body: CityUploaderParams) => await UploadImageForCity(body),
  // });

  // const { mutate: uploadIconMutate } = useMutation({
  //   mutationFn: async (body: CityUploaderParams) => await UploadIconForCity(body),
  // });

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */

  useEffect(() => {
    reset({ name: data.name });
  }, [data, reset]);

  return (
    <FormProvider {...methods}>
      <Flex direction={'column'} align={'center'} p={'12px 16px'} gap={'4'}>
        <Flex gap={'3'}>
          {watch('imagePath') ? (
            <ItemWithUploader resetStore='isBanner' type='image' localPath={`${watch('localImagePath')}`} filePath={data?.banner} isOrigin={watch('isBanner')} />
          ) : (
            <ImagePicker2 resetStore='isBanner' name='imagePath' localPath='localImagePath'>
              <Uploader type='pic' />
            </ImagePicker2>
          )}
          {watch('iconPath') ? (
            <ItemWithUploader resetStore='isIcon' type='svg' localPath={`${watch('localIconPath')}`} filePath={data?.icon} isOrigin={watch('isIcon')} />
          ) : (
            <ImagePicker2 resetStore='isIcon' name='iconPath' localPath='localIconPath'>
              <Uploader type='icon' />
            </ImagePicker2>
          )}
        </Flex>
      </Flex>
      <Controller name='name' control={control} render={({ field }) => <TextField {...field} placeholder='' style={{ width: '50%', margin: '0 auto' }} />} />
      <ModalAction submitButtonText='ثبت ' closeButtonText='لغو' onCloseButton={() => setIsOpen({ key: 'edit', isOpen: false })} />
    </FormProvider>
  );
};

export default EditCityModal;
