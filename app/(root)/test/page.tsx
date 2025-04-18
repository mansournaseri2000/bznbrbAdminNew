import React from 'react';

import { Flex, Grid } from '@/libs/primitives';
// import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import AccordionWrapper from '@/libs/shared/wrapper/AccordionWrapper';
import BoxWrapper from '@/libs/shared/wrapper/BoxWrapper';

export default function Test() {
  return (
    <Grid width={'100%'} height={'100vh'} justify={'center'} align={'center'} p={'9'}>
      <BoxWrapper hero='تست نرم افزار'>
        <Flex>sw</Flex>
      </BoxWrapper>
      <AccordionWrapper isOpen hero='تست'>s</AccordionWrapper>
      {/* <CustomPagination
        current={1}
        total={4}
        // onPageChange={p => {
        //   console.log(p);
        // }}
      /> */}
    </Grid>
  );
}
