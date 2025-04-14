'use client';

import React from 'react';

import { useParams } from 'next/navigation';

import { Spinner } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { getProvinceImages } from '@/api/additional-detail';
import { getAllPlacesConstants } from '@/api/place';
import { Flex, Grid } from '@/libs/primitives';
import { ToastError } from '@/libs/shared/toast/Toast';
import SimpleWrapper2 from '@/libs/shared/wrapper/SimpleWrapper2';

import ProvinceGallery from './ProvinceGallery';
import ProvinceImage from './ProvinceImage';
import ProvinceVector from './ProvinceVector';

const ImageManagement = () => {
  /*
   *** Variables and constant_________________________________________________________________________________________________________________________________________________________________
   */
  const params = useParams();
  const ProvinceId = Number(params.slug[2]);
  /**
   * services
   * _______________________________________________________________________________
   */
  const {
    data: provinceImagesData,
    isLoading: provinceImagesLoading,
    isFetching: provinceImagesFetching,
    isError: provinceImagesError,
  } = useQuery({ queryKey: ['province-images', ProvinceId], queryFn: async () => await getProvinceImages(ProvinceId) });

  const { data: constantData } = useQuery({
    queryKey: ['constant'],
    queryFn: async () => getAllPlacesConstants(),
  });

  /**
   * Loading
   * _______________________________________________________________________________
   */
  if (provinceImagesLoading || provinceImagesFetching)
    return (
      <Flex width={'100%'} height={'85vh'} align={'center'} justify={'center'}>
        <Spinner style={{ scale: 2 }} />
      </Flex>
    );

  if (!provinceImagesData || provinceImagesError) return ToastError('مشکلی پیش آمده است');

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Grid width={'100%'} gapY={'5'}>
      <Grid width={'100%'} columns={'2'} gapX={'5'}>
        <SimpleWrapper2 hero='وکتور استان' type='changeAble'>
          <ProvinceVector vector={provinceImagesData?.icon} id={provinceImagesData.id} />
        </SimpleWrapper2>
        <SimpleWrapper2 hero='تصویر استان' type='changeAble'>
          <ProvinceImage image={provinceImagesData?.pic} id={provinceImagesData.id} />
        </SimpleWrapper2>
      </Grid>
      <SimpleWrapper2 hero='گالری تصاویر ' type='changeAble'>
        <ProvinceGallery gallery={provinceImagesData?.gallery} ProvinceId={ProvinceId} constantData={constantData?.provinces ? constantData.provinces : []} />
      </SimpleWrapper2>
    </Grid>
  );
};

export default ImageManagement;
