'use client';

import React, { useState } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import { Skeleton } from '@radix-ui/themes';
import styled from 'styled-components';

import { Box, Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Badge } from '@/libs/shared/SharedStyled';
import { Star, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { PlaceCommentsDetail, PlaceResponse } from '@/types/data-management/point';

const ClientRenderText = dynamic(() => import('@/libs/shared/ClientRenderText'), {
  ssr: false,
  loading: () => <Skeleton loading height={'30px'} style={{ borderRadius: '4px' }} />,
});

type Props = {
  data: PlaceResponse;
  commentList: PlaceCommentsDetail;
};

const GalleryWithInfo = ({ data, commentList }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { push } = useRouter();
  const params = useParams();
  const placeId = params.slug[2];
  const [currentImage, setCurrentImage] = useState(data?.pictures[0]);

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  return (
    <Flex direction={'column'} gap={'24px'} height={'max-content'}>
      {/* image _______________________________________________________________________________ */}
      <Flex width={'100%'} minHeight={'260px'} height={'40vw'} maxHeight={'600px'} position={'relative'}>
        <Flex position={'absolute'} top={'10px'} left={'10px'} gap={'16px'} style={{ zIndex: '1' }}>
          <Button size={'3'} onClick={() => push(`/data-management/point-management/edit-point/${placeId}   `)}>
            <Text {...typoVariant.body1}>ویرایش اطلاعات</Text>
          </Button>

          <IconButton size={'3'} colorVariant='PINK' disabled>
            <Trash />
          </IconButton>
        </Flex>
        <Image style={{ borderRadius: '8px' }} src={`https://uploader.darkube.app/${currentImage?.path}`} alt='place-info-image' fill />
        <Flex style={{ zIndex: '1' }} gap={'12px'} position={'absolute'} bottom={'10px'} right={'10px'}>
          {data?.pictures?.map(item => {
            return (
              <Image
                key={item.id}
                onClick={() => setCurrentImage(item)}
                style={{
                  border: currentImage.id === item.id ? `3px solid ${colorPalette.blue[8]}` : `2px solid ${colorPalette.gray[1]}`,
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
                src={`${process.env.NEXT_PUBLIC_BASE_URL_image}${item.path}`}
                alt='image-gallery'
                width={40}
                height={40}
              />
            );
          })}
        </Flex>
      </Flex>

      {/* info _______________________________________________________________________________ */}
      <Flex direction={'column'} gap={'8px'}>
        <Flex justify={'between'}>
          <Text {...typoVariant.body2} style={{ color: colorPalette.gray[12] }}>
            {data?.name}
          </Text>
          <Flex gap={'4px'}>
            <Flex gap={'3px'}>
              <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
                {`${Boolean(commentList.score) ? commentList.score : '_'}/5`}
              </Text>
              <StarStyle />
            </Flex>
            {/* TODO: fix this item */}
            {/* <Text {...typoVariant.body3} style={{ color: colorPalette.gray[11] }}>
              {`(${Boolean(commentList.) ? commentList.commentCount : '_'}نظر )`}
            </Text> */}
          </Flex>
        </Flex>
        <Flex justify={'between'} align={'center'}>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[9] }}>
            {data?.Cities.Provinces.name}/ {data?.Cities.name}
          </Text>
          <Box display={{ initial: 'block', lg: 'none' }}>
            <Button variant='solid' size={'2'} style={{ borderRadius: '12px' }} onClick={() => push(`/place/${data.id}?view=map`)}>
              <Text {...typoVariant.body1} style={{ color: colorPalette.blue[11] }}>
                نقشه
              </Text>
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Flex direction={'column'} gap={'4px'} minHeight={'65px'}>
        <Text {...typoVariant.body3} style={{ color: colorPalette.gray[9] }}>
          توضیحات
        </Text>
        <ClientRenderText text={data?.description} />
      </Flex>
      <Grid gap={'16px'}>
        <Flex gap={'8px'} wrap={'wrap'}>
          {data?.Place_Category.map(item => {
            return (
              <Badge
                key={item.id}
                style={{
                  backgroundColor: colorPalette.pink[3],
                  opacity: '50%',
                  display: item.score === 0 ? 'none' : 'block',
                }}
              >
                <Text {...typoVariant.description2} style={{ color: colorPalette.pink[12] }}>
                  {item.name}
                </Text>
              </Badge>
            );
          })}
        </Flex>
      </Grid>
    </Flex>
  );
};

export default GalleryWithInfo;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const StarStyle = styled(Star)`
  path {
    fill: ${colorPalette.pink[9]};
  }
`;
