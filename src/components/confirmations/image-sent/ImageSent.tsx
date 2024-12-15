'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { getAllPicUserUploads } from '@/api/confirmations';
import ImageSentCard from '@/components/develop/confirmations/img-sent-card/ImageSentCard';
import { Flex, Grid } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { updateUrlWithPageNumber } from '@/libs/utils';

const ImageSent = () => {
  /*
   *** Services_________________________________________________________________________________________________________________________________________________________________
   */

  const { data: userImageUploads } = useQuery({ queryKey: ['user-image-uploads'], queryFn: async () => await getAllPicUserUploads() });
  console.log('UserImageUploads', userImageUploads);
  return (
    <Grid width={'100%'} gapY={'5'} p={'5'}>
      {userImageUploads?.filteredPics.map((item, index) => (
        <ImageSentCard key={item.id} {...item} index={index} />
      ))}
      {userImageUploads?.filteredPics && (
        <Flex width={'100%'} align={'center'} justify={'between'}>
          <CustomPagination
            current={1}
            total={userImageUploads?.allPicsCount}
            onPageChange={p => {
              updateUrlWithPageNumber(p);
            }}
          />
          <ItemsPerPage data={userImageUploads?.filteredPics} currentPage={userImageUploads?.currentPage} totalCount={userImageUploads?.allPicsCount} />
        </Flex>
      )}
    </Grid>
  );
};

export default ImageSent;
