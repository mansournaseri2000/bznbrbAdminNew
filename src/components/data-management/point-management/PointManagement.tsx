import React from 'react';

import { Flex } from '@/libs/primitives';

// import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import PointManagementHero from './hero/PointManagementHero';
import PointManagementList from './list/PointManagementList';

const PointManagement = () => {
  return (
    <Flex width={'100%'} direction={'column'} gap={'5'} p={'5'}>
      <PointManagementHero />
      <PointManagementList />
      {/* TODO: add pagination */}
      {/* <CustomPagination current={1} total={8} /> */}
    </Flex>
  );
};

export default PointManagement;
