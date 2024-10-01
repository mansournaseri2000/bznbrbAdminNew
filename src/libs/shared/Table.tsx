'use client';

import { memo } from 'react';

import { Flex, Table, Text } from '@radix-ui/themes';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { PlacesDetail } from '@/types/place/place-list';

/**
 * props
 * _______________________________________________________________________________
 */

type Props = {
  columns: ColumnDef<PlacesDetail>[];
  data: PlacesDetail[];
};

const TableComponent = ({ columns, data }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  /**
   * useEffect
   * _______________________________________________________________________________
   */

  /**
   * hooks and methods
   * _______________________________________________________________________________
   */

  const table = useReactTable({
    data: data ? data : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (data.length === 0)
    return (
      <Flex justify={'center'} p={'40px'}>
        <Text>دیتایی موجود نیست</Text>
      </Flex>
    );

  /**
   * template
   * _______________________________________________________________________________
   */
  return (
    <Table.Root style={{ width: '100%' }} variant='surface'>
      <Table.Header>
        {table.getHeaderGroups().map(headerGroup => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <Table.ColumnHeaderCell style={{ textAlign: 'right' }} key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows.map(row => (
          <Table.Row style={{ height: '80px' }} key={row.id}>
            {row.getVisibleCells().map(cell => (
              <Table.Cell style={{ textAlign: 'right' }} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default memo(TableComponent);

/**
 * styled-component
 * _______________________________________________________________________________
 */
