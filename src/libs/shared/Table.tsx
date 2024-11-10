'use client';

import { memo } from 'react';

import { Flex, Table, Text } from '@radix-ui/themes';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import styled from 'styled-components';

import { colorPalette } from '@/theme';
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
              <ColumnHeaderCell key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</ColumnHeaderCell>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows.map(row => (
          <Table.Row style={{ paddingBlock: 13.5, textAlign: 'center' }} key={row.id}>
            {row.getVisibleCells().map(cell => (
              <Table.Cell key={cell.id}>
                <CenteredContent>{flexRender(cell.column.columnDef.cell, cell.getContext())}</CenteredContent>
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
const ColumnHeaderCell = styled(Table.ColumnHeaderCell)`
  text-align: center;
  background-color: ${colorPalette.pink[2]};
  color: ${colorPalette.pink[11]};
  padding-block: 17.5px;
  border-bottom: 1px solid ${colorPalette.pink[6]};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
