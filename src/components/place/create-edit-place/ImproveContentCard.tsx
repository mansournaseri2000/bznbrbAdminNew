'use client';

import React from 'react';

import styled from 'styled-components';

import { Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { PlaceImproveContentDataDetail } from '@/types/data-management/point';

type CardProps = PlaceImproveContentDataDetail & {
  onSubmit?: () => void;
  onDelete?: () => void;
  index: number;
  type: 'improve_data_management' | 'point_detail';
};

/**
 * props
 * _______________________________________________________________________________
 */

const ImproveContentCard: React.FC<CardProps> = (props: CardProps) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const { name, placeProvinceName, cityName, provinceName, phone, website, email, type, index, address, placeName, placeCityName, onDelete } = props;

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
    <Grid
      width={'100%'}
      gapY={'5'}
      p={'4'}
      style={{
        borderRadius: 8,
        backgroundColor: index % 2 === 0 ? colorPalette.blue[2] : colorPalette.pink[2],
        border: index % 2 === 0 ? `1px solid ${colorPalette.blue[6]}` : `1px solid ${colorPalette.pink[6]}`,
      }}
    >
      {type === 'improve_data_management' && (
        <Flex width={'100%'} justify={'between'} align={'center'}>
          <Flex direction={'column'} gap={'2'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
              {placeName}
            </Text>
            <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
              {`${placeProvinceName} / ${placeCityName}`}
            </Text>
          </Flex>
        </Flex>
      )}
      <GridWrapper type={type}>
        <Grid width={'100%'} gapY={'5'}>
          <Grid width={'3'} columns={'3'} gapY={'5'}>
            <Item label='نام نقطه' value={name} />
            <Item label='شماره تماس' value={phone} />
            <Item label='وب سایت' value={website} />
            <Item label='ایمیل' value={email} />
            <Item label='استان' value={provinceName} />
            <Item label='شهر' value={cityName} />
          </Grid>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
            {address}
          </Text>
        </Grid>

        <IconButton
          size={'2'}
          type='button'
          colorVariant='PINK'
          style={{ borderRadius: 12, marginInline: 'auto' }}
          onClick={() => {
            if (onDelete) {
              onDelete();
            }
          }}
        >
          <Trash />
        </IconButton>
      </GridWrapper>
    </Grid>
  );
};

export default ImproveContentCard;

/**
 * styled-component
 * _______________________________________________________________________________
 */

const Item = ({ label, value }: { label: string; value: string }) => (
  <Flex align={'center'} gap={'2'}>
    <Text {...typoVariant.body2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
      {value ? value : 'ــ'}
    </Text>
  </Flex>
);

const GridWrapper = styled(Grid)<{ type: 'improve_data_management' | 'point_detail' }>`
  grid-template-columns: ${({ type }) => (type === 'improve_data_management' ? '1fr' : '95% 5%')};
  column-gap: ${({ type }) => (type === 'improve_data_management' ? '0px' : '16px')};
`;
