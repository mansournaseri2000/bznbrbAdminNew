import Categories from '@/components/additional-detail/categories/Categories';
import FeatureManagement from '@/components/additional-detail/features/FeatureManagement';
import Tags from '@/components/additional-detail/tags/Tags';

export default function AdditionalDetail({ params }: { params: { slug: 'categories' | 'tags' | 'features' } }) {
  const renderElement = (key: 'categories' | 'tags' | 'features') => {
    switch (key) {
      case 'categories':
        return <Categories />;
      case 'tags':
        return <Tags />;
      case 'features':
        return <FeatureManagement />;
      default:
        return null;
    }
  };
  return renderElement(params.slug);
}
