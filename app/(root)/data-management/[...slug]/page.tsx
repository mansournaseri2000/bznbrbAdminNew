import React from 'react';

import ArticleManagement from '@/components/data-management/article-management/ArticleManagement';
import CreateAndEditArticle from '@/components/data-management/article-management/create-and-edit-article/CreateAndEditArticle';
import CreateAndEditPoint from '@/components/data-management/point-management/create-and-edit-point/CreateAndEditPoint';
import PointDetailRoot from '@/components/data-management/point-management/point-detail/PointDetailRoot';
import PointManagement from '@/components/data-management/point-management/PointManagement';

const DataManagement = ({ params }: { params: { slug: string[] } }) => {
  const renderElement = () => {
    switch (params.slug[0]) {
      case 'point-management':
        switch (params.slug[1]) {
          case 'create-point':
            return <CreateAndEditPoint />;
          case 'point-detail':
            return params.slug[2] === 'edit-point' ? <CreateAndEditPoint /> : <PointDetailRoot />;
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
