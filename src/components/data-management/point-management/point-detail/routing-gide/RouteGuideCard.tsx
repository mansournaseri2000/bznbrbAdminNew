'use client';

import { Flex, IconButton, Text } from '@/libs/primitives';
import { Bus, Check, Subway, Taxi, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

/**
 * props
 * _______________________________________________________________________________
 */
type Props = {
  title: string;
  description: string | null;
  type: 'bus' | 'taxi' | 'subway';
  id: number;
  cardType: 'route_guide' | 'route_sent';
};

const RouteGuideCard = ({ title, description, type, id, cardType }: Props) => {
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
  const renderElement = (type: 'bus' | 'taxi' | 'subway') => {
    switch (type) {
      case 'bus':
        return <Bus />;
      case 'taxi':
        return <Taxi />;
      case 'subway':
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
          {title}
        </Text>
      </Flex>
      <Flex width={'100%'} justify={'between'} gap={'2'}>
        <Text {...typoVariant.paragraph2} style={{ color: colorPalette.gray[11] }}>
          {description}
        </Text>
        {cardType === 'route_sent' && (
          <Flex gap={'2'}>
            <IconButton size={'3'} variant='soft'>
              <Check />
            </IconButton>
            <IconButton size={'3'} colorVariant='PINK'>
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
