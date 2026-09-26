import { type NextRequest, NextResponse } from 'next/server';

import { locales } from './lib/constants';
import { getServerLocale } from './lib/services';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== '/') return;

  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return;

  const currentLocale = await getServerLocale();
  request.nextUrl.pathname = `/${currentLocale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
