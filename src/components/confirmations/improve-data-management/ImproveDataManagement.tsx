import React from 'react';

import ImproveDataCard from '@/components/develope/confirmations/improve-data-card/ImproveDataCard';
import { Grid } from '@/libs/primitives';

const point = {
  id: 1,
  name: 'نام و عنوان point',
  Province: 'تهران',
  city: 'تهران',
};
const ImproveDataManagement = () => {
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      <ImproveDataCard
        colorVariant='blue'
        point={point}
        mobile='091212345678'
        website='www.example.com'
        email='example@gmail.com'
        province='نام استان'
        city='نام شهر'
        id={1}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
      />
      <ImproveDataCard
        colorVariant='pink'
        point={point}
        mobile='091212345678'
        website='www.example.com'
        email='example@gmail.com'
        province='نام استان'
        city='نام شهر'
        id={1}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
      />
      <ImproveDataCard
        colorVariant='blue'
        point={point}
        mobile='091212345678'
        website='www.example.com'
        email='example@gmail.com'
        province='نام استان'
        city='نام شهر'
        id={1}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
      />
      <ImproveDataCard
        colorVariant='pink'
        point={point}
        mobile='091212345678'
        website='www.example.com'
        email='example@gmail.com'
        province='نام استان'
        city='نام شهر'
        id={1}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
      />
    </Grid>
  );
};

export default ImproveDataManagement;
