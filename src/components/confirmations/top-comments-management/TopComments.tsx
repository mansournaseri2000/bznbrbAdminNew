'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import TopCommentItem from '@/components/develope/confirmations/top-comment-item/TopCommentItem';
import { Button, Flex, Grid, Text } from '@/libs/primitives';
import { typoVariant } from '@/theme/typo-variants';

const point = {
  id: 1,
  name: 'نام و عنوان point',
  Province: 'تهران',
  city: 'تهران',
};

const user = {
  pic: '/image/profile.jpeg',
  username: 'مصطفی',
  last_name: 'اجاقلو',
  date: '24 فروردین',
};

const TopComments = () => {
  const router = useRouter();
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      <Button size={'3'} colorVariant='BLUE' variant='ghost' style={{ width: 'fit-content' }} onClick={() => router.push('/confirmations/top-comments/comments/comment-management')}>
        <Flex align={'center'} gap={'2'}>
          <Text {...typoVariant.body1}>+</Text>
          <Text {...typoVariant.body1}>افزودن نظر</Text>
        </Flex>
      </Button>
      <TopCommentItem
        id={1}
        point={point}
        user={user}
        comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
      />
      <TopCommentItem
        id={1}
        point={point}
        user={user}
        comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
      />
      <TopCommentItem
        id={1}
        point={point}
        user={user}
        comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
      />
      <TopCommentItem
        id={1}
        point={point}
        user={user}
        comment='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
      />
    </Grid>
  );
};

export default TopComments;
