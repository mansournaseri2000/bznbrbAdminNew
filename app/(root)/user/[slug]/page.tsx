import UserDetailHero from '@/components/user-detail/hero/UserDetailHero';
import Payments from '@/components/user-detail/payments/Payments';
import SavedPlans from '@/components/user-detail/saved-plans/SavedPlans';
import Tickets from '@/components/user-detail/tickets/Tickets';
import UserProfile from '@/components/user-detail/user-profile/UserProfile';
import { Flex } from '@/libs/primitives';

export default function UserDetail({ params }: { params: { slug: 'userProfile' | 'savedPlans' | 'payments' | 'tickets' } }) {
  console.log('params', params.slug);

  const renderElement = (key: 'userProfile' | 'savedPlans' | 'payments' | 'tickets') => {
    switch (key) {
      case 'userProfile':
        return <UserProfile />;
      case 'savedPlans':
        return <SavedPlans />;
      case 'payments':
        return <Payments />;
      case 'tickets':
        return <Tickets />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <Flex width={'100%'} direction={'column'} gap={'4'}>
      <UserDetailHero />
      {renderElement(params.slug)}
    </Flex>
  );
}
