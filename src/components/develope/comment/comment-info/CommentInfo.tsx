'use client';

import React from 'react';

import Image from 'next/image';

import { Spinner } from '@radix-ui/themes';
import styled from 'styled-components';

import { Box, Button, Flex, Heading, Text } from '@/libs/primitives';
import { CommentsDetail } from '@/types/comment/comment-list';

type CommentInfoProps = CommentsDetail & {
  onUpdate: () => void;
  onRemove: () => void;
  updatePending: boolean;
  removePending: boolean;
};

const CommentInfo: React.FC<CommentInfoProps> = (props: CommentInfoProps) => {
  const { places, users, createdAt, content, onUpdate, onRemove, updatePending, removePending } = props;

  return (
    <CardWrapper direction={'column'} gap={'4'}>
      <HeroWrapper width={'100%'} justify={'between'} p={'4'}>
        <Heading>ثبت بنر آگهی</Heading>
      </HeroWrapper>
      <Flex direction={'column'} p={'4'} pt={'0'} gap={'5'}>
        <Flex direction={'column'} gap={'2'}>
          <Text>{places?.name}</Text>
          <Text>{`${places?.Cities.name} / ${places?.Cities.Provinces.name}`}</Text>
        </Flex>
        <Flex align={'center'} gap={'2'}>
          <Box style={{ width: 40, height: 40, position: 'relative', borderRadius: '50%' }}>
            <Image src={users.pic ? users.pic : ''} alt='' fill style={{ borderRadius: '50%' }} />
          </Box>
          <Flex direction={'column'} gap={'1'}>
            <Text>{`${users.name} ${users.last_name}`}</Text>
            <Text>{createdAt}</Text>
          </Flex>
        </Flex>
        <Text>{content}</Text>
      </Flex>
      <ButtonsWrapper width={'100%'} gap={'4'} p={'4'}>
        <Button size={'3'} onClick={onUpdate}>
          <Text>{updatePending ? <Spinner /> : 'تایید و انتشار'}</Text>
        </Button>
        <Button variant='outline' size={'3'} onClick={onRemove}>
          <Text>{removePending ? <Spinner /> : 'حذف دیدگاه'}</Text>
        </Button>
      </ButtonsWrapper>
    </CardWrapper>
  );
};

export default CommentInfo;

const CardWrapper = styled(Flex)`
  width: 100%;
  border-radius: 1rem;
`;

const HeroWrapper = styled(Flex)`
  height: fit-content;
  border-radius: 1rem 1rem 0px 0px;
  background-color: #f2f2f2;
`;

const ButtonsWrapper = styled(Flex)`
  border-radius: 0px 0px 1rem 1rem;
  background-color: #f2f2f2;
`;
