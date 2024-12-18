import Categories from '@/components/additional-detail/categories/Categories';
import CitiesManagement from '@/components/additional-detail/cities/CitiesManagement';
import FeatureManagement from '@/components/additional-detail/features/FeatureManagement';
import ProvinceManagement from '@/components/additional-detail/province/ProvinceManagement';

export default function AdditionalDetail({ params }: { params: { slug: string[] } }) {
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
          default:
            return <ProvinceManagement />;
        }
      default:
        return null;
    }
  };
  return renderElement();
}
