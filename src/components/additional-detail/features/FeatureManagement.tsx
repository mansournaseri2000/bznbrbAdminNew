'use client';

import React, { useState } from 'react';

import { PlusIcon } from '@radix-ui/react-icons';
import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getFeatures } from '@/api/additional-detail';
import { Button, Flex, Modal, Text } from '@/libs/primitives';
import ModalHeader from '@/libs/shared/ModalHeader';
import { ToastError } from '@/libs/shared/toast/Toast';
import { colorPalette } from '@/theme';
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

  console.log('feature', featuresData);
  /*
   *** Loading & Error_________________________________________________________________________________________________________________________________________________________________
   */
  if (featureLoading || featureFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 3 }} />
      </Flex>
    );
  if (!featuresData || featureError) return ToastError('مشکلی پیش آمده. لطفا مجددا تلاش نمایید');

  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
  return (
    <>
      <Flex width={'100%'} direction={'column'} gap={'5'}>
        <Button size={'4'} variant='ghost' style={{ width: 'fit-content', paddingBlock: 11.5 }} onClick={() => setIsOpen(true)}>
          <Flex align={'center'} gap={'2'}>
            <PlusIcon width={16} height={16} style={{ color: colorPalette.blue[10] }} />
            <Text {...typoVariant.body1}>افزودن دسته ویژگی</Text>
          </Flex>
        </Button>
        {featuresData?.map((item, index) => (
          <FeatureItems key={item.id} selected={selectedItem === index} onSelect={() => setSelectedItem(index)} currentIndex={index} {...item} />
        ))}
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title='افزودن دسته ویژگی' handleClose={() => setIsOpen(false)} />
        <CreateFeatureModal data={featuresData} setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default FeatureManagement;
