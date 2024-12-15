'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { getCommentsByProvinceId } from '@/api/confirmations';
import AddComment from '@/components/develop/confirmations/add-comment/AddComment';
import TopCommentItem from '@/components/develop/confirmations/top-comment-item/TopCommentItem';
import { Grid } from '@/libs/primitives';

const TopComments = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data: commentItemData } = useQuery({ queryKey: ['top-comments-item'], queryFn: async () => await getCommentsByProvinceId(Number(params.slug[2])) });
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const params = useParams();
  const numberOfComments = commentItemData?.comments.length || 0;
  const numberOfAddComments = 5 - numberOfComments;
  console.log('params', params.slug[2]);

  console.log('CommentData', commentItemData?.comments.length);
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
