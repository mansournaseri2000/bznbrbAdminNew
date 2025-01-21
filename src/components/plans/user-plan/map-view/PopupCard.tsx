'use client';

import Image, { StaticImageData } from 'next/image';

import styled from 'styled-components';

import { Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Navigation } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  lat: number;
  lng: number;
  title: string;
  imageUrl: string | StaticImageData;
  description: string;
  id: number;
};

const PopupCard = ({ description, imageUrl, lat, lng, title, id }: Props) => {
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

  const handleRedirect = (lat: number, lng: number) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleRedirectToPlace = (id: number) => {
    window.open(`https://bezanimbiroon.ir/place/${id}`, '_blank');
  };

  /**
   * template
   * _______________________________________________________________________________
   */

  return (
    <Grid gap={'16px'}>
      <Flex gap={'8px'} align={'center'}>
        <Image style={{ borderRadius: '10px' }} alt='map-image' width={60} height={60} priority src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${imageUrl}`} />
        <Text {...typoVariant.title2} style={{ color: colorPalette.gray[11] }}>
          {title}
        </Text>
      </Flex>
      <p dangerouslySetInnerHTML={{ __html: `${description.substring(0, 100)}...` }} style={{ color: colorPalette.gray[11], margin: 0, direction: 'rtl', textAlign: 'right' }} />
      <Flex align={'center'} gap={'16px'}>
        <IconButton
          onClick={() => handleRedirect(lat, lng)}
          style={{
            backgroundColor: colorPalette.blue[9],
            borderRadius: '12px',
            cursor: 'pointer',
          }}
          variant='solid'
          size={'3'}
        >
          <IconStyle />
        </IconButton>
        <Flex style={{ flex: 1 }}>
          <Button type='button' onClick={() => handleRedirectToPlace(id)} style={{ width: '100%' }} size={'3'} variant='solid'>
            <Text {...typoVariant.body3} style={{ color: colorPalette.blue[11] }}>
              اطلاعات بیشتر
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default PopupCard;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const IconStyle = styled(Navigation)`
  path {
    fill: ${colorPalette.blue[11]};
    stroke: #fff;
    stroke-width: 1.7px;
    scale: 0.7;
  }
`;
