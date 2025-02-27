import React, { forwardRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addTownToCity, deleteCity, getCitiesByProvinceId } from '@/api/additional-detail';
import { Box, Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import CustomAddItem from '@/libs/shared/custom-add-item/CustomAddItem';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { citiesDetailForProvince } from '@/types/additional-detail/additional-detail';

import ChipsItem from '../../chips-item/ChipsItem';
import EditCityModal from '../cities-modal/EditCityModal';

type CitiesItemsResponse = citiesDetailForProvince & {
  selected: boolean;
  onSelect: VoidFunction;
  currentIndex: number;
};

type modalStateType = {
  isOpen: boolean;
  key: 'edit' | 'delete';
};

const CityItems = forwardRef<HTMLDivElement, CitiesItemsResponse>((props, ref) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { name, id, hasMedia, onSelect, selected } = props;

  const [modalState, setModalState] = useState<modalStateType>({ isOpen: false, key: 'edit' });
  const methods = useForm({ defaultValues: { name: '' } });
  const { control, watch, getValues, setValue } = methods;
  const queryClient = useQueryClient();

  /**
   * Services
   * _______________________________________________________________________________
   */

  // *****  GET Service  *****
  const {
    data: cityData,
    isLoading: cityLoading,
    isFetching: cityFetching,
  } = useQuery({ queryKey: ['single-city', id], queryFn: async () => getCitiesByProvinceId(id), initialData: props as any, enabled: selected });

  // *****  POST And DELETE Service  *****

  const { mutate: addTownMutate, isPending: addTownPending } = useMutation({
    mutationFn: async () => await addTownToCity({ name: watch('name'), citiesId: id }),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['single-city'] });
        ToastSuccess('شهر مورد نظر با موفقیت اضافه شد');
        setValue('name', '');
      } else {
        ToastError('لطفا دوباره تلاش نمایید');
      }
    },
  });

  const { mutate: deleteCityMutate, isPending: deleteCityPending } = useMutation({
    mutationFn: async () => await deleteCity(id),
    onSuccess: data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['cities'] });
        ToastSuccess('شهر مورد نظر با موفقیت حذف شد');
      } else {
        ToastError('مشکلی پیش آمده . لطفا مجددا تلاش کنید');
      }
    },
  });

  //   /**
  //    * Methods
  //    * _______________________________________________________________________________
  //    */

  const handleAddTown = () => {
    const townItem = getValues('name').trim();
    if (!townItem) {
      ToastError('نام شهر نمی‌تواند خالی باشد');
      return;
    }
    if (cityData.children.some((item: any) => item.name === townItem)) {
      ToastError('این شهر از قبل وجود دارد');
      return;
    }
    addTownMutate();
  };

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <>
      <Grid width={'100%'} gapY={'5'} ref={ref} onClick={onSelect}>
        <AccordionWrapper
          hero={name}
          withEdit
          withDelete
          hasMedia={hasMedia === true}
          // isDisableDelete
          onEdit={e => {
            e.stopPropagation();
            setModalState({ key: 'edit', isOpen: true });
            onSelect();
          }}
          onDelete={e => {
            e.stopPropagation();
            setModalState({ key: 'delete', isOpen: true });
          }}
        >
          <Flex direction={'column'} gap={'5'}>
            {cityLoading || cityFetching ? (
              <Spinner style={{ margin: '0 auto', scale: 1.2 }} />
            ) : cityData?.children.length === 0 ? (
              <Flex direction={'column'} gap={'5'}>
                <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
                  هنوز شهری اضافه نشده است.
                </Text>
                <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
                  از فیلد زیر استفاده کنید و شهر را به لیست اضافه کنید.
                </Text>
              </Flex>
            ) : (
              <Flex width={'100%'} align={'center'} gap={'5'} wrap={'wrap'}>
                {cityData.children.map((item: any) => (
                  <ChipsItem type='town' key={item.id} label={item.name} hasMedia={item.hasMedia} id={item.id} data={item} />
                ))}
              </Flex>
            )}
            <Box width={'40%'}>
              <Controller name='name' control={control} render={({ field }) => <CustomAddItem {...field} placeholder='افزودن شهر' onClick={() => handleAddTown()} isLoading={addTownPending} />} />
            </Box>
          </Flex>
        </AccordionWrapper>
      </Grid>

      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
        {/*
         *** for edit city _________________________________________________________________________________________________________________________________________________________________
         */}
        {modalState.key === 'edit' && Boolean(cityData) && (
          <>
            <ModalHeader title={'ویرایش شهرستان'} handleClose={() => setModalState({ ...modalState, isOpen: false })} />
            <EditCityModal setIsOpen={() => setModalState({ key: 'edit', isOpen: false })} data={cityData ?? { name: '', id: null }} />
          </>
        )}
        {/*
         *** for delete city _________________________________________________________________________________________________________________________________________________________________
         */}
        {modalState.key === 'delete' && (
          <Grid gapY={'24px'} p={'5'}>
            <Text {...typoVariant.title1} style={{ color: colorPalette.gray[11] }}>
              آیا از حذف شهرستان <span style={{ fontWeight: 'bold', color: 'red' }}>{name}</span> اطمینان دارید؟
            </Text>
            <Grid gap={'10px'} columns={'2'}>
              <Button variant='soft' size={'4'} onClick={() => deleteCityMutate()}>
                <Text {...typoVariant.body3}>{deleteCityPending ? <Spinner /> : 'بله'}</Text>
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
});

export default React.memo(CityItems);
