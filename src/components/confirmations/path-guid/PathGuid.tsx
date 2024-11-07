import React from 'react';

import PathGuidCard from '@/components/develope/confirmations/path-guid-card/PathGuidCard';
import { Grid } from '@/libs/primitives';

const point = {
  id: 1,
  name: 'نام و عنوان point',
  Province: 'تهران',
  city: 'تهران',
};

const PathGuid = () => {
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      <PathGuidCard
        colorVariant='blue'
        point={point}
        id={1}
        content='تاکسی ها از سه راه تهران پارس، میدان انقلاب، میدان فردوسی، میدان آزادی و سرتاسر خیابان انقلاب اسلامی شما را به میدان امام حسین (ع) می رسانند.'
      />
      <PathGuidCard
        colorVariant='pink'
        point={point}
        id={1}
        content='تاکسی ها از سه راه تهران پارس، میدان انقلاب، میدان فردوسی، میدان آزادی و سرتاسر خیابان انقلاب اسلامی شما را به میدان امام حسین (ع) می رسانند.'
      />
      <PathGuidCard
        colorVariant='blue'
        point={point}
        id={1}
        content='تاکسی ها از سه راه تهران پارس، میدان انقلاب، میدان فردوسی، میدان آزادی و سرتاسر خیابان انقلاب اسلامی شما را به میدان امام حسین (ع) می رسانند.'
      />
    </Grid>
  );
};

export default PathGuid;
