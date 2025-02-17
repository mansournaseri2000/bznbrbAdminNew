'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getCommentsByProvinceId } from '@/api/confirmations';
import AddComment from '@/components/develop/confirmations/add-comment/AddComment';
import TopCommentItem from '@/components/develop/confirmations/top-comment-item/TopCommentItem';
import { Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

const TopComments = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['top-comments-item'], queryFn: async () => await getCommentsByProvinceId(Number(params.slug[2])) });

  console.log('COMMENT DATA', data);
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const params = useParams();
  const numberOfComments = data?.comments.length || 0;
  const numberOfAddComments = 5 - numberOfComments;

  /**
   * Loading and Error
   * _______________________________________________________________________________
   */
  if (isLoading || isFetching)
    return (
      <Flex width={'100%'} height={'90vh'} justify={'center'} align={'center'}>
        <Spinner style={{ scale: 2.5 }} />
      </Flex>
    );

  if (!data || isError) return ToastError('مشکلی پیش آمده . لطفا دوباره تلاش نمایید');
  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Grid width={'100%'} gapY={'5'}>
      {data?.comments.map((item, index) => (
        <>{item ? <TopCommentItem key={item.commentId} {...item} data={data.comments[index]} /> : <AddComment key={index} />}</>
      ))}{' '}
      {Array.from({ length: numberOfAddComments }).map((_, index) => (
        <AddComment key={`add-comment-${index}`} />
      ))}
    </Grid>
  );
};

export default TopComments;
