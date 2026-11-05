import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // If Supabase keys are missing, do not crash the website
  if (!url || !key) {
    return response;
  }

  try {
    const supabase = createServerClient(url, key, {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: any }>) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        }
      }
    });

    const { data: { user } } = await supabase.auth.getUser();

    // Protect admin routes only
    if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login') && !user) {
      const login = request.nextUrl.clone();
      login.pathname = '/admin/login';
      return NextResponse.redirect(login);
    }

    if (request.nextUrl.pathname === '/admin/login' && user) {
      const dashboard = request.nextUrl.clone();
      dashboard.pathname = '/admin';
      return NextResponse.redirect(dashboard);
    }
  } catch (error) {
    // If any auth error happens, allow public pages to load without 500 error
    console.error('Middleware auth check error:', error);
  }

  return response;
}

// Only run middleware on /admin routes so home page NEVER breaks!
export const config = {
  matcher: ['/admin/:path*']
};
