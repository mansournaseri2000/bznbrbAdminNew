'use client';

import React, { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAllTravelMethodsSuggestions } from '@/api/confirmations';
import PathGuidCard from '@/components/develop/confirmations/path-guid-card/PathGuidCard';
import { Flex, Grid } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';

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
  const { data: travelSuggestionData, isLoading, isFetching } = useQuery({ queryKey: ['travel-suggestion', page], queryFn: async () => await getAllTravelMethodsSuggestions(page) });
  /*
   *** Loading_________________________________________________________________________________________________________________________________________________________________
   */
  if (isLoading || isFetching || !travelSuggestionData) return <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '100px' }} />;

  console.log('DATA', travelSuggestionData);
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      {travelSuggestionData?.filteredSuggestions.map((item, index) => (
        <PathGuidCard key={item.id} index={index} {...item} />
      ))}
      <Flex width={'100%'} align={'center'} justify={'between'}>
        <CustomPagination
          current={page}
          total={travelSuggestionData?.totalPages}
          onPageChange={p => {
            setPage(p);
            updateUrlWithPageNumber(p);
          }}
        />
        <ItemsPerPage data={travelSuggestionData?.filteredSuggestions} currentPage={travelSuggestionData?.currentPage} totalCount={travelSuggestionData?.totalCount} />
      </Flex>
    </Grid>
  );
};

export default PathGuid;
