import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard',
  '/admin'
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();

  // If the route is protected and no user is logged in, redirect to sign in
  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  const { pathname } = req.nextUrl;

  // If the user is logged in and trying to access sign-in or sign-up, redirect based on role
  if (userId && (pathname === '/sign-in' || pathname === '/sign-up')) {
    if (sessionClaims?.role === 'admin') {
      req.nextUrl.pathname = '/admin';
    } else {
      req.nextUrl.pathname = '/dashboard';
    }
    return NextResponse.redirect(req.nextUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};