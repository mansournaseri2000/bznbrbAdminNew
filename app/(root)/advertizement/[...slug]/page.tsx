import AdsContainer from '@/components/advertizement/AdsContainer';
import CitiesListContainer from '@/components/advertizement/CitiesListContainer';
import ProvinceListContainer from '@/components/advertizement/ProvinceListContainer';
import {
  articleAdOptions,
  articleListOptions,
  cityAdOptions,
  mainAdsOptions,
  mapOptions,
  pointInfoOptions,
  provinceAdOptions,
  tourListOptions,
  tourPlanner,
  tripPlannerOptions,
  tripPlanOptions,
} from '@/constants/ads';
import Header from '@/layout/Header';
import { Box, Flex, Grid } from '@/libs/primitives';

export default function SubAds({ params }: { params: { slug: string[] } }) {
  console.log('PARAMS', params.slug[0]);
  const renderElement = () => {
    switch (params.slug[0]) {
      case 'main_page':
        return <AdsContainer data={mainAdsOptions} />;
      case 'planner':
        return <AdsContainer data={tripPlannerOptions} />;
      case 'planner_trips':
        return <AdsContainer data={tourPlanner} />;
      case 'tourmaker':
        return <AdsContainer data={tripPlanOptions} />;
      case 'tours':
        return <AdsContainer data={tourListOptions} />;
      case 'article':
        return <AdsContainer data={articleListOptions} />;
      case 'articlelist':
        return <AdsContainer data={articleAdOptions} />;
      case 'maps':
        return <AdsContainer data={mapOptions} />;
      case 'place':
        return <AdsContainer data={pointInfoOptions} />;
      case 'province':
        switch (params.slug[1]) {
          case 'province-ad':
            return <AdsContainer data={provinceAdOptions} />;
          case 'city':
            switch (params.slug[2]) {
              case 'cities-ad':
                return <AdsContainer data={cityAdOptions} />;
              default:
                return <CitiesListContainer />;
            }
          default:
            return <ProvinceListContainer />;
        }
    }
  };

  const getTitle = () => {
    if (params.slug[0] === 'main_page') return 'تبلیغات صفحه اصلی';
    if (params.slug[0] === 'planner') return 'تبلیغات برنامه ساز';
    if (params.slug[0] === 'planner_trips') return 'تبلیغات تور ساز';
    if (params.slug[0] === 'tourmaker') return 'تبلیغات برنامه سفر';
    if (params.slug[0] === 'tours') return 'تبلیغات لیست تورها';
    if (params.slug[0] === 'article') return 'تبلیغات لیست مقالات';
    if (params.slug[0] === 'articlelist') return 'تبلیغات مقالات';
    if (params.slug[0] === 'maps') return 'تبلیغات نقشه';
    if (params.slug[0] === 'place') return 'تبلیغات نقطه';
    if (params.slug[0] === 'province') {
      if (params.slug[1] === 'province-ad') return 'تبلیغات استان ها';
      if (params.slug[1] === 'city') {
        if (params.slug[2] === 'cities-ad') {
          return 'تبلیغات شهرستان ها';
        }
        return 'لیست شهرستان ها';
      }
      return 'لیست استان ها';
    }
    return '';
  };

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
