import React from 'react';

import Image from 'next/image';

import { Box, Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Check, EyeOpen, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { ImageSentDetail } from '@/types/confirmations/image-sent';

type CardProps = ImageSentDetail & {
  onShowPoint?: () => void;
  onPublished?: () => void;
  onDelete?: () => void;
  colorVariant: 'blue' | 'pink';
};

const ImageSentCard: React.FC<CardProps> = (props: CardProps) => {
  const { colorVariant, point, image, content } = props;
  return (
    <Grid
      width={'100%'}
      gapY={'5'}
      p={'4'}
      style={{
        borderRadius: 8,
        backgroundColor: colorVariant === 'blue' ? colorPalette.blue[2] : colorPalette.pink[2],
        border: colorVariant === 'blue' ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
      }}
    >
      <Flex width={'100%'} justify={'between'} align={'center'}>
        <Flex direction={'column'} gap={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {point.name}
          </Text>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
            {`${point.Province} / ${point.city}`}
          </Text>
        </Flex>
        {/* TODO: pass props to onClick for button */}
        <Button colorVariant='BLUE' size={'3'}>
          <Text {...typoVariant.body3}>مشاهده نقطه</Text>
        </Button>
      </Flex>
      <Flex gap={'4'} px={'4'} align={'center'}>
        <Box width={'328px'} height={'150px'} position={'relative'}>
          {/* TODO: define alt  */}
          <Image width={328} height={150} src={image} alt='' style={{ borderRadius: 8, objectFit: 'cover' }} />
        </Box>
        <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
          {content}
        </Text>
      </Flex>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Flex align={'center'} gap={'2'} px={'2'} py={'4'}>
          {/* TODO: use IsRead props to handle this section */}
          <EyeOpen />
          <Text {...typoVariant.body3} style={{ color: colorPalette.blue[11] }}>
            خوانده شد
          </Text>
        </Flex>
        <Flex align={'center'} gap={'2'}>
          <Button size={'3'} colorVariant='BLUE' variant='soft'>
            <Flex align={'center'} gap={'2'}>
              <Check />
              <Text {...typoVariant.body1}>تایید و انتشار</Text>
            </Flex>
          </Button>
          <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 12 }}>
            <Trash />
          </IconButton>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default ImageSentCard;
