'use client';

import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getPlaceUserUploads } from '@/api/data-management';
import ImageCard from '@/components/develop/data-management/image-card/ImageCard';
import { Flex, Grid, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  id: number;
};

const ImageSentPoint = ({ id }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [page, setPage] = useState<number>(1);

  /**
   * services
   * _______________________________________________________________________________
   */
  const { data } = useQuery({ queryKey: ['place-user-uploads', id, page], queryFn: async () => getPlaceUserUploads(id, page, 6) });

  return (
    <>
      {data?.filteredPics?.length === 0 ? (
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
          در حال حاضر تصویری آپلود نشده است
        </Text>
      ) : (
        <Flex direction={'column'} gap={'5'}>
          <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap={'5'}>
            {data?.filteredPics?.map((item, index) => (
              <ImageCard key={index} {...item} />
            ))}
          </Grid>
          {data?.filteredPics && (
            <Flex width={'100%'} align={'center'} justify={'between'} px={'5'}>
              <CustomPagination current={page} total={data?.totalPages as number} maxWidth={24} onPageChange={p => setPage(p)} />
              <ItemsPerPage data={data.filteredPics} currentPage={data?.currentPage} totalCount={data?.totalCount} />
            </Flex>
          )}
        </Flex>
      )}
    </>
  );
};

export default ImageSentPoint;
