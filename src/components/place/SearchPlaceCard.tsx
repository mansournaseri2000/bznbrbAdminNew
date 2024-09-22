'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Flex, Text } from '@/libs/primitives';
import { PlaceDetail } from '@/types/place';

/**
 * props
 * _______________________________________________________________________________
 */

const SearchPlaceCard = ({ city, name, pictures, province, id }: PlaceDetail) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const imageUrl = pictures.length > 0 ? `http://37.32.8.14/${pictures[0].path}` : '/placeholder.jpg';

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
    <Link href={`/place/${id}`}>
      <Flex
        width={'100%'}
        align={'center'}
        gap={'24px'}
        p={'8px'}
        style={{ border: '1px solid #00000029', borderRadius: '8px' }}
      >
        <Image style={{ borderRadius: '8px' }} src={imageUrl} width={50} height={50} alt='search-image' />
        <Text>{name}</Text>
        <Text>{province}</Text>
        <Text>{city}</Text>
      </Flex>
    </Link>
  );
};

export default SearchPlaceCard;

/**
 * styled-component
 * _______________________________________________________________________________
 */
