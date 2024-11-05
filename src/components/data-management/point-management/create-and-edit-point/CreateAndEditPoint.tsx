import React from 'react';

import { Grid } from '@/libs/primitives';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';

const CreateAndEditPoint = () => {
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      <AccordionWrapper hero='اطلاعات نقطه'> </AccordionWrapper>
      <AccordionWrapper hero='تصاویر'> </AccordionWrapper>
      <AccordionWrapper hero='موقعیت جغرافیایی'> </AccordionWrapper>
      <AccordionWrapper hero='توضیحات'> </AccordionWrapper>
      <AccordionWrapper hero='ویژگی ها و امکانات'> </AccordionWrapper>
      <AccordionWrapper hero='تحلیل بزنیم بیرون'> </AccordionWrapper>
      <AccordionWrapper hero='تنظیمات SEO'> </AccordionWrapper>
      <AccordionWrapper hero='کی برم ؟'> </AccordionWrapper>
    </Grid>
  );
};

export default CreateAndEditPoint;
