'use client';

import React from 'react';

import AddComment from '@/components/develop/confirmations/add-comment/AddComment';
import TopCommentItem from '@/components/develop/confirmations/top-comment-item/TopCommentItem';
import { Grid } from '@/libs/primitives';

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
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
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
      <AddComment />
    </Grid>
  );
};

export default TopComments;
