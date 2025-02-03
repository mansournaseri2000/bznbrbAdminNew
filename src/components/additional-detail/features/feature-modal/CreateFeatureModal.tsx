import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createFeatureGroupArray } from '@/api/additional-detail';
import { Box, Flex, Text } from '@/libs/primitives';
import CustomAddItem from '@/libs/shared/custom-add-item/CustomAddItem';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CreateFeatureGroupArrayBody, FeaturesResponse } from '@/types/additional-detail/additional-detail';

type Props = {
  data: FeaturesResponse[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface FeatureFormData {
  name: string;
  featureGroupid: number;
  featureList: string[];
}

const CreateFeatureModal = ({ setIsOpen, data }: Props) => {
  //   /*
  //    *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
  //    */
  const methods = useForm<FeatureFormData>({ defaultValues: { name: '', featureGroupid: 0, featureList: data.map(item => item.name) } });
  const { control, watch, getValues, setValue } = methods;
  const queryClient = useQueryClient();

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const { mutate: createFeatureGroupMutate, isPending: createFeatureGroupPending } = useMutation({
    mutationFn: async (body: CreateFeatureGroupArrayBody[]) => await createFeatureGroupArray(body),
    onSuccess: data => {
      if (data.status === true) {
        ToastSuccess('ویژگی مورد نظر با موفقیت ایجاد شد');
        queryClient.invalidateQueries({ queryKey: ['features'] });
        setIsOpen(false);
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  //   /**
  //    * Methods
  //    * _______________________________________________________________________________
  //    */

  const addFeature = () => {
    const featureItem = getValues('name').trim();
    const featureList = getValues('featureList');
    if (featureItem && !featureList?.includes(featureItem)) {
      setValue('featureList', [...featureList, featureItem]);
      setValue('name', '');
    } else if (featureItem) {
      ToastError('دسته ویژگی تکراری است');
    }
  };

  const handleSubmit = () => {
    const featureList = getValues('featureList');
    const existingFeatures = data.map(item => item.name);
    const newFeature = featureList.filter(name => !existingFeatures.includes(name)).map(name => ({ name, featureGroupid: 0 }));
    if (newFeature.length > 0) {
      createFeatureGroupMutate(newFeature);
    } else {
      ToastError('هیچ ویژگی جدیدی اضافه نشده است');
    }
  };

  return (
    <>
      <Flex direction={'column'} p={'12px 16px'} gap={'4'}>
        <Box width={'50%'}>
          <Controller name='name' control={control} render={({ field }) => <CustomAddItem {...field} placeholder='افزودن دسته ویژگی' onClick={() => addFeature()} />} />
        </Box>
        <Flex width={'100%'} align={'center'} gap={'5'} p={'4'} wrap={'wrap'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
          {watch('featureList').map((item, index) => (
            <Box key={index} p={'9.5px 16px'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                {item}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
      <ModalAction submitButtonText='ثبت' closeButtonText='لغو' onCloseButton={() => setIsOpen(false)} onSubmit={handleSubmit} isLoading={createFeatureGroupPending} />
    </>
  );
};

export default CreateFeatureModal;
