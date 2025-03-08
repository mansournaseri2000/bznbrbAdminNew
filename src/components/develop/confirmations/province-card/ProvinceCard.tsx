'use client';

import React from 'react';

import { useRouter } from '@bprogress/next';

import { Button, Flex, IconButton, Text } from '@/libs/primitives';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';
import { Comment, HasMedia, ImageIcon } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  name: string;
  lastUpdated: number;
  citiesCount: number;
  hasMedia: boolean;
  id: number;
};

const ProvinceCard = ({ name, citiesCount, hasMedia, lastUpdated, id }: Props) => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const { push } = useRouter();
  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */
  return (
    <Flex width={'100%'} direction={'column'} gap={'12px'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Flex align={'center'} gap={'2'}>
          {hasMedia && <HasMedia width={14.13} height={14.13} />}
          <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
            {name}
          </Text>
        </Flex>
        <Flex align={'center'} gap={'2'}>
          <IconButton size={'2'} variant='surface' onClick={() => push(`/additional-detail/province/data-management/${id}`)}>
            <Comment width={32} height={32} />
          </IconButton>
          <IconButton size={'2'} variant='surface' onClick={() => push(`/additional-detail/province/image-management/${id}`)}>
            <ImageIcon width={16} height={16} />
          </IconButton>
        </Flex>
      </Flex>
      <Item label='تعداد شهرستان' value={citiesCount} />
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <Item label='آخرین ویرایش' value={lastUpdated ? convertTimestampToPersianDate(lastUpdated) : 0} />
        <Button size={'2'} onClick={() => push(`/additional-detail/province/cities/${id}`)}>
          <Text {...typoVariant.body3}>مدیریت شهرستان ها</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default ProvinceCard;

const Item = ({ label, value }: { label: string; value: string | number }) => (
  <Flex align={'center'} gap={'2'}>
    <Text {...typoVariant.description2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.description2} style={{ color: colorPalette.gray[12] }}>
      {value}
    </Text>
  </Flex>
);
