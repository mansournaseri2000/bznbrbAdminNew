'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Button, Flex, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { ProvinceDetailCardDetail } from '@/types/confirmations/top-comments';

type Props = ProvinceDetailCardDetail & {
  type: 'comments' | 'province';
};

const ProvinceDetailCard = (props: Props) => {
  const { province, subtitle, lastEditDate, type } = props;

  const router = useRouter();
  return (
    <Flex width={'100%'} align={'center'} justify={'between'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Flex direction={'column'} gap={'12px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          {province}
        </Text>
        <Item label={type === 'comments' ? 'کامنت های فعال' : 'تعداد شهرستان'} value={subtitle} />
        <Item label='آخرین ویرایش' value={lastEditDate} />
      </Flex>
      <Button size={'3'} onClick={() => router.push(type === 'comments' ? '/confirmations/top-comments/comments' : '/confirmations/province/cities')}>
        <Text>مشاهده نظرات</Text>
      </Button>
    </Flex>
  );
};

export default ProvinceDetailCard;

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
