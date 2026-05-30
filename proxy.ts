import { NextRequest, NextResponse } from "next/server";

<<<<<<< HEAD
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
=======
interface IUser {
  name: string;
  avatar: string;
  email: string;
  role: "teacher" | "student";
}

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const token_o = req.cookies.get("token_o")?.value;
  const uc = req.cookies.get("user")?.value;

  const { pathname } = req.nextUrl;

  const isAuthRoute = pathname.startsWith("/auth");
  const isOnboardingRoute = pathname.startsWith("/onboarding");
  const isUserRoute = pathname.startsWith("/user");
  const isTeacherRoute = pathname.startsWith("/admin");
  const isRoomPage = pathname.startsWith("/rooms");

  try {
    if (isOnboardingRoute && !token_o) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    const isProtectedRoute =
      isUserRoute || isTeacherRoute || isRoomPage;

    if (isProtectedRoute && (!token || !uc)) {
      return NextResponse.redirect(
        new URL(
          isTeacherRoute ? "/auth/admin" : "/auth/login",
          req.url,
        ),
      );
    }

    if (token && uc) {
      const user: IUser = JSON.parse(uc);

      if (isAuthRoute) {
        return NextResponse.redirect(
          new URL(
            user.role === "student" ? "/user" : "/admin",
            req.url,
          ),
        );
      }

      if (isTeacherRoute && user.role !== "teacher") {
        return NextResponse.redirect(new URL("/user", req.url));
      }

      if (isUserRoute && user.role !== "student") {
        return NextResponse.redirect(new URL("/admin", req.url));
      }
    }
  } catch (e) {
    console.log("error in proxy", e);

    const redirect = NextResponse.redirect(
      new URL("/auth/login", req.url),
    );

    redirect.cookies.delete("token");
    redirect.cookies.delete("token_o");
    redirect.cookies.delete("user");

    return redirect;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/auth/:path*",
    "/onboarding/:path*",
    "/rooms/:path*",
    "/user/:path*",
    "/admin/:path*",
  ],
};
>>>>>>> 7f14cc3b6acbbdf51ffc200d3d8d27084e350e05
