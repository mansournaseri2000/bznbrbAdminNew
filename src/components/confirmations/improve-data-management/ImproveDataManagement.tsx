'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAllImproveContent } from '@/api/confirmations';
import DataCard from '@/components/develop/shared/data-card/DataCard';
import { Flex, Grid } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';

const ImproveDataManagement = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const { data: improveData } = useQuery({ queryKey: ['improve-data'], queryFn: async () => getAllImproveContent() });

  console.log('Improve data', improveData);

  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      {improveData?.PlaceImproveContent.map((item, index) => (
        <DataCard type='improve_data_management' key={item.id} index={index} {...item} />
      ))}

      {improveData?.PlaceImproveContent && (
        <Flex width={'100%'} align={'center'} justify={'between'} style={{ border: '1px solid red' }}>
          <CustomPagination
            current={1}
            total={improveData?.CurrentShowingPlaceImproveContent}
            onPageChange={p => {
              updateUrlWithPageNumber(p);
            }}
          />
          <ItemsPerPage data={improveData?.PlaceImproveContent} currentPage={improveData?.CurrentShowingPlaceImproveContentPage} totalCount={improveData?.PlaceImproveContentCount} />
        </Flex>
      )}
    </Grid>
  );
};

export default ImproveDataManagement;
