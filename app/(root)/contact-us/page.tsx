'use client';

import React, { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getContactUsItems } from '@/api/contact-us/contact-us';
import ContactUsCard from '@/components/contact-us/contact-us-card/ContactUsCard';
import Header from '@/layout/Header';
import { Box, Flex, Grid, Heading } from '@/libs/primitives';
import CustomPagination from '@/libs/shared/custom-pagination/CustomPagination';
import ItemsPerPage from '@/libs/shared/ItemsPerPage';
import { ToastError } from '@/libs/shared/toast/Toast';
import { updateUrlWithPageNumber } from '@/libs/utils';
import { colorPalette } from '@/theme';

export default function Support() {
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
  const { data, isLoading, isFetching, isError } = useQuery({ queryKey: ['contact-us', page], queryFn: async () => await getContactUsItems(10, page) });

  console.log(data, 'DATA');
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

  /*
   *** JSX_________________________________________________________________________________________________________________________________________________________________
   */

  return (
    <Flex direction={'column'}>
      <Header title='پشتیبانی' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <Grid width={'100%'} gapY={'5'}>
            {data.allContactRequests.length === 0 ? (
              <Flex width={'100%'} mt={'4'}>
                <Heading as='h4' size={'4'} style={{ color: colorPalette.gray[11] }}>
                  در حال حاضر پیامی برای نمایش وجود ندارد.
                </Heading>
              </Flex>
            ) : (
              data.allContactRequests.map((item, index) => <ContactUsCard key={index} index={index} {...item} data={item} />)
            )}

            {data.allContactRequests.length !== 0 && (
              <Flex width={'100%'} align={'center'} justify={'between'}>
                <CustomPagination
                  current={page}
                  total={data?.totalPages}
                  onPageChange={p => {
                    setPage(p);
                    updateUrlWithPageNumber(p);
                    queryClient.invalidateQueries({ queryKey: ['contact-us'] });
                  }}
                />
                <ItemsPerPage data={data?.allContactRequests} currentPage={data?.currentPage} totalCount={data?.totalCount} />
              </Flex>
            )}
          </Grid>
        </Grid>
      </Box>
    </Flex>
  );
}
