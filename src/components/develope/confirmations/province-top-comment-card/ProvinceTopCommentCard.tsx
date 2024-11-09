'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { Button, Flex, Text } from '@/libs/primitives';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { ProvinceTopCommentsDetail } from '@/types/confirmations/top-comments';

const ProvinceTopCommentCard: React.FC<ProvinceTopCommentsDetail> = (props: ProvinceTopCommentsDetail) => {
  const { province, activeComments, lastEditDate } = props;

  const router = useRouter();
  return (
    <Flex width={'100%'} align={'center'} justify={'between'} p={'4'} style={{ backgroundColor: colorPalette.gray[2], border: `1px solid ${colorPalette.gray[6]}`, borderRadius: 8 }}>
      <Flex direction={'column'} gap={'12px'}>
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
          {province}
        </Text>
        <Item label='کامنت های فعال' value={activeComments} />
        <Item label='آخرین ویرایش' value={lastEditDate} />
      </Flex>
      <Button size={'3'} onClick={() => router.push('/confirmations/top-comments/comments')}>
        <Text>مشاهده نظرات</Text>
      </Button>
    </Flex>
  );
};

export default ProvinceTopCommentCard;

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
