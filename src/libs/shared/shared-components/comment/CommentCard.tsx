'use client';

import React from 'react';

import Image from 'next/image';

import { Box, Flex } from '@radix-ui/themes';
import styled from 'styled-components';

import { Button, IconButton, Text } from '@/libs/primitives';

type CommentProps = {
  profileImg: string;
  username: string;
  date: string;
  rate: number;
  comment: string;
};

const CommentCard = (props: CommentProps) => {
  const { profileImg, username, date, comment } = props;
  return (
    <CardWrapper direction={'column'} p={'4'} gap={'4'}>
      <Flex width={'100%'} justify={'between'} align={'center'}>
        <Flex align={'center'} gap={'2'}>
          <Box style={{ width: 40, height: 40, position: 'relative', borderRadius: '50%' }}>
            <Image src={profileImg} alt='' fill style={{ borderRadius: '50%' }} />
          </Box>
          <Flex direction={'column'} gap={'1'}>
            <Text>{username}</Text>
            <Text>{date}</Text>
          </Flex>
        </Flex>
        <Flex gap={'2'} align={'center'}>
          {/* TODO: define ICON's here */}
          <IconButton size={'3'} radius='full'>
            icon
          </IconButton>
          <IconButton size={'3'} radius='full'>
            icon
          </IconButton>
        </Flex>
      </Flex>
      <Text>{comment}</Text>
      <Flex gap={'4'} justify={'end'}>
        <Button>
          <Text>تایید و انتشار</Text>
        </Button>
        <Button variant='outline'>
          <Text>اطلاعات بیشتر</Text>
        </Button>
      </Flex>
    </CardWrapper>
  );
};

export default CommentCard;

const CardWrapper = styled(Flex)`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
`;
