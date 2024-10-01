import React from 'react';

import { Avatar } from '@radix-ui/themes';

import AppButton from '@/libs/primitives/components/Button';
import AppFlex from '@/libs/primitives/layout/Flex';
import AppText from '@/libs/primitives/typography/Text';

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
    <AppFlex
      width={'100%'}
      direction={'column'}
      gap={'4'}
      p={'4'}
      style={{ border: '1px solid #D4D4D4', borderRadius: 4 }}
    >
      <AppFlex align={'center'} gap={'10px'}>
        <Avatar fallback='T' size={'2'} src={profileImg} style={{ borderRadius: '50%' }} />
        <AppFlex direction={'column'} gap={'1'}>
          <AppText>{username}</AppText>
          <AppText>{mobile}</AppText>
        </AppFlex>
      </AppFlex>
      <AppFlex direction={'column'} gap={'10px'}>
        <AppText as='label'>متن سوال</AppText>
        <AppText as='p'>{question}</AppText>
      </AppFlex>
      <AppFlex justify={'end'} gap={'5'}>
        <AppButton size={'3'} variant='outline'>
          حذف سوال
        </AppButton>
        <AppButton size={'3'}>اطلاعات بیشتر</AppButton>
      </AppFlex>
    </AppFlex>
  );
};

export default QuestionCard;
