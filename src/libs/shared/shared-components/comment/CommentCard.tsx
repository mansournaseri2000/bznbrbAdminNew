'use client';

import React from 'react';

import Image from 'next/image';

import { Box, Flex } from '@radix-ui/themes';
import styled from 'styled-components';

<<<<<<< HEAD:src/libs/shared/shared-components/comment/Comment.tsx
import { Button, Text } from '@/libs/primitives';
=======
import { IconButton, Text } from '@/libs/primitives';
import AppButton from '@/libs/primitives/components/Button';
>>>>>>> feat-comment:src/libs/shared/shared-components/comment/CommentCard.tsx

type CommentProps = {
  profileImg: string;
  username: string;
  date: string;
  rate: number;
  comment: string;
};

<<<<<<< HEAD:src/libs/shared/shared-components/comment/Comment.tsx
const Comment = (props: CommentProps) => {
  console.log('fafsdf');

=======
const CommentCard = (props: CommentProps) => {
>>>>>>> feat-comment:src/libs/shared/shared-components/comment/CommentCard.tsx
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
<<<<<<< HEAD:src/libs/shared/shared-components/comment/Comment.tsx
        <Button>
          <Text>تایید و انتشار</Text>
        </Button>
        <Button variant='outline'>
=======
        <AppButton size={'3'}>
          <Text>تایید و انتشار</Text>
        </AppButton>
        <AppButton variant='outline' size={'3'}>
>>>>>>> feat-comment:src/libs/shared/shared-components/comment/CommentCard.tsx
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
