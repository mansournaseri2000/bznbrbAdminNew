'use client';

import React, { useState } from 'react';

import { useParams } from 'next/navigation';

import { PlusIcon } from '@radix-ui/react-icons';
import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAllProvincesById } from '@/api/additional-detail';
import { Button, Flex, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

import CreateCityModal from './cities-modal/CreateCityModal';
import CityItems from './city-items/CityItems';

const CitiesManagement = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const params = useParams();
  const provinceId = Number(params.slug[2]);

  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const {
    data: citiesData,
    isLoading: citiesLoading,
    isFetching: citiesFetching,
    isError: citiesError,
  } = useQuery({ queryKey: ['cities', provinceId], queryFn: async () => await getAllProvincesById(provinceId) });
  /*
   *** Loading_________________________________________________________________________________________________________________________________________________________________
   */
  if (citiesLoading || citiesFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 3 }} />
      </Flex>
    );

  if (!citiesData || citiesError) return ToastError('مشکلی پیش آمده. لطفا مجددا تلاش نمایید');

  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
  return (
    <>
      <Flex width={'100%'} direction={'column'} gap={'5'}>
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <Button size={'3'} variant='ghost' onClick={() => setIsOpen(true)} style={{ paddingBlock: '11.5px' }}>
            <Flex align={'center'} gap={'2'}>
              <PlusIcon width={16} height={16} style={{ color: colorPalette.blue[10] }} />
              <Text {...typoVariant.body1}>افزودن شهرستان</Text>
            </Flex>
          </Button>
        </Flex>
        {citiesData?.children.map((item, index) => {
          return (
            <CityItems
              selectedId={Number(selectedItem)}
              key={item.id}
              selected={selectedItem === item.id}
              isOpen={selectedItem === item.id}
              onSelect={() => setSelectedItem(item.id)}
              currentIndex={index}
              {...item}
            />
          );
        })}
      </Flex>
      {/* 
      ***
        Modal___________________________________________
      ***
      */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='افزودن شهرستان' handleClose={() => setIsOpen(false)} />
        <CreateCityModal setIsOpen={setIsOpen} data={citiesData.children} />
      </Modal>
    </>
  );
};

export default CitiesManagement;
