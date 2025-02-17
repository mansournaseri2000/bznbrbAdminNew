'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Button, Flex, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { ProvinceDetailCardDetail } from '@/types/confirmations/top-comments';

type Props = ProvinceDetailCardDetail & {
  type: 'comments' | 'province' | 'provinceAds';
};

const ProvinceDetailCard = (props: Props) => {
  const { title, firstValue, type, secondValue, path, buttonText, firstLabel, secondLabel } = props;

  const router = useRouter();
  return (
    <Flex width={'100%'} align={'center'} justify={'between'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Flex direction={'column'} gap={'12px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          {title}
        </Text>
        <Item label={firstLabel} value={firstValue} />
        <Item label={secondLabel} value={secondValue} />
      </Flex>
      <Flex height={'100%'} align={'end'} gap={'2'}>
        <Button size={'2'} onClick={() => router.push(path)} style={{ padding: '7px 16px' }}>
          <Text {...typoVariant.body3}>{buttonText}</Text>
        </Button>
        {type === 'provinceAds' && (
          <Button size={'3'} variant='soft' onClick={() => router.push('/ads/province-list/cities')}>
            <Text {...typoVariant.body3}>لیست شهرستان ها</Text>
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default ProvinceDetailCard;

const Item = ({ label, value }: { label: string; value: string | number }) => (
  <Flex align={'center'} py={'1'} gap={'2'}>
    <Text {...typoVariant.description2} style={{ color: colorPalette.gray[10] }}>
      {label}
    </Text>
    <Text {...typoVariant.description2} style={{ color: colorPalette.gray[12] }}>
      {value}
    </Text>
  </Flex>
);
