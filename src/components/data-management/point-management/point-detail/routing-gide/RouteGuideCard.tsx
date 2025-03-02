'use client';

import { Flex, IconButton, Text } from '@/libs/primitives';
import { Airplan, Bus, Car, Check, Hike, Ship, Subway, Taxi, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { travelModeOptions } from '@/types/place/find-place';

/**
 * props
 * _______________________________________________________________________________
 */
type Props = {
  description: string | null;
  type: travelModeOptions;
  id: number;
  cardType: 'route_guide' | 'route_sent';
  onPublish?: () => void;
  onDelete?: () => void;
};

const RouteGuideCard = ({ description, type, id, cardType, onDelete, onPublish }: Props) => {
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
  const renderElement = (type: travelModeOptions) => {
    switch (type) {
      case 'BUS':
        return <Bus />;
      case 'TAXI':
        return <Taxi />;
      case 'AIRPLANE':
        return <Airplan />;
      case 'CAR':
        return <Car />;
      case 'HIKE':
        return <Hike />;
      case 'SHIP':
        return <Ship />;
      case 'TRAIN':
        return <Subway />;
      default:
        return <Taxi />;
    }
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Flex
      position={'relative'}
      direction={'column'}
      p={'16px'}
      gap={'16px'}
      style={{
        borderRadius: '8px',
        backgroundColor: id % 2 === 0 ? colorPalette.blue[2] : colorPalette.pink[2],

        border: id % 2 === 0 ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
      }}
    >
      <Flex justify={'between'}>
        <Text {...typoVariant.body2} style={{ color: id % 2 === 0 ? colorPalette.blue[9] : colorPalette.pink[9] }}>
          {type === 'AIRPLANE'
            ? 'هواپیما'
            : type === 'BUS'
            ? 'اتوبوس'
            : type === 'CAR'
            ? 'ماشین'
            : type === 'HIKE'
            ? 'پیاده روی'
            : type === 'SHIP'
            ? 'کشتی'
            : type === 'TAXI'
            ? 'تاکسی'
            : type === 'TRAIN' && 'قطار'}
        </Text>
      </Flex>
      <Flex width={'100%'} justify={'between'} gap={'2'}>
        <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
          {description}
        </Text>
        {cardType === 'route_sent' && (
          <Flex gap={'2'}>
            {onPublish && (
              <IconButton type='button' size={'3'} variant='soft' onClick={onPublish}>
                <Check />
              </IconButton>
            )}
            <IconButton type='button' size={'3'} colorVariant='PINK' onClick={onDelete}>
              <Trash />
            </IconButton>
          </Flex>
        )}
      </Flex>
      <Flex
        justify={'center'}
        align={'center'}
        style={{
          position: 'absolute',
          right: '-38px',
          top: '-2px',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: id % 2 === 0 ? colorPalette.blue[9] : colorPalette.pink[9],
        }}
      >
        {renderElement(type)}
      </Flex>
    </Flex>
  );
};

export default RouteGuideCard;

/**
 * styled-component
 * _______________________________________________________________________________
 */
