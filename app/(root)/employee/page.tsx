import React from 'react';

import EmployeeHero from '@/components/employee/hero/EmployeeHero';
import EmployeeList from '@/components/employee/list/EmployeeList';
import EmployeePagination from '@/components/employee/pagination/EmployeePagination';
import { Flex } from '@/libs/primitives';

export default function Employee() {
  return (
    <Flex width={'100%'} direction={'column'} gap={'4'} p={'5'}>
      <EmployeeHero />
      <EmployeeList />
      <EmployeePagination />
    </Flex>
  );
}
