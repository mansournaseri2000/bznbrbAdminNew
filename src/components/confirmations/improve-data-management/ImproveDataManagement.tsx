import React from 'react';

import DataCard from '@/components/develop/shared/data-card/DataCard';
import { Flex, Grid, Text } from '@/libs/primitives';

const point = {
  id: 1,
  name: 'نام و عنوان point',
  Province: 'تهران',
  city: 'تهران',
};
const ImproveDataManagement = () => {
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      <DataCard
        type='improve_data_management'
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
      <DataCard
        type='improve_data_management'
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
      <DataCard
        type='improve_data_management'
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
      <DataCard
        type='improve_data_management'
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
      {/* TODO: add pagination */}
      <Flex width={'100%'} p={'5'} align={'center'} justify={'between'} style={{ border: '1px solid red' }}>
        <Text>pagination</Text>
        <Text>pagination count</Text>
      </Flex>
    </Grid>
  );
};

export default ImproveDataManagement;
