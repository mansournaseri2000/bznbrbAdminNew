import Categories from '@/components/additional-detail/categories/Categories';

export default function AdditionalDetail({ params }: { params: { slug: 'categories' | 'tags' } }) {
  const renderElement = (key: 'categories' | 'tags') => {
    switch (key) {
      case 'categories':
        return <Categories />;
      case 'tags':
        return;
      default:
        return null;
    }
  };
  return renderElement(params.slug);
}
