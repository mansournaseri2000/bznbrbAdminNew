import Categories from '@/components/additional-detail/categories/Categories';
import Tags from '@/components/additional-detail/tags/Tags';

export default function AdditionalDetail({ params }: { params: { slug: 'categories' | 'tags' } }) {
  const renderElement = (key: 'categories' | 'tags') => {
    switch (key) {
      case 'categories':
        return <Categories />;
      case 'tags':
        return <Tags />;
      default:
        return null;
    }
  };
  return renderElement(params.slug);
}
