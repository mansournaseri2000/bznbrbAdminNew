'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

import { Box, Button, Flex, Heading, Text } from '@/libs/primitives';

type CommentModalProps = {
  hero: string;
  title: string;
  badge: string[];
  location: string;
  profileImg: string;
  //   rate: number;
  comment: string;
  username: string;
  date: string;
};

const CommentModal: React.FC<CommentModalProps> = (props: CommentModalProps) => {
  const { hero, title, badge, date, location, profileImg, username, comment } = props;
  return (
    <CardWrapper direction={'column'} gap={'4'}>
      <HeroWrapper width={'100%'} justify={'between'} p={'4'}>
        <Heading>{hero}</Heading>
      </HeroWrapper>
      <Flex direction={'column'} p={'4'} pt={'0'} gap={'5'}>
        <Flex direction={'column'} gap={'2'}>
          <Text>{title}</Text>
          <Text>{location}</Text>
        </Flex>
        <Flex align={'center'} gap={'2'}>
          {badge?.map((item, index) => (
            <Box key={index} style={{ backgroundColor: '#D4D4D4', borderRadius: 12, padding: '2px 12px' }}>
              <Text>{item}</Text>
            </Box>
          ))}
        </Flex>
        <Flex align={'center'} gap={'2'}>
          <Box style={{ width: 40, height: 40, position: 'relative', borderRadius: '50%' }}>
            <Image src={profileImg} alt='' fill style={{ borderRadius: '50%' }} />
          </Box>
          <Flex direction={'column'} gap={'1'}>
            <Text>{username}</Text>
            <Text>{date}</Text>
          </Flex>
        </Flex>
        <Text>{comment}</Text>
        {/* <TextArea placeholder='پاسخ مدیر' /> */}
      </Flex>
      <ButtonsWrapper width={'100%'} gap={'4'} p={'4'}>
        <Button size={'3'}>
          <Text>تایید و انتشار</Text>
        </Button>
        <Button variant='outline' size={'3'}>
          <Text>حذف دیدگاه</Text>
        </Button>
      </ButtonsWrapper>
    </CardWrapper>
  );
};

export default CommentModal;

const CardWrapper = styled(Flex)`
  width: 100%;
  max-width: 807px;
  min-height: 600px;
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
