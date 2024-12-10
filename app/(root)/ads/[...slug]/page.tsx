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
  const renderElement = () => {
    switch (params.slug[0]) {
      case 'main':
        return <AdsContainer data={mainAdsOptions} />;
      case 'trip-planner':
        return <AdsContainer data={tripPlannerOptions} />;
      case 'tour-planner':
        return <AdsContainer data={tourPlanner} />;
      case 'trip-plan':
        return <AdsContainer data={tripPlanOptions} />;
      case 'tour-list':
        return <AdsContainer data={tourListOptions} />;
      case 'article-list':
        return <AdsContainer data={articleListOptions} />;
      case 'article-ad':
        return <AdsContainer data={articleAdOptions} />;
      case 'map':
        return <AdsContainer data={mapOptions} />;
      case 'point-info':
        return <AdsContainer data={pointInfoOptions} />;
      case 'province-list':
        switch (params.slug[1]) {
          case 'province-ad':
            return <AdsContainer data={provinceAdOptions} />;
          case 'cities':
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
