import React from 'react';

import ContactUsCard from '@/components/support/contact-us-card/ContactUsCard';
import { Grid } from '@/libs/primitives';

export default function Support() {
  return (
    <Grid width={'100%'} gapY={'5'}>
      <ContactUsCard
        index={0}
        title='موضوع'
        username='نام کاربر'
        date='24 فروردین'
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
        msgStatus='answered'
      />
      <ContactUsCard
        index={1}
        title='موضوع'
        username='نام کاربر'
        date='24 فروردین'
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
        msgStatus='no-answered'
      />
    </Grid>
  );
}
