'use client';

import React, { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getAllPicUserUploads } from '@/api/confirmations';
import ImageSentCard from '@/components/develop/confirmations/img-sent-card/ImageSentCard';
import { Flex, Grid, Heading } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { ToastError } from '@/libs/shared/toast/Toast';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { colorPalette } from '@/theme';

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

  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['user-image-uploads'], queryFn: async () => await getAllPicUserUploads(page) });
  console.log('UserImageUploads', data);
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
      {data.filteredPics.length === 0 ? (
        <Flex width={'100%'} mt={'4'}>
          <Heading as='h4' size={'4'} style={{ color: colorPalette.gray[11] }}>
            در حال حاضر تصویری برای نمایش وجود ندارد.
          </Heading>
        </Flex>
      ) : (
        data?.filteredPics.map((item, index) => <ImageSentCard key={item.id} {...item} index={index} />)
      )}

      {data.filteredPics.length !== 0 && (
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <CustomPagination
            current={page}
            total={data?.totalPages}
            onPageChange={p => {
              setPage(p);
              updateUrlWithPageNumber(p);
              queryClient.invalidateQueries({ queryKey: ['user-image-uploads'] });
            }}
          />
          <ItemsPerPage data={data?.filteredPics} currentPage={data?.currentPage} totalCount={data?.totalCount} />
        </Flex>
      )}
    </Grid>
  );
};

export default ImageSent;
