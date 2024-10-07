import dynamic from 'next/dynamic';

const ReceiveCode = dynamic(() => import('@/components/auth/login/ReceiveCode'));
const VerificationCode = dynamic(() => import('@/components/auth/login/VerificationCode'));

const LoginPage = ({ params }: { params: { slug: 'receiveCode' | 'verificationCode' } }) => {
  /**
   * hooks and methods
   * _______________________________________________________________________________
   */
  const renderElement = (key: 'receiveCode' | 'verificationCode') => {
    switch (key) {
      case 'receiveCode':
        return <ReceiveCode />;
      case 'verificationCode':
        return <VerificationCode />;
      default:
        return <ReceiveCode />;
    }
  };

  /**
   * template
   * _______________________________________________________________________________
   */
  return renderElement(params.slug);
};

export default LoginPage;
