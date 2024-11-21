'use client';

import React from 'react';

import Image from 'next/image';

import { Spinner } from '@radix-ui/themes';

import { Box, Button, Flex, Text } from '@/libs/primitives';
import { Check } from '@/public/icon';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';
import { CommentsDetail } from '@/types/comment/comment-list';

type CommentInfoProps = CommentsDetail & {
  onUpdate: () => void;
  onRemove: () => void;
  onShowDetail?: () => void;
  updatePending: boolean;
  removePending: boolean;
};

const CommentInfo: React.FC<CommentInfoProps> = (props: CommentInfoProps) => {
  const { places, users, createdAt, content, onUpdate, onRemove, updatePending, removePending, onShowDetail } = props;

  return (
    <Flex width={'100%'} direction={'column'} gap={'4'}>
      <Flex direction={'column'} p={'4'} pt={'0'} gap={'5'}>
        <Flex width={'100%'} justify={'between'}>
          <Flex direction={'column'} gap={'2'}>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>
              {places?.name}
            </Text>
            <Text {...typoVariant.body1} style={{ color: colorPalette.gray[12] }}>{`${places?.Cities.name} / ${places?.Cities.Provinces.name}`}</Text>
          </Flex>
          <Button size={'3'} colorVariant='BLUE' variant='outline' onClick={onShowDetail} style={{ borderRadius: 12 }}>
            <Text {...typoVariant.body3}>مشاهده نقطه</Text>
          </Button>
        </Flex>
        <Flex width={'100%'} justify={'between'}>
          <Flex align={'center'} gap={'2'}>
            <Box style={{ width: 40, height: 40, position: 'relative', borderRadius: '50%' }}>
              <Image src={users.pic ? users.pic : ''} alt='' fill style={{ borderRadius: '50%' }} />
            </Box>
            <Flex direction={'column'} gap={'1'}>
              <Text style={{ color: colorPalette.gray[12] }}>{`${users.name} ${users.last_name}`}</Text>
              <Text style={{ color: colorPalette.gray[11] }}>{createdAt}</Text>
            </Flex>
          </Flex>
          <Button size={'3'} colorVariant='PINK' onClick={onShowDetail} style={{ borderRadius: 12 }}>
            <Text {...typoVariant.body3}>مشاهده پروفایل</Text>
          </Button>
        </Flex>
        <Text {...typoVariant.paragraph1} style={{ color: colorPalette.gray[11] }}>
          {content}
        </Text>
      </Flex>
      <Flex width={'100%'} gap={'4'} p={'4'}>
        <Button size={'3'} colorVariant='BLUE' variant='soft' onClick={onUpdate}>
          {updatePending ? (
            <Spinner />
          ) : (
            <Flex align={'center'} gap={'2'}>
              <Check />
              <Text {...typoVariant.body1}>تایید و انتشار</Text>
            </Flex>
          )}
        </Button>
        <Button size={'3'} colorVariant='PINK' onClick={onRemove}>
          {removePending ? (
            <Spinner />
          ) : (
            <Flex align={'center'} gap={'2'}>
              <Text {...typoVariant.body1}>x</Text>
              <Text {...typoVariant.body1}>حذف دیدگاه</Text>
            </Flex>
          )}
        </Button>
      </Flex>
    </Flex>
  );
};

export default CommentInfo;
