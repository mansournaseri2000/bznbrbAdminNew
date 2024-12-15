'use client';

import React, { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { useQuery, useQueryClient } from '@tanstack/react-query';

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
  const queryClient = useQueryClient();
  /**
   * services
   * _______________________________________________________________________________
   */
  const { data: travelSuggestionData } = useQuery({ queryKey: ['travel-suggestion'], queryFn: async () => await getAllTravelMethodsSuggestions() });

  console.log('DATA', travelSuggestionData);
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      {travelSuggestionData?.filteredSuggestions.map((item, index) => (
        <PathGuidCard key={item.id} index={index} {...item} />
      ))}

      {/* TODO: add pagination */}
      {travelSuggestionData?.filteredSuggestions && (
        <Flex width={'100%'} align={'center'} justify={'between'} style={{ border: '1px solid red' }}>
          <CustomPagination
            current={page}
            total={travelSuggestionData?.CurrentPageCount}
            onPageChange={p => {
              setPage(p);
              updateUrlWithPageNumber(p);
              queryClient.invalidateQueries({ queryKey: ['travel-suggestion'] });
            }}
          />
          <ItemsPerPage data={travelSuggestionData?.filteredSuggestions} currentPage={travelSuggestionData?.currentPage} totalCount={travelSuggestionData?.CurrentPageCount} />
        </Flex>
      )}
    </Grid>
  );
};

export default PathGuid;
