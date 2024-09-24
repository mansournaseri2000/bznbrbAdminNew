'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import Image from 'next/image';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getPlace, removeImage } from '@/api/place';
import { Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import { ImagePicker } from '@/libs/shared';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { typoVariant } from '@/theme/typo-variants';

import Container from '../Container';

/**
 * props
 * _______________________________________________________________________________
 */

const ImageGallery = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [isOpen, setIsOpen] = useState(false);
  const [imageID, setImageID] = useState<null | number>(null);
  const queryClient = useQueryClient();
  const { watch } = useFormContext();

  const { data: imageGalleryData } = useQuery({
    queryKey: ['image-gallery'],
    queryFn: async () => getPlace(13849),
  });

  const { mutate: removeImageMutate, isPending: removeImageIsPending } = useMutation({
    mutationFn: async (id: number) => removeImage(id),
    onSuccess: async () => {
      ToastSuccess('عکس مورد نظر با موفقیت حذف شد');
      queryClient.invalidateQueries({ queryKey: ['image-gallery'] });
      setIsOpen(false);
    },
    onError: () => {
      ToastError('مشکلی پیش امده دوباره سعی کنید');
    },
  });

  console.log(imageGalleryData, 'imageGalleryDataimageGalleryData');

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <>
      <Container height='auto' title='گالری تصاویر'>
        <Grid gap={'16px'} height={'max-content'}>
          <ImagePicker name='uploadImage' errorText=''>
            <Button style={{ minWidth: '150px' }} size={'4'} variant='soft'>
              {watch('isLoading') ? <Spinner /> : <Text>اپلود عکس</Text>}
            </Button>
          </ImagePicker>
          <Flex wrap={'wrap'} gap={'24px'}>
            {imageGalleryData?.pictures.length === 0 && (
              <Flex width={'100%'} justify={'center'}>
                <Text>گالری تصاویر این مکان خالی است</Text>
              </Flex>
            )}
            {imageGalleryData?.pictures?.map(item => {
              return (
                <Grid
                  key={item.id}
                  p={'8px'}
                  style={{ borderRadius: '8px', border: '1px solid #0000002b' }}
                  gap={'8px'}
                >
                  <Image
                    alt='image-gallery'
                    src={`http://37.32.8.14/${item.path}`}
                    width={150}
                    height={150}
                    style={{ borderRadius: '8px', objectFit: 'cover' }}
                  />
                  <Button
                    onClick={() => {
                      setImageID(item.id);
                      setIsOpen(true);
                    }}
                    type='button'
                    size={'4'}
                    variant='soft'
                  >
                    <Text {...typoVariant.description1}> حذف عکس</Text>
                  </Button>
                </Grid>
              );
            })}
          </Flex>
        </Grid>
      </Container>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Grid gap={'24px'}>
          <Text>{`آیا از حذف این عکس اطمینان دارید ؟`}</Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button onClick={() => removeImageMutate(imageID as number)} variant='soft' size={'4'}>
              {removeImageIsPending ? <Spinner /> : <Text> بله</Text>}
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

export default ImageGallery;

/**
 * styled-component
 * _______________________________________________________________________________
 */
