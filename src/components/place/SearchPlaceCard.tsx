'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { removePlace } from '@/api/place';
import { Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { typoVariant } from '@/theme/typo-variants';
import { PlacesDetail } from '@/types/place/search-place';

/**
 * props
 * _______________________________________________________________________________
 */

const SearchPlaceCard = ({ city, name, pictures, province, id }: PlacesDetail) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const imageUrl = pictures.length > 0 ? `http://37.32.8.14/${pictures[0].path}` : '/placeholder.jpg';

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const { mutate: removePlaceMutate, isPending: removePlaceIsPending } = useMutation({
    mutationFn: async () => removePlace(id),
    onSuccess: async data => {
      if (data.status === true) {
        queryClient.invalidateQueries({ queryKey: ['search-all-places'] });
        queryClient.invalidateQueries({ queryKey: ['all-places'] });
        queryClient.invalidateQueries({ queryKey: ['search-place-by-city'] });

        ToastSuccess('مکان مورد نظر با موفقیت حذف شد');
        setIsOpen(false);
      } else {
        ToastError('لطفا دوباره امتحان نمایید');
      }
    },
    onError: err => {
      console.log(err, 'useRemovePlace');
    },
  });

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <>
      <Flex
        onClick={e => {
          e.preventDefault();
          push(`/place/edit/${id}`);
        }}
        justify={'between'}
        width={'100%'}
        align={'center'}
        gap={'24px'}
        p={'8px'}
        style={{ border: '1px solid #00000029', borderRadius: '8px', cursor: 'pointer' }}
      >
        <Flex gap={'24px'} align={'center'}>
          <Image style={{ borderRadius: '8px' }} src={imageUrl} width={50} height={50} alt='search-image' />
          <Text>{name}</Text>
          <Text>{province}</Text>
          <Text>{city}</Text>
        </Flex>
        <Button
          onClick={e => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          size={'4'}
          variant='solid'
        >
          <Text {...typoVariant.paragraph1}>حذف مکان</Text>
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Grid gap={'24px'}>
          <Text>{`آیا از حذف ${name} مطمین هستید ؟`}</Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button onClick={() => removePlaceMutate()} variant='soft' size={'4'}>
              <Text>{removePlaceIsPending ? <Spinner /> : 'بله'}</Text>
            </Button>
            <Button type='button' onClick={() => setIsOpen(false)} variant='solid' size={'4'}>
              خیر
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default SearchPlaceCard;

/**
 * styled-component
 * _______________________________________________________________________________
 */
