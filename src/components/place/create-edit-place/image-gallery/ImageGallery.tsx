'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Button, Flex, Grid, Text } from '@/libs/primitives';
import { ImagePicker } from '@/libs/shared';
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
  const gallery = [
    {
      path: '',
      id: 1,
    },
    {
      path: '',
      id: 2,
    },
    {
      path: '',
      id: 3,
    },
  ];
  const [pictures, setPictures] = useState(gallery);
  const removePictureById = (id: number) => {
    setPictures(prevPictures => prevPictures.filter(picture => picture.id !== id));
  };

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
    <Container height='auto' title='گالری تصاویر'>
      <Grid gap={'16px'} height={'max-content'}>
        <ImagePicker name='uploadImage' errorText=''>
          <Button size={'4'} variant='soft'>
            اپلود عکس
          </Button>
        </ImagePicker>
        <Flex wrap={'wrap'} gap={'24px'}>
          {pictures.map(item => {
            return (
              <Grid
                key={item.id}
                p={'8px'}
                style={{ borderRadius: '8px', border: '1px solid #000' }}
                gap={'8px'}
              >
                <Image
                  alt='image-gallery'
                  src={''}
                  width={150}
                  height={150}
                  style={{ borderRadius: '8px' }}
                />
                <Button onClick={() => removePictureById(item.id)} type='button' size={'4'} variant='soft'>
                  <Text {...typoVariant.description1}>{`${item.id} حذف عکس`}</Text>
                </Button>
              </Grid>
            );
          })}
        </Flex>
      </Grid>
    </Container>
  );
};

export default ImageGallery;

/**
 * styled-component
 * _______________________________________________________________________________
 */
