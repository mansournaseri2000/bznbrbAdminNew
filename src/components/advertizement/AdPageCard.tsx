'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Button, Flex, Text } from '@/libs/primitives';
import { convertTimestampToPersianDate } from '@/libs/utils/convertTimestampToPersianDate';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { AdsPageKeyOptions } from '@/types/advertizement/advertizement';

type Props = {
  label: string;
  latestUpdatedAt: number;
  holder: string;
  space: number;
  adKey: AdsPageKeyOptions;
};

const AdPageCard = ({ adKey, holder, label, latestUpdatedAt, space }: Props) => {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const router = useRouter();
  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const handleRedirect = () => {
    if (adKey === 'main_page' || adKey === 'planner' || adKey === 'tourmaker' || adKey === 'article_list' || adKey === 'article' || adKey === 'place' || adKey === 'maps') {
      return `/advertizement/${adKey}`;
    } else if (adKey === 'tours' || adKey === 'planner_trips') {
      return `/advertizement/trip/${adKey}`;
    } else {
      return `/advertizement/other/${adKey}`;
    }
  };
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex width={'100%'} align={'center'} justify={'between'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Flex direction={'column'} gap={'12px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          {label}
        </Text>
        <Item label='تعداد تبلیغات' value={space} />
        <Item label='آخرین ویرایش' value={latestUpdatedAt ? convertTimestampToPersianDate(latestUpdatedAt) : null} />
      </Flex>
      <Flex direction={'column'} height={'100%'} align={'end'} gap={'34px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.pink[9] }}>
          {holder}
        </Text>
        <Button size={'2'} onClick={() => router.push(handleRedirect())} style={{ padding: '7px 16px' }}>
          <Text {...typoVariant.body3}>مدیریت تبلیغات</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default AdPageCard;

const Item = ({ label, value }: { label: string; value: string | number | null }) => (
  <Flex align={'center'} py={'1'} gap={'2'}>
    <Text {...typoVariant.description2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.description2} style={{ color: colorPalette.gray[12] }}>
      {value ? value : '__'}
    </Text>
  </Flex>
);
