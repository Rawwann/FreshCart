import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string
        id?: string;
    }
}

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string
            name: string
            email: string
        }
        accessToken: string
        userId?: string;
    }
    interface User {
        id: string
        name: string
        email: string
        accessToken: string
        token?: string;
        user?: {
            id: string;
        }
    }
}
