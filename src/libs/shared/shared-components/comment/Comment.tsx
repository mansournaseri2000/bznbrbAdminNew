import React from 'react';

import Image from 'next/image';

import { Box, Flex } from '@radix-ui/themes';
import styled from 'styled-components';

import { Text } from '@/libs/primitives';
import AppButton from '@/libs/primitives/components/Button';

type CommentProps = {
  profileImg: string;
  username: string;
  date: string;
  rate: number;
  comment: string;
};

const Comment = (props: CommentProps) => {
  console.log("fafsdf");
  
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
        <Flex>{/* TODO: define ICON's here */}</Flex>
      </Flex>
      <Text>{comment}</Text>
      <Flex gap={'4'} justify={'end'}>
        <AppButton>
          <Text>تایید و انتشار</Text>
        </AppButton>
        <AppButton variant='outline'>
          <Text>اطلاعات بیشتر</Text>
        </AppButton>
      </Flex>
    </CardWrapper>
  );
};

export default Comment;

const CardWrapper = styled(Flex)`
  width: 100%;
  max-width: 972px;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
`;
