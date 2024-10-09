import React from 'react';

import Image from 'next/image';
import { Box, Button, Flex, Text } from '@/libs/primitives';


type QuestionCardProps = {
  profileImg: string;
  username: string;
  mobile: string;
  question: string;
  // onDelete:()=>void;
  // onMoreDetail:()=>void
};

const QuestionCard: React.FC<QuestionCardProps> = (props: QuestionCardProps) => {
  const { profileImg, username, mobile, question } = props;
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 4 }}>
      <Flex align={'center'} gap={'10px'}>
        <Box
          style={{
            width: 32,
            height: 32,
            position: 'relative',
            border: '1px solid #D4D4D4',
            borderRadius: '50%',
          }}
        >
          <Image alt='تصویر آگهی' src={profileImg} fill style={{ borderRadius: '50%' }} />
        </Box>

        {/* <Avatar fallback='T' size={'2'} src={profileImg} style={{ borderRadius: '50%' }} /> */}
        <Flex direction={'column'} gap={'1'}>
          <Text>{username}</Text>
          <Text>{mobile}</Text>
        </Flex>
      </Flex>
      <Flex direction={'column'} gap={'10px'}>
        <Text as='label'>متن سوال</Text>
        <Text as='p'>{question}</Text>
      </Flex>
      <Flex justify={'end'} gap={'5'}>
        <Button size={'3'} variant='outline'>
          حذف سوال
        </Button>
        <Button size={'3'}>اطلاعات بیشتر</Button>
      </Flex>
    </Flex>
  );
};

export default QuestionCard;
