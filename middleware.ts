import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow public access to admin login
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Protect admin routes (except login)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const sessionToken = request.cookies.get('admin-session')?.value;
    
    if (!sessionToken) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};



