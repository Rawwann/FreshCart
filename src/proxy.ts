
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const PROTECTED_ROUTES = ["/cart", "/checkout", "/orders/allorders", "/profile"];
const AUTH_ROUTES = ["/login", "/register"];

export default async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === "production",
    });

    if (!token && PROTECTED_ROUTES.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (token && AUTH_ROUTES.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/cart/:path*",
        "/checkout/:path*",
        "/orders/:path*",
        "/profile/:path*",
    ],
};