'use client';

import React from 'react';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAdsHolders } from '@/api/ads';
import AdCard from '@/components/advertizement/AdCard';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';
import FormSubmitWrapper from '@/libs/shared/FormSubmitWrapper';
import { ToastError } from '@/libs/shared/toast/Toast';

export default function AdvertizementPageTypes({ params }: { params: { slug: string } }) {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const pageType = params.slug;

  /**
   * Services
   * _______________________________________________________________________________
   */

  const { data, isLoading, isError, isFetching } = useQuery({ queryKey: ['ads-page-type'], queryFn: async () => await getAdsHolders(pageType) });

  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */

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
    <Flex direction={'column'}>
      <Header title='' isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          <Grid gapY={'5'}>
            {data.map((item, index) => item && <AdCard key={index} {...(item as any)} data={data} />)}

            <FormSubmitWrapper buttonsPosition='start' submitButtonText='ثبت' closeButtonText='لغو' />
          </Grid>
        </Grid>
      </Box>
    </Flex>
  );
}
