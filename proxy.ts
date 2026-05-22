import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  try {
    const session = req.cookies.get("token")?.value;

    const { pathname } = req.nextUrl;

    const isAuthRoute = pathname.startsWith("/auth");
    const isAdminRoute = pathname.startsWith("/admin");
    const isTeacherRoute = pathname.startsWith("/teacher");
    const isAppRoute = pathname.startsWith("/app");

    if (isAdminRoute && session !== "admin_connecte") {
      return NextResponse.redirect(new URL("/auth", req.url));
    }

    if (session && isAuthRoute) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (!session && (isTeacherRoute || isAppRoute)) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.log("Erreur middleware:", error);

    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

export const config = {
  matcher: ["/auth/:path*", "/teacher/:path*", "/admin/:path*", "/app/:path*"],
};
