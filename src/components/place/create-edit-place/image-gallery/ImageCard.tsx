'use client';

import Image from 'next/image';

import { Button, Grid, Text } from '@/libs/primitives';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

const ImageCard = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

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
    <Grid p={'8px'} style={{ borderRadius: '8px', border: '1px solid #000' }} gap={'8px'}>
      <Image alt='image-gallery' src={''} width={150} height={150} style={{ borderRadius: '8px' }} />
      <Button type='button' size={'4'} variant='soft'>
        <Text {...typoVariant.description1}>حذف عکس</Text>
      </Button>
    </Grid>
  );
};

export default ImageCard;

/**
 * styled-component
 * _______________________________________________________________________________
 */
