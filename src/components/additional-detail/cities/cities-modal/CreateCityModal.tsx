import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useParams } from 'next/navigation';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createCityList } from '@/api/additional-detail';
import { Box, Flex, Text } from '@/libs/primitives';
import CustomAddItem from '@/libs/shared/custom-add-item/CustomAddItem';
import ModalAction from '@/libs/shared/ModalAction';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CreateCityListBody, ProvinceChildrenDetail } from '@/types/additional-detail/additional-detail';

type Props = {
  data: ProvinceChildrenDetail[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

interface CityFormData {
  name: string;
  provinceId: number;
  cityList: string[];
}

const CreateCityModal = ({ setIsOpen, data }: Props) => {
  //   /*
  //    *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
  //    */
  const params = useParams();
  const provinceId = Number(params.slug[2]);
  const methods = useForm<CityFormData>({ defaultValues: { name: '', provinceId: provinceId, cityList: data?.map(item => item.name) } });
  const { control, watch, getValues, setValue } = methods;
  const queryClient = useQueryClient();

  //   /**
  //    * Services
  //    * _______________________________________________________________________________
  //    */

  const { mutate: createCityListMutate, isPending: createCityListPending } = useMutation({
    mutationFn: async (body: CreateCityListBody[]) => await createCityList(body),
    onSuccess: data => {
      if (data.status === true) {
        ToastSuccess('شهرستان مورد نظر با موفقیت ایجاد شد');
        queryClient.invalidateQueries({ queryKey: ['cities'] });
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

  const addCity = () => {
    const cityItem = getValues('name').trim();
    const cityList = getValues('cityList');
    if (cityItem && !cityList?.includes(cityItem)) {
      setValue('cityList', [...cityList, cityItem]);
      setValue('name', '');
    } else if (cityItem) {
      ToastError('شهرستان تکراری است');
    } else if (!cityItem) {
      ToastError('نام شهرستان نمی‌تواند خالی باشد');
    }
  };

  const handleSubmit = () => {
    const cityList = getValues('cityList');
    const existingCities = data.map(item => item.name);
    const newCities = cityList
      .filter(name => !existingCities.includes(name))
      .map(name => ({
        name,
        provinceId,
      }));
    if (newCities.length > 0) {
      createCityListMutate(newCities);
    } else {
      ToastError('هیچ شهرستان جدیدی اضافه نشده است');
    }
  };

  //   /**
  //    * JSX
  //    * _______________________________________________________________________________
  //    */
  return (
    <>
      <Flex direction={'column'} p={'12px 16px'} gap={'4'}>
        <Box width={'50%'}>
          <Controller name='name' control={control} render={({ field }) => <CustomAddItem {...field} placeholder='افزودن شهرستان' onClick={() => addCity()} />} />
        </Box>
        <Flex width={'100%'} align={'center'} gap={'5'} p={'4'} wrap={'wrap'} style={{ border: `1px solid ${colorPalette.gray[7]}`, borderRadius: 8 }}>
          {watch('cityList').map((item, index) => (
            <Box key={index} p={'9.5px 16px'} style={{ backgroundColor: colorPalette.gray[3], borderRadius: 16 }}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
                {item}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
      <ModalAction submitButtonText='ثبت' closeButtonText='لغو' onSubmit={() => handleSubmit()} onCloseButton={() => setIsOpen(false)} isLoading={createCityListPending} />
    </>
  );
};

export default CreateCityModal;
