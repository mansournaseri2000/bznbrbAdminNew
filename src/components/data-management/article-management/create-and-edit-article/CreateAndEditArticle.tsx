import React from 'react';

import { Grid } from '@/libs/primitives';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';

type Props = {
  type: 'create' | 'edit';
};

const CreateAndEditArticle = (props: Props) => {
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      <AccordionWrapper hero='اطلاعات اولیه'> </AccordionWrapper>
      {props.type === 'edit' && <AccordionWrapper hero='محتوای متنی'> </AccordionWrapper>}
      <AccordionWrapper hero='نقطه مرتبط'> </AccordionWrapper>
      <AccordionWrapper hero='تصاویر'> </AccordionWrapper>
      <AccordionWrapper hero='تنظیمات SEO'> </AccordionWrapper>
    </Grid>
  );
};

export default CreateAndEditArticle;
