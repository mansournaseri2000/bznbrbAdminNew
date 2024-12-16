import React from 'react';

// import Comment from '@/components/confirmations/comment/Comment';
import ImageSent from '@/components/confirmations/image-sent/ImageSent';
import ImproveDataManagement from '@/components/confirmations/improve-data-management/ImproveDataManagement';
import PathGuid from '@/components/confirmations/path-guid/PathGuid';
import TopComments from '@/components/confirmations/top-comments-management/TopComments';
import TopCommentsManagement from '@/components/confirmations/top-comments-management/TopCommentsManagement';



// 

const Confirmations = ({ params }: { params: { slug: string[] } }) => {
  const renderElement = () => {
    switch (params.slug[0]) {
      // case 'comment':
      //   return <Comment />;
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
  return renderElement();
};

export default Confirmations;
