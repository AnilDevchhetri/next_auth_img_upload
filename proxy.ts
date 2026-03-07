import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

//how proxy work
//first get request ->
//get path (geting pate  in pathname like /api/auth/session)
export async function proxy(request: NextRequest) {
  //return NextResponse.redirect(new URL("/home", request.url));
  // console.log(request.nextUrl);
  const { pathname } = request.nextUrl;
  const publicRoutes = ["/login", "/register", "/api/auth"];

  if (publicRoutes.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  } else {
    const token = await getToken({
      req: request,
      secret: process.env.NEXT_AUTH_SECRET,
    });
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      // console.log(loginUrl);
      loginUrl.searchParams.set("callbackUrl", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
};
