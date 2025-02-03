'use client';

import React, { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getFeatures } from '@/api/additional-detail';
import { Button, Flex, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError } from '@/libs/shared/toast/Toast';
import { Close } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

import FeatureItems from './feature-items/FeatureItems';
import CreateFeatureModal from './feature-modal/CreateFeatureModal';

const FeatureManagement = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: featuresData, isLoading: featureLoading, isFetching: featureFetching, isError: featureError } = useQuery({ queryKey: ['features'], queryFn: async () => await getFeatures() });

  /*
   *** Loading & Error_________________________________________________________________________________________________________________________________________________________________
   */
  if (featureLoading || featureFetching) return <Spinner style={{ margin: '100px auto', scale: 2 }} />;
  if (!featuresData || featureError) return ToastError('مشکلی پیش آمده. لطفا مجددا تلاش نمایید');

  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
  return (
    <>
      <Flex width={'100%'} direction={'column'} gap={'5'}>
        <Button size={'4'} variant='ghost' style={{ width: 'fit-content' }} onClick={() => setIsOpen(true)}>
          <Flex align={'center'} gap={'2'}>
            <Text {...typoVariant.body1}>+</Text>
            <Text {...typoVariant.body1}>افزودن دسته ویژگی</Text>
          </Flex>
        </Button>
        {featuresData?.map((item, index) => (
          <FeatureItems key={item.id} selected={selectedItem === index} onSelect={() => setSelectedItem(index)} currentIndex={index} {...item} />
        ))}
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='افزودن دسته ویژگی' icon={<Close />} handleClose={() => setIsOpen(false)} />
        <CreateFeatureModal data={featuresData} setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default FeatureManagement;
