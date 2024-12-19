'use client';

import React from 'react';

import styled from 'styled-components';

import { Button, Flex, Grid, IconButton, Text } from '@/libs/primitives';
import { Check, Trash } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { PlaceImproveContentDataDetail } from '@/types/data-management/point';

type CardProps = PlaceImproveContentDataDetail & {
  onShowPoint?: () => void;
  onSubmit?: () => void;
  onDelete?: () => void;
  index: number;
  type: 'improve_data_management' | 'point_detail';
};

const DataCard: React.FC<CardProps> = (props: CardProps) => {
  /*
   *** Variables and Constant _________________________________________________________________________________________________________________________________________________________________
   */
  const { name, provinceName, cityName, phone, website, email, content, type, index, onShowPoint, onDelete } = props;

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
              {name}
            </Text>
            <Text {...typoVariant.description2} style={{ color: colorPalette.gray[11] }}>
              {`${provinceName} / ${cityName}`}
            </Text>
          </Flex>
          <Button colorVariant='BLUE' size={'3'} onClick={onShowPoint}>
            <Text {...typoVariant.body3}>مشاهده نقطه</Text>
          </Button>
        </Flex>
      )}
      <GridWrapper type={type}>
        <Grid gapY={'5'}>
          <Grid width={'3'} columns={'3'} gapY={'5'}>
            <Item label='نام نقطه' value={name} />
            <Item label='شماره تماس' value={phone} />
            <Item label='وب سایت' value={website} />
            <Item label='ایمیل' value={email} />
            <Item label='استان' value={provinceName} />
            <Item label='شهر' value={cityName} />
          </Grid>
          <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
            {content}
          </Text>
        </Grid>
        {type === 'point_detail' && (
          <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 12 }} onClick={onDelete}>
            <Trash />
          </IconButton>
        )}
      </GridWrapper>

      {type === 'improve_data_management' && (
        <Flex width={'100%'} align={'center'} justify={'end'} gap={'2'}>
          <Button size={'3'} variant='soft'>
            <Flex align={'center'} gap={'2'}>
              <Check />
              <Text {...typoVariant.body3}>تایید</Text>
            </Flex>
          </Button>
          <IconButton size={'3'} colorVariant='PINK' style={{ borderRadius: 12 }} onClick={onDelete}>
            <Trash />
          </IconButton>
        </Flex>
      )}
    </Grid>
  );
};

export default DataCard;

const Item = ({ label, value }: { label: string; value: string }) => (
  <Flex align={'center'} gap={'2'}>
    <Text {...typoVariant.body2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
      {value}
    </Text>
  </Flex>
);

const GridWrapper = styled(Grid)<{ type: 'improve_data_management' | 'point_detail' }>`
  grid-template-columns: ${({ type }) => (type === 'improve_data_management' ? 'auto' : '95% 5%')};
  column-gap: ${({ type }) => (type === 'improve_data_management' ? '0px' : '16px')};
`;
