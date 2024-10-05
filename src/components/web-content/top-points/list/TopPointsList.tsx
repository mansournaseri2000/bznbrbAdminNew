import React from 'react';

import { ColumnDef } from '@tanstack/react-table';

import { Table } from '@/libs/shared';

interface TopPointsListDetail {
  name: string;
  state: string;
  city: string;
  category: string;
}

const TopPointsList = () => {
  const columns: ColumnDef<TopPointsListDetail>[] = [];

  return <Table columns={columns as any} data={[]} />;
};

export default TopPointsList;
