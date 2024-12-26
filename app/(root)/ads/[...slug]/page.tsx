import AdsContainer from '@/components/ads/AdsContainer';
import CitiesListContainer from '@/components/ads/CitiesListContainer';
import ProvinceListContainer from '@/components/ads/ProvinceListContainer';
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
  return renderElement();
}
