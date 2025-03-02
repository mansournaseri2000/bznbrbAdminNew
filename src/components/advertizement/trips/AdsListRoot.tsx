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
  const handleId = Boolean(params.slug[3]) === true ? Number(params.slug[7]) : Number(params.slug[2]);
  const handleType = Boolean(params.slug[3]) === true ? 'children' : 'parent';
  console.log('🚀 handleId:', handleId, '🚀 handleType:', handleType);

  /**
   * services
   * _______________________________________________________________________________
   */
  const { data, isLoading, isError, isFetching } = useQuery({ queryKey: ['ads-page-type'], queryFn: async () => await getAdsHolders(pageType, handleId, handleType) });
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
  return <Grid gapY={'5'}>{data.map((item, index) => item && <AdsDetailCard key={index} data={item as any} />)}</Grid>;
};

export default AdsListRoot;
