'use client';

import React, { useState } from 'react';
import 'react-responsive-pagination/themes/classic.css';

import dynamic from 'next/dynamic';

import { useQuery } from '@tanstack/react-query';

import { GetAllComments } from '@/api/comment';
import { Flex } from '@/libs/primitives';
import CommentCard from '@/libs/shared/shared-components/comment/CommentCard';

const ResponsivePagination = dynamic(() => import('react-responsive-pagination').then(module => module.default), { ssr: false });

export default function Comment({ searchParams }: { params: { slug: string }; searchParams: { page: string } }) {
  const [page, setPage] = useState(searchParams.page ? Number(searchParams.page) : 1);

  const { data: commentData } = useQuery({ queryKey: ['all-comments', page], queryFn: async () => GetAllComments(page) });

  return (
    <Flex width={'100%'} direction={'column'} p={'5'} gap={'4'}>
      <Flex justify={'end'}>
        <Flex width={'240px'} justify={'center'} align={'center'} p={'4'} style={{ border: '1px solid #D4D4D4', borderRadius: 12 }}>
          مرتب سازی
        </Flex>
      </Flex>
      {commentData?.allComments.map((item, index) => <CommentCard key={index} content={item.content} createdAt={item.createdAt} users={item.users} />)}

      <ResponsivePagination
        current={page}
        total={commentData?.totalPages as number}
        onPageChange={p => {
          setPage(p);
        }}
      />
    </Flex>
  );
}
