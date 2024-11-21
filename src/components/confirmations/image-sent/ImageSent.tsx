import React from 'react';

import ImageSentCard from '@/components/develop/confirmations/img-sent-card/ImageSentCard';
import { Grid } from '@/libs/primitives';

const point = {
  id: 1,
  name: 'نام و عنوان point',
  Province: 'تهران',
  city: 'تهران',
};

const ImageSent = () => {
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      <ImageSentCard
        colorVariant='blue'
        point={point}
        image={'/image/image-sent.png'}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد'
        id={1}
      />
      <ImageSentCard
        colorVariant='pink'
        point={point}
        image={'/image/image-sent.png'}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد'
        id={1}
      />
      <ImageSentCard
        colorVariant='blue'
        point={point}
        image={'/image/image-sent.png'}
        content='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد'
        id={1}
      />
      {/* TODO: define pagination  */}
    </Grid>
  );
};

export default ImageSent;
