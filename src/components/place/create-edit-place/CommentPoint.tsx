import React, { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getPlaceComments } from '@/api/data-management';
import CommentCard from '@/components/develop/data-management/comment-card/CommentCard';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  id: number;
};

const CommentPoint = ({ id }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [page, setPage] = useState<number>(1);
  /**
   * services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching } = useQuery({ queryKey: ['place-user-uploads', id, page], queryFn: async () => getPlaceComments(id, page, 6) });

  if (isLoading || isFetching) return <Spinner style={{ margin: '50px auto' }} />;

  return (
    <>
      {data?.PlaceComments?.length === 0 ? (
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
          در حال حاضر برای این نقطه نظری ثبت نشده است
        </Text>
      ) : (
        <Flex direction={'column'} gap={'5'}>
          {data?.PlaceComments?.map((item, index) => (
            <CommentCard key={index} {...item} />
          ))}

          {data?.PlaceComments && (
            <Flex width={'100%'} align={'center'} justify={'between'} px={'5'}>
              <CustomPagination current={page} total={data?.totalPages as number} maxWidth={24} onPageChange={p => setPage(p)} />
              <ItemsPerPage data={data.PlaceComments} currentPage={data?.currentPage} totalCount={data?.totalCount} />
            </Flex>
          )}
        </Flex>
      )}
    </>
  );
};

export default CommentPoint;
