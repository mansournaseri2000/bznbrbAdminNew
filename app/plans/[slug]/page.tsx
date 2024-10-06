import PlaneForm from '@/components/plans/create-edit-plane/PlaneForm';
import PlaneDetail from '@/components/plans/plane-detail/PlaneDetail';

export default function PlansDetail({
  params,
}: {
  params: { slug: 'create-plane' | 'edit-plane' | 'plane-detail' };
}) {
  const renderElement = (key: 'create-plane' | 'edit-plane' | 'plane-detail') => {
    switch (key) {
      case 'create-plane':
        return <PlaneForm />;
      case 'edit-plane':
        return <PlaneForm />;
      case 'plane-detail':
        return <PlaneDetail />;
      default:
        return null;
    }
  };
  return renderElement(params.slug);
}
