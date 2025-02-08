import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get('token')?.value;
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/plans', request.url).toString());
  }

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login/receiveCode', request.url).toString());
  }

  return response;
};

export const config = {
  matcher: '/:path*',
};
