import React from 'react';

import { useParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getAdsHolders } from '@/api/advertizement';
import { Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';

import AdsDetailCard from '../AdsDetailCard';

const AdsListRoot = () => {
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const params = useParams();
  const pageType = params.slug[0];
  /**
   * Services
   * _______________________________________________________________________________
   */

  const { data, isLoading, isError, isFetching } = useQuery({ queryKey: ['ads-page-type'], queryFn: async () => await getAdsHolders(pageType) });
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
  return <Grid gapY={'5'}>{data.map((item, index, array) => item && <AdsDetailCard key={index} data={array.length - 1 === index ? null : (item as any)} />)}</Grid>;
};

export default AdsListRoot;
