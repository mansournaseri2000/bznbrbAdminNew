'use client';

import { useQuery } from '@tanstack/react-query';

import { getAllPlacesConstants } from '@/api/place';
import Categories from '@/components/additional-detail/categories/Categories';
import CitiesManagement from '@/components/additional-detail/cities/CitiesManagement';
import FeatureManagement from '@/components/additional-detail/features/FeatureManagement';
import DataManagement from '@/components/additional-detail/province/data-management/DataManagement';
import ImageManagement from '@/components/additional-detail/province/image-management/ImageManagement';
import ProvinceManagement from '@/components/additional-detail/province/ProvinceManagement';
import Header from '@/layout/Header';
import { useResolveIdsToNames } from '@/libs/hooks/useResolveIdsToName';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function AdditionalDetail({ params }: { params: { slug: string[] } }) {
  /**
   * services
   * _______________________________________________________________________________
   */
  const { data } = useQuery({ queryKey: ['constant'], queryFn: async () => await getAllPlacesConstants() });
  /**
   * Const and Variables
   * _______________________________________________________________________________
   */
  const resolveProvinceName = useResolveIdsToNames(Number(params.slug[2]), data?.provinces ?? []);
  /**
   * Hooks and Methods
   * _______________________________________________________________________________
   */
  const renderElement = () => {
    switch (params.slug[0]) {
      case 'categories':
        return <Categories />;
      case 'features':
        return <FeatureManagement />;
      case 'province':
        switch (params.slug[1]) {
          case 'cities':
            return <CitiesManagement />;
          case 'data-management':
            return <DataManagement />;
          case 'image-management':
            return <ImageManagement />;
          default:
            return <ProvinceManagement />;
        }
      default:
        return null;
    }
  };

  const getTitle = () => {
    if (params.slug[0] === 'categories') {
      return 'لیست دسته بندی ها';
    }
    if (params.slug[0] === 'features') {
      return 'لیست ویژگی ها';
    }
    if (params.slug[0] === 'province') {
      if (params.slug[1] === 'cities') return `لیست شهرستان ها - استان ${resolveProvinceName}`;
      if (params.slug[1] === 'data-management') return `اطلاعات استان ${resolveProvinceName}`;
      if (params.slug[1] === 'image-management') return `تصاویر استان ${resolveProvinceName}`;
      return 'لیست استان ها';
    }
    return '';
  };

  /**
   * JSX
   * _______________________________________________________________________________
   */
  return (
    <Flex direction={'column'}>
      <Header title={getTitle()} isNavigation />
      <Box p={'24px 110px 40px 40px '}>
        <Grid width={'100%'} maxWidth={'1920px'} mx={'auto'}>
          {renderElement()}
        </Grid>
      </Box>
    </Flex>
  );
}
