'use client';

import React from 'react';

import { useRouter } from '@bprogress/next';

import { Button, Flex, Text } from '@/libs/primitives';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  name: string;
  latestUpdatedAt: number;
  emptyBanners: number;
  type: 'province_list' | 'simple';
  path: string;
  cityPath?: string;
};

const AdPageCard2 = ({ name, latestUpdatedAt, emptyBanners, type, path, cityPath }: Props) => {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const router = useRouter();
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex width={'100%'} align={'center'} justify={'between'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Flex direction={'column'} gap={'12px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          {name}
        </Text>
        <Item label='آخرین ویرایش' value={convertTimestampToPersianDate(latestUpdatedAt)} />
        <Item label='بنر های خالی' value={`${emptyBanners} عدد`} />
      </Flex>
      <Flex direction={'column'} height={'100%'} align={'end'} justify={type === 'simple' ? 'end' : 'center'} gap={'5'}>
        {type === 'province_list' && (
          <Button size={'2'} variant='soft' onClick={() => router.push(cityPath ? cityPath : '')} style={{ width: 'fit-content', padding: '7px 16px' }}>
            <Text {...typoVariant.body3}>شهرستان ها</Text>
          </Button>
        )}
        <Button size={'2'} onClick={() => router.push(path)} style={{ padding: '7px 16px' }}>
          <Text {...typoVariant.body3}> مدیریت تبلیغات</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default AdPageCard2;

const Item = ({ label, value }: { label: string; value: string | number }) => (
  <Flex align={'center'} py={'1'} gap={'2'}>
    <Text {...typoVariant.description2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.description2} style={{ color: colorPalette.gray[12] }}>
      {value ? value : '__'}
    </Text>
  </Flex>
);
