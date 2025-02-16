'use client';

import React, { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAllTravelMethodsSuggestions } from '@/api/confirmations';
import PathGuidCard from '@/components/develop/confirmations/path-guid-card/PathGuidCard';
import { Flex, Grid, Heading } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { ToastError } from '@/libs/shared/toast/Toast';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { colorPalette } from '@/theme';

const PathGuid = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 1);
  /**
   * services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['travel-suggestion', page], queryFn: async () => await getAllTravelMethodsSuggestions(page) });
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

  console.log('DATA', data);
  return (
    <Grid width={'100%'} gapY={'5'}>
      {data.filteredSuggestions.length === 0 ? (
        <Flex width={'100%'} mt={'4'}>
          <Heading as='h4' size={'4'} style={{ color: colorPalette.gray[11] }}>
            در حال حاضر راهنمای مسیری برای نمایش وجود ندارد.
          </Heading>
        </Flex>
      ) : (
        data.filteredSuggestions.map((item, index) => <PathGuidCard key={item.id} index={index} {...item} />)
      )}

      {data.filteredSuggestions.length !== 0 && (
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <CustomPagination
            current={page}
            total={data?.totalPages}
            onPageChange={p => {
              setPage(p);
              updateUrlWithPageNumber(p);
            }}
          />
          <ItemsPerPage data={data?.filteredSuggestions} currentPage={data?.currentPage} totalCount={data?.totalCount} />
        </Flex>
      )}
    </Grid>
  );
};

export default PathGuid;
