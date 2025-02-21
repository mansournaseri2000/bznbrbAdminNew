'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Button, Flex, Text } from '@/libs/primitives';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  label: string;
  holdersCount: number;
  latestUpdatedAt: number;
  path: string;
};

const AdPageCard = ({ label, holdersCount, latestUpdatedAt, path }: Props) => {
  const router = useRouter();

  return (
    <Flex width={'100%'} align={'center'} justify={'between'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Flex direction={'column'} gap={'12px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          {label}
        </Text>
        <Item label='تعداد تبلیغات' value={holdersCount} />
        <Item label='آخرین ویرایش' value={convertTimestampToPersianDate(latestUpdatedAt)} />
      </Flex>
      <Flex direction={'column'} height={'100%'} align={'end'} gap={'34px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.pink[9] }}>
          A
        </Text>
        <Button size={'2'} onClick={() => router.push(path)} style={{ padding: '7px 16px' }}>
          <Text {...typoVariant.body3}>مدیریت تبلیغات</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default AdPageCard;

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
