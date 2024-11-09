import React from 'react';

import CommentCard from '@/components/develope/confirmations/comment-card/CommentCard';
import { Grid } from '@/libs/primitives';

const user = {
  id: 1,
  name: 'سید اکبر',
  last_name: 'موسی نژاد',
  mobile: '09937665252',
  pic: '/image/profile.jpeg',
};

const Comment = () => {
  return (
    <Grid width={'100%'} gapY={'5'}>
      <CommentCard
        id={1}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
        createdAt='۲۴ فروردین'
        users={user}
        colorVariant='blue'
      />
      <CommentCard
        id={1}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
        createdAt='۲۴ فروردین'
        users={user}
        colorVariant='pink'
      />
      <CommentCard
        id={1}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
        createdAt='۲۴ فروردین'
        users={user}
        colorVariant='blue'
      />
      <CommentCard
        id={1}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
        createdAt='۲۴ فروردین'
        users={user}
        colorVariant='pink'
      />
      {/* TODO: add pagination */}
    </Grid>
  );
};

export default Comment;
