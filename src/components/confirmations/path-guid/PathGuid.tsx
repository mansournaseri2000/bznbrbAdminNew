import React from 'react';

import PathGuidCard from '@/components/develop/confirmations/path-guid-card/PathGuidCard';
import { Flex, Grid, Text } from '@/libs/primitives';

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
      {/* TODO: add pagination */}
      <Flex width={'100%'} p={'5'} align={'center'} justify={'between'} style={{ border: '1px solid red' }}>
        <Text>pagination</Text>
        <Text>pagination count</Text>
      </Flex>
    </Grid>
  );
};

export default PathGuid;
