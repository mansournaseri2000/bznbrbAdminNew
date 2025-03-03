'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQueries } from '@tanstack/react-query';

import { getArticleById } from '@/api/data-management';
import { getAllPlacesConstants, getPlace } from '@/api/place';
import ArticleManagement from '@/components/data-management/article-management/ArticleManagement';
import CreateAndEditArticle from '@/components/data-management/article-management/create-and-edit-article/CreateAndEditArticle';
import CreateAndEditPoint from '@/components/data-management/point-management/create-and-edit-point/CreateAndEditPoint';
import PointManagement from '@/components/data-management/point-management/PointManagement';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';
import { PlaceResponse } from '@/types/place';

const DataManagement = ({ params }: { params: { slug: string[] } }) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const status = params.slug[1];
  const placeID = params.slug[2];

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
        queryKey: ['place', placeID],
        queryFn: async () => await getPlace(Number(placeID)),
        enabled: status === 'create-point' || status === 'edit-point' || status === 'point-detail',
      },
      {
        queryKey: ['article-data', placeID],
        staleTime: 0,
        gcTime: 0,
        queryFn: async () => await getArticleById(Number(placeID)),
        enabled: status === 'edit-article' || status === 'create-article',
      },
    ],
  });

  const [constantResult, editPlaceResult, articleByIdResult] = results;
  const { data: constantData } = constantResult;
  const { data: placeData, isLoading: placeIsLoading, isFetching: placeFetching } = editPlaceResult;
  const { data: articleByIdData, isLoading: articleByIdLoading, isFetching: articleByIdFetching } = articleByIdResult;

  console.log(articleByIdData?.data.title);

  /**
   * Loading And Error
   * _______________________________________________________________________________
   */
  if (!constantData || placeIsLoading || articleByIdLoading || placeFetching || articleByIdFetching)
    return (
      <Flex width={'100%'} height={'100vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 3 }} />
      </Flex>
    );

  // if (!constantData || !placeData || placeError || !articleByIdData || articleByIdError) return ToastError('مشکلی پیش آمده است . لطفا مجددا تلاش کنید');

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
          case 'edit-point':
            return <CreateAndEditPoint placeConstant={constantData} status={status} placeID={Number(placeID)} placeData={placeData as PlaceResponse} />;
          default:
            return <PointManagement constant={constantData} />;
        }
      case 'article-management':
        switch (params.slug[1]) {
          case 'create-article':
            return <CreateAndEditArticle placeConstant={constantData} articleData={articleByIdData?.data as any} type='create-article' />;
          case 'edit-article':
            return <CreateAndEditArticle placeConstant={constantData} articleData={articleByIdData?.data as any} type='edit-article' />;
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
      if (status === 'create-point') return 'ساخت نقطه';
      if (status === 'edit-point') return `ویرایش نقطه - ${placeData?.name}`;
      return 'لیست نقاط';
    }

    if (params.slug[0] === 'article-management') {
      if (status === 'create-article') return 'ساخت مقاله';
      if (status === 'edit-article') return ` ویرایش مقاله - ${articleByIdData?.data.title}`;
      return 'لیست مقالات';
    }

    return '';
  };

  return (
    <Flex direction={'column'}>
      <Header title={getTitle()} isNavigation />
      <Box p={'24px 280px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          {renderElement()}
        </Grid>
      </Box>
    </Flex>
  );
};

export default DataManagement;
