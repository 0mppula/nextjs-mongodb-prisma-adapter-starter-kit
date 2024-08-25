import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	const sensitiveRoutes = ['/welcome'];
	const publicRoutes = ['/'];
	const pathname = request.nextUrl.pathname;

	const token = await getToken({ req: request });
	const isAuth = !!token;

	// Dont allow access to public routes if user is authenticated
	if (isAuth && publicRoutes.some((route) => route === pathname)) {
		return NextResponse.redirect(new URL('/welcome', request.url));
	}

	// Redirect to login if user is not authenticated
	if (!isAuth && sensitiveRoutes.some((route) => pathname.startsWith(route))) {
		return NextResponse.redirect(new URL('/', request.url));
	}
}

export const config = {
	matcher: ['/', '/welcome'],
};
