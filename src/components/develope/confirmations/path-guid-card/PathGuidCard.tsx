import React from 'react';

import { Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Check, EyeOpen, Taxi, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { PathGuidDetail } from '@/types/confirmations/path-guid';

type CardProps = PathGuidDetail & {
  onPublished?: () => void;
  onDelete?: () => void;
  colorVariant: 'blue' | 'pink';
};

const PathGuidCard: React.FC<CardProps> = (props: CardProps) => {
  const { colorVariant, point, content } = props;
  return (
    <Grid
      width={'100%'}
      gapY={'4'}
      p={'4'}
      style={{
        borderRadius: 8,
        backgroundColor: colorVariant === 'blue' ? colorPalette.blue[2] : colorPalette.pink[2],
        border: colorVariant === 'blue' ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
      }}
    >
      <Flex align={'center'} gap={'10px'}>
        <Flex justify={'center'} align={'center'} style={{ width: 32, height: 32, backgroundColor: colorPalette.blue[9], borderRadius: '100%' }}>
          <Taxi />
        </Flex>
        <Flex direction={'column'} gap={'1'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {point.name}
          </Text>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
            {`${point.Province} / ${point.city}`}
          </Text>
        </Flex>
      </Flex>
      <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
        {content}
      </Text>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Flex align={'center'} gap={'2'}>
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

export default PathGuidCard;
