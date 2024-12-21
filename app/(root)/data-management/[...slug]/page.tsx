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
import { PlaceResponse } from '@/types/place';

// import { useForm } from 'react-hook-form';

const DataManagement = ({ params }: { params: { slug: string[] } }) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const status = params.slug[0];
  const placeID = params.slug[2];

  console.log('ARTICLE ID', params.slug[2]);

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
        enabled: status === 'edit',
        staleTime: 0,
        gcTime: 0,
      },
    ],
  });

  const [constantResult, editPlaceResult] = results;
  const { data: constantData } = constantResult;
  const { data: placeData, isLoading: placeIsLoading } = editPlaceResult;

  if (!constantData || placeIsLoading) return <Spinner style={{ marginInline: 'auto', scale: 3, marginBlock: '20px' }} />;

  const renderElement = () => {
    switch (params.slug[0]) {
      case 'point-management':
        switch (params.slug[1]) {
          case 'create-point':
            return <CreateAndEditPoint placeConstant={constantData} status={status} placeID={Number(placeID)} placeData={placeData as PlaceResponse} />;
          case 'point-detail':
            return params.slug[2] === 'edit-point' ? (
              <CreateAndEditPoint placeConstant={constantData} status={status} placeID={Number(placeID)} placeData={placeData as PlaceResponse} />
            ) : (
              <PointDetailRoot />
            );
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

  return renderElement();
};

export default DataManagement;
