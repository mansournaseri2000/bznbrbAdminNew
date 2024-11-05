import React from 'react';

import { Button, Flex, Grid, IconButton, Text, TextField } from '@/libs/primitives';
import { Filter } from '@/public/icon';
import { typoVariant } from '@/theme/typo-variants';

const PointManagementHero = () => {
  return (
    <Grid width={'100%'} gapX={'5'} style={{ gridTemplateColumns: 'auto auto 3fr' }}>
      <IconButton colorVariant='BLUE' variant='soft' size={'3'}>
        <Filter />
      </IconButton>
      {/* TODO: define navigation for onClick Button */}
      <Button colorVariant='BLUE' variant='ghost' size={'3'}>
        <Flex gap={'2'} align={'center'}>
          <Text {...typoVariant.body1}>+</Text>
          <Text {...typoVariant.body1}> افزودن نقطه</Text>
        </Flex>
      </Button>
      {/* TODO: add search icon to text field */}
      <TextField placeholder='جستجو نام نقطه' />
    </Grid>
  );
};

export default PointManagementHero;
