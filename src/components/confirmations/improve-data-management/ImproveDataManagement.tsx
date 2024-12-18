'use client';

import React, { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAllImproveContent } from '@/api/confirmations';
import DataCard from '@/components/develop/shared/data-card/DataCard';
import { Flex, Grid, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';

const ImproveDataManagement = () => {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 1);
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const { data: improveData, isLoading, isFetching } = useQuery({ queryKey: ['improve-data', page], queryFn: async () => getAllImproveContent(page) });

  console.log('Improve data', improveData);

  /*
   *** Loading_________________________________________________________________________________________________________________________________________________________________
   */
  if (isLoading || isFetching) return <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '100px' }} />;

  if (!improveData) return <Text>دیتایی موجود نیست</Text>;

  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      {improveData?.PlaceImproveContent.map((item, index) => (
        <DataCard type='improve_data_management' key={item.id} index={index} {...item} />
      ))}

      <Flex width={'100%'} align={'center'} justify={'between'}>
        <CustomPagination
          current={page}
          total={improveData?.totalPages}
          onPageChange={p => {
            setPage(p);
            updateUrlWithPageNumber(p);
          }}
        />
        <ItemsPerPage data={improveData?.PlaceImproveContent} currentPage={improveData?.currentPage} totalCount={improveData?.totalCount} />
      </Flex>
    </Grid>
  );
};

export default ImproveDataManagement;
