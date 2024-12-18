'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getCommentsByProvinceId } from '@/api/confirmations';
import AddComment from '@/components/develop/confirmations/add-comment/AddComment';
import TopCommentItem from '@/components/develop/confirmations/top-comment-item/TopCommentItem';
import { Grid } from '@/libs/primitives';

const TopComments = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const {
    data: commentItemData,
    isLoading: commentLoading,
    isFetching: commentFetching,
  } = useQuery({ queryKey: ['top-comments-item'], queryFn: async () => await getCommentsByProvinceId(Number(params.slug[2])) });
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const params = useParams();
  const numberOfComments = commentItemData?.comments.length || 0;
  const numberOfAddComments = 5 - numberOfComments;
  console.log('params', params.slug[2]);

  if (commentLoading || commentFetching || !commentItemData) return <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '20px' }} />;
  return (
    <Grid width={'100%'} gapY={'5'}>
      {commentItemData?.comments.map((item, index) => (
        <>{item.commentName && item.commentContent ? <TopCommentItem key={index} {...item} /> : <AddComment key={index} />}</>
      ))}{' '}
      {Array.from({ length: numberOfAddComments }).map((_, index) => (
        <AddComment key={`add-comment-${index}`} />
      ))}
    </Grid>
  );
};

export default TopComments;
