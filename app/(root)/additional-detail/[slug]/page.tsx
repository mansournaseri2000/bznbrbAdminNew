import Categories from '@/components/additional-detail/categories/Categories';
import FeatureManagement from '@/components/additional-detail/features/FeatureManagement';

export default function AdditionalDetail({ params }: { params: { slug: 'categories' | 'features' } }) {
  const renderElement = (key: 'categories' | 'features') => {
    switch (key) {
      case 'categories':
        return <Categories />;
      case 'features':
        return <FeatureManagement />;
      default:
        return null;
    }
  };
  return renderElement(params.slug);
}
