'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import Comments from '@/components/confirmations/comments/Comments';
import ImageSent from '@/components/confirmations/image-sent/ImageSent';
import ImproveDataManagement from '@/components/confirmations/improve-data-management/ImproveDataManagement';
import PathGuid from '@/components/confirmations/path-guid/PathGuid';
import TopComments from '@/components/confirmations/top-comments-management/TopComments';
import TopCommentsManagement from '@/components/confirmations/top-comments-management/TopCommentsManagement';
import Header from '@/layout/Header';
import { useResolveIdsToNames } from '@/libs/hooks/useResolveIdsToName';
import { Box, Flex, Grid } from '@/libs/primitives';

//

const Confirmations = ({ params }: { params: { slug: string[] } }) => {
  /**
   * services
   * _______________________________________________________________________________
   */
  const { data } = useQuery({ queryKey: ['constant'], queryFn: async () => await getAllPlacesConstants() });
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const resolveProvinceName = useResolveIdsToNames(Number(params.slug[2]), data?.provinces ?? []);
  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const renderElement = () => {
    switch (params.slug[0]) {
      case 'comment':
        return <Comments />;
      case 'path-guid':
        return <PathGuid />;
      case 'image-sent':
        return <ImageSent />;
      case 'improve-data':
        return <ImproveDataManagement />;
      case 'top-comments':
        switch (params.slug[1]) {
          case 'comments':
            return <TopComments />;
          default:
            return <TopCommentsManagement />;
        }

      default:
        return null;
    }
  };

  const getTitle = () => {
    if (params.slug[0] === 'comment') return 'لیست نظرات';
    if (params.slug[0] === 'path-guid') return 'لیست راهنما های مسیر';
    if (params.slug[0] === 'image-sent') return 'لیست تصاویر ارسالی';
    if (params.slug[0] === 'improve-data') return 'لیست بهبود اطلاعات';
    if (params.slug[0] === 'top-comments') {
      if (params.slug[1] === 'comments') return `نظرات استان ${resolveProvinceName}`;
      return 'لیست کامنت های برتر';
    }
    return '';
  };
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title={getTitle()} isNavigation />
      <Box p={{ initial: '24px 24px 40px 40px ', lg: '24px 110px 40px 40px ' }}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          {renderElement()}
        </Grid>
      </Box>
    </Flex>
  );
};

export default Confirmations;
