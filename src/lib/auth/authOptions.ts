import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Exclusive",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const resp = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                        method: "POST",
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        }),
                        headers: { "Content-Type": "application/json" }
                    });

                    const data = await resp.json();

                    if (resp.ok && data.user) {
                        return {
                            ...data.user,
                            id: data.user._id,
                            token: data.token
                        };
                    }
                    return null;

                    console.log("✅ API Success Data:", data);

                    return {
                        id: data.user?.email || "user-id",
                        name: data.user?.name,
                        email: data.user?.email,
                        token: data.token
                    };
                } catch (error: any) {
                    console.error("🔥 Authorize Error:", error.message);
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 7 * 24 * 60 * 60,
    },


    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.accessToken = (user as any).token;
                token.name = user.name;
                token.email = user.email;
                const decoded: any = jwtDecode(user.token);
                token.id = decoded.id;
                console.log("Decoded User ID:", token.id);
            }
            return token;
        },
        async session({ session, token }: any) {
            if (token) {
                session.accessToken = token.accessToken as string;
                session.userId = token.id;
                session.user = {
                    name: token.name,
                    email: token.email,
                } as any;
            }
            return session;
        }
    },
    pages: {
        signIn: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
}