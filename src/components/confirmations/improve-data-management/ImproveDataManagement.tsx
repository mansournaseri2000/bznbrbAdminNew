'use client';

import React, { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAllImproveContent } from '@/api/confirmations';
import DataCard from '@/components/develop/shared/data-card/DataCard';
import { Flex, Grid, Heading } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { ToastError } from '@/libs/shared/toast/Toast';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { colorPalette } from '@/theme';

const ImproveDataManagement = () => {
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 1);
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const { data: data, isLoading, isFetching, isError } = useQuery({ queryKey: ['improve-data', page], queryFn: async () => getAllImproveContent(page) });

  console.log('Improve data', data);

  /**
   * Loading and Error
   * _______________________________________________________________________________
   */
  if (isLoading || isFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 2.5 }} />
      </Flex>
    );

  if (!data || isError) return ToastError('مشکلی پیش آمده . لطفا دوباره تلاش نمایید');

  /**
   * JSX
   * _______________________________________________________________________________
   */

  return (
    <Grid width={'100%'} gapY={'5'}>
      {data.PlaceImproveContent.length === 0 ? (
        <Flex width={'100%'} mt={'4'}>
          <Heading as='h4' size={'4'} style={{ color: colorPalette.gray[11] }}>
            در حال حاضر اطلاعاتی برای نمایش وجود ندارد.
          </Heading>
        </Flex>
      ) : (
        data.PlaceImproveContent.map((item, index) => <DataCard type='improve_data_management' key={item.id} index={index} {...(item as any)} />)
      )}

      {data.PlaceImproveContent.length !== 0 && (
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <CustomPagination
            current={page}
            total={data.totalPages}
            onPageChange={p => {
              setPage(p);
              updateUrlWithPageNumber(p);
            }}
          />
          <ItemsPerPage data={data.PlaceImproveContent} currentPage={data.currentPage} totalCount={data.totalCount} />
        </Flex>
      )}
    </Grid>
  );
};

export default ImproveDataManagement;
