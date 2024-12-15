import React from 'react';

import { Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Airplan, Bus, Car, Check, Hike, Ship, Subway, Taxi, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { FilteredSuggestionsDetail } from '@/types/confirmations/path-guid';

type CardProps = FilteredSuggestionsDetail & {
  onPublished?: () => void;
  onDelete?: () => void;
  index: number;
};

const PathGuidCard: React.FC<CardProps> = (props: CardProps) => {
  const { placeName, placeProvince, placeCity, index, description, travelMode } = props;
  return (
    <Grid
      width={'100%'}
      gapY={'4'}
      p={'4'}
      style={{
        borderRadius: 8,
        backgroundColor: index % 2 === 0 ? colorPalette.blue[2] : colorPalette.pink[2],
        border: index % 2 === 0 ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
      }}
    >
      <Flex align={'center'} gap={'10px'}>
        <Flex justify={'center'} align={'center'} style={{ width: 32, height: 32, backgroundColor: index % 2 === 0 ? colorPalette.blue[9] : colorPalette.pink[9], borderRadius: '100%' }}>
          {travelMode === 'TAXI' ? (
            <Taxi />
          ) : travelMode === 'BUS' ? (
            <Bus />
          ) : travelMode === 'TRAIN' ? (
            <Subway />
          ) : travelMode === 'AIRPLANE' ? (
            <Airplan />
          ) : travelMode === 'CAR' ? (
            <Car />
          ) : travelMode === 'HIKE' ? (
            <Hike />
          ) : (
            travelMode === 'SHIP' && <Ship />
          )}
        </Flex>
        <Flex direction={'column'} gap={'2'}>
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {placeName}
          </Text>
          <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
            {placeProvince} / {placeCity}
          </Text>
        </Flex>
      </Flex>
      <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
        {description}
      </Text>
      <Flex width={'100%'} align={'center'} justify={'end'}>
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
