import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  // const token = request.cookies.get('token')?.value;
  console.log(request);
  const response = NextResponse.next();
  // const { pathname } = request.nextUrl;

  // if (pathname === '/') {
  //   return NextResponse.redirect(new URL('/plans', request.url).toString());
  // }

  // if (!token) {
  //   return NextResponse.redirect(new URL('/auth/login/receiveCode', request.url).toString());
  // }

  const referer = request.headers.get('referer') || 'No Referer';
  console.log('Referer:', referer); // Logs in Vercel / Server logs
  console.log("test monitoring______________________________________________________________________________________");
  

  response.headers.set('X-Captured-Referer', referer);
  return response;
};

export const config = {
  matcher: '/:path*',
};
