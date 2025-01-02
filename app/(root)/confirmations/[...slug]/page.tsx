import React from 'react';

import Comments from '@/components/confirmations/comments/Comments';
// import Comment from '@/components/confirmations/comment/Comment';
import ImageSent from '@/components/confirmations/image-sent/ImageSent';
import ImproveDataManagement from '@/components/confirmations/improve-data-management/ImproveDataManagement';
import PathGuid from '@/components/confirmations/path-guid/PathGuid';
import TopComments from '@/components/confirmations/top-comments-management/TopComments';
import TopCommentsManagement from '@/components/confirmations/top-comments-management/TopCommentsManagement';
import Header from '@/layout/Header';
import { Box, Flex } from '@/libs/primitives';

//

const Confirmations = ({ params }: { params: { slug: string[] } }) => {
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
      if (params.slug[1] === 'comments') return 'نظرات استان';
      return 'لیست کامنت های برتر';
    }
    return '';
  };

  return (
    <Flex direction={'column'}>
      <Header title={getTitle()} isNavigation />
      <Box p={'24px 110px 40px 40px '}>{renderElement()}</Box>
    </Flex>
  );
};

export default Confirmations;
