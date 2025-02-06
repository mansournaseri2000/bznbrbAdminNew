'use client';

import React, { useState } from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getPlaceImproveContent } from '@/api/data-management';
import DataCard from '@/components/develop/shared/data-card/DataCard';
import { Flex, Text } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { colorPalette } from '@/theme';
import { typoVariant } from '@/theme/typo-variants';

type Props = {
  id: number;
};

const ImproveContentPoint = ({ id }: Props) => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */
  const [page, setPage] = useState<number>(1);
  /**
   * services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isFetching } = useQuery({ queryKey: ['place-user-uploads', id, page], queryFn: async () => getPlaceImproveContent(id, page, 6) });

  if (isLoading || isFetching) return <Spinner style={{ margin: '50px auto' }} />;

  return (
    <>
      {data?.PlaceImproveContent?.length === 0 ? (
        <Text {...typoVariant.body1} style={{ color: colorPalette.gray[11] }}>
          در حال حاضر موردی ثبت نشده است
        </Text>
      ) : (
        <Flex direction={'column'} gap={'5'}>
          {data?.PlaceImproveContent?.map((item, index) => (
            <DataCard key={index} {...(item as any)} />
          ))}
          {data?.PlaceImproveContent && (
            <Flex width={'100%'} align={'center'} justify={'between'} px={'5'}>
              <CustomPagination current={page} total={data?.totalPages as number} maxWidth={24} onPageChange={p => setPage(p)} />
              <ItemsPerPage data={data.PlaceImproveContent} currentPage={data?.currentPage} totalCount={data?.totalCount} />
            </Flex>
          )}
        </Flex>
      )}
    </>
  );
};

export default ImproveContentPoint;
