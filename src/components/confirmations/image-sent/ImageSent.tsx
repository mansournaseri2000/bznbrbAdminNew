'use client';

import React, { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getAllPicUserUploads } from '@/api/confirmations';
import ImageSentCard from '@/components/develop/confirmations/img-sent-card/ImageSentCard';
import { Flex, Grid, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';

const ImageSent = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 1);
  const queryClient = useQueryClient();
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const { data: userImageUploadsData, isLoading, isFetching } = useQuery({ queryKey: ['user-image-uploads'], queryFn: async () => await getAllPicUserUploads(page) });
  console.log('UserImageUploads', userImageUploadsData);
  /*
   *** Loading_________________________________________________________________________________________________________________________________________________________________
   */
  if (isLoading || isFetching) return <Spinner style={{ marginInline: 'auto', scale: 2, marginBlock: '100px' }} />;

  if (!userImageUploadsData) return <Text>دیتایی موجود نیست</Text>;
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      {userImageUploadsData?.filteredPics.map((item, index) => (
        <ImageSentCard key={item.id} {...item} index={index} />
      ))}

      <Flex width={'100%'} align={'center'} justify={'between'}>
        <CustomPagination
          current={page}
          total={userImageUploadsData?.totalPages}
          onPageChange={p => {
            setPage(p);
            updateUrlWithPageNumber(p);
            queryClient.invalidateQueries({ queryKey: ['user-image-uploads'] });
          }}
        />
        <ItemsPerPage data={userImageUploadsData?.filteredPics} currentPage={userImageUploadsData?.currentPage} totalCount={userImageUploadsData?.totalCount} />
      </Flex>
    </Grid>
  );
};

export default ImageSent;
