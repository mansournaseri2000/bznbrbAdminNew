'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQueries } from '@tanstack/react-query';

import { getAllPlacesConstants, getPlace } from '@/api/place';
import ArticleManagement from '@/components/data-management/article-management/ArticleManagement';
import CreateAndEditArticle from '@/components/data-management/article-management/create-and-edit-article/CreateAndEditArticle';
import CreateAndEditPoint from '@/components/data-management/point-management/create-and-edit-point/CreateAndEditPoint';
import PointDetailRoot from '@/components/data-management/point-management/point-detail/PointDetailRoot';
import PointManagement from '@/components/data-management/point-management/PointManagement';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';
import { PlaceResponse } from '@/types/place';

// import { useForm } from 'react-hook-form';

const DataManagement = ({ params }: { params: { slug: string[] } }) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const status = params.slug[1];
  const placeID = params.slug[2];

  // console.log('Status', params.slug[1]);
  // console.log('placeId', params.slug[2]);

  /**
   * services
   * _______________________________________________________________________________
   */

  const results = useQueries({
    queries: [
      {
        queryKey: ['constant'],
        queryFn: async () => await getAllPlacesConstants(),
      },
      {
        queryKey: ['place'],
        queryFn: async () => await getPlace(Number(placeID)),
        staleTime: 0,
        gcTime: 0,
      },
    ],
  });

  const [constantResult, editPlaceResult] = results;
  const { data: constantData } = constantResult;
  const { data: placeData, isLoading: placeIsLoading } = editPlaceResult;

  if (!constantData || placeIsLoading) return <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />;
  /**
   * Methods
   * _______________________________________________________________________________
   */
  const renderElement = () => {
    switch (params.slug[0]) {
      case 'point-management':
        switch (params.slug[1]) {
          case 'create-point':
            return <CreateAndEditPoint placeConstant={constantData} status={status} placeID={Number(placeID)} placeData={placeData as PlaceResponse} />;
          case 'point-detail':
            return <PointDetailRoot />;

          case 'edit-point':
            return <CreateAndEditPoint placeConstant={constantData} status={status} placeID={Number(placeID)} placeData={placeData as PlaceResponse} />;
          default:
            return <PointManagement />;
        }
      case 'article-management':
        switch (params.slug[1]) {
          case 'create-article':
            return <CreateAndEditArticle type='create' />;
          case 'edit-article':
            return <CreateAndEditArticle type='edit' />;
          default:
            return <ArticleManagement />;
        }
    }
  };
  /**
   * Method for handle title
   * _______________________________________________________________________________
   */
  const getTitle = () => {
    if (params.slug[0] === 'point-management') {
      if (params.slug[1] === 'create-point') return 'ساخت نقطه';
      if (params.slug[1] === 'point-detail') {
        return params.slug[2] === 'edit-point' ? 'ویرایش نقطه' : 'اطلاعات نقطه';
      }
      return 'لیست نقاط';
    }

    if (params.slug[0] === 'article-management') {
      if (params.slug[1] === 'create-article') return 'ساخت مقاله';
      if (params.slug[1] === 'edit-article') return 'ویرایش مقاله';
      return 'لیست مقالات';
    }

    return '';
  };

  return (
    <Flex direction={'column'}>
      <Header title={getTitle()} isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          {renderElement()}
        </Grid>
      </Box>
    </Flex>
  );
};

export default DataManagement;
