import dynamic from 'next/dynamic';

const AuthRoot = dynamic(() => import('@/layout/AuthRoot').then(module => module.default), { ssr: false });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthRoot>{children}</AuthRoot>;
}
