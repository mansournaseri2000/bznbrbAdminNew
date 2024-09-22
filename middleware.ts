import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const token = request.cookies.get('token')?.value;

  const response = NextResponse.next();

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login/receiveCode', request.url).toString());
  }

  return response;
};

export const config = {
  matcher: ['/'],
};
