'use client';

import { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import Image from 'next/image';

import { Spinner } from '@radix-ui/themes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getPlace, removeImage } from '@/api/place';
import { Button, Flex, Grid, Modal, Text } from '@/libs/primitives';
import { Divider, ImagePicker } from '@/libs/shared';
import { ToastError, ToastSuccess } from '@/libs/shared/toast/Toast';
import { typoVariant } from '@/theme/typo-variants';

import Container from '../Container';

/**
 * props
 * _______________________________________________________________________________
 */
type Props = {
  status: string;
  placeID: number;
};

const ImageGallery = ({ placeID }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { setValue } = useFormContext();

  const isLoading = useWatch({ name: 'isLoading' });
  
  const [isOpen, setIsOpen] = useState(false);
  const [imageID, setImageID] = useState<null | number>(null);
  const queryClient = useQueryClient();

  const { data: imageGalleryData } = useQuery({
    queryKey: ['image-gallery'],
    queryFn: async () => getPlace(placeID),
  });

  const { mutate: removeImageMutate, isPending: removeImageIsPending } = useMutation({
    mutationFn: async (id: number) => removeImage(id),
    onSuccess: async () => {
      ToastSuccess('عکس مورد نظر با موفقیت حذف شد');
      queryClient.invalidateQueries({ queryKey: ['image-gallery'] });
      queryClient.invalidateQueries({ queryKey: ['all-places'] });
      setIsOpen(false);
    },
    onError: () => {
      ToastError('مشکلی پیش امده دوباره سعی کنید');
    },
  });

  useEffect(() => {
    if (imageGalleryData) {
      setValue('pictures', imageGalleryData.pictures);
    }
  }, [imageGalleryData]);

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
        <Grid gap={'24px'}>
          <Grid gap={'16px'} height={'max-content'}>
            <ImagePicker name='uploadImage' errorText='' placeID={placeID} type='GALLERY'>
              <Button type='button' style={{ minWidth: '150px' }} size={'4'} variant='soft'>
                {isLoading ? <Spinner /> : <Text>اپلود تصاویر گالری</Text>}
              </Button>
            </ImagePicker>
            <Flex wrap={'wrap'} gap={'24px'}>
              {imageGalleryData?.pictures.length === 0 && (
                <Flex width={'100%'} justify={'center'}>
                  <Text>گالری تصاویر این مکان خالی است</Text>
                </Flex>
              )}
              {imageGalleryData?.pictures
                ?.filter(item => item.type === 'GALLERY') // Filter the images to only show those with type 'GALLERY'
                ?.map(item => {
                  return (
                    <Grid key={item.id} p={'8px'} style={{ borderRadius: '8px', border: '1px solid #0000002b' }} gap={'8px'}>
                      <Image
                        alt='image-gallery'
                        src={`http://37.32.8.14/${item.path}`} // Use the correct image path
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
                        <Text {...typoVariant.description1}>حذف عکس</Text>
                      </Button>
                    </Grid>
                  );
                })}
            </Flex>
          </Grid>
          <Divider />
          <Grid gap={'16px'}>
            <ImagePicker name='' errorText='' placeID={placeID} type='MAIN'>
              <Button type='button' style={{ minWidth: '200px' }} size={'4'} variant='soft'>
                {isLoading ? <Spinner /> : <Text>اپلود تصویر اصلی</Text>}
              </Button>
            </ImagePicker>
            <Flex wrap={'wrap'} gap={'24px'}>
              {imageGalleryData?.pictures
                ?.filter(item => item.type === 'MAIN') // Filter the images by type 'MAIN'
                ?.map(item => {
                  return (
                    <Grid key={item.id} p={'8px'} style={{ borderRadius: '8px', border: '1px solid #0000002b' }} gap={'8px'}>
                      <Image
                        alt='image-gallery'
                        src={`http://37.32.8.14/${item.path}`} // Ensure to use the correct image field
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
                        <Text {...typoVariant.description1}>حذف عکس</Text>
                      </Button>
                    </Grid>
                  );
                })}
            </Flex>
          </Grid>
        </Grid>
      </Container>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Grid gap={'24px'}>
          <Text>{`آیا از حذف این عکس اطمینان دارید ؟`}</Text>
          <Grid gap={'10px'} columns={'2'}>
            <Button type='button' onClick={() => removeImageMutate(imageID as number)} variant='soft' size={'4'}>
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
