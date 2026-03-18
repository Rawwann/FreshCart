"use client";

import { signOut } from "next-auth/react";

export function useSignOut() {
    const handleSignOut = async () => {
        localStorage.clear();
        sessionStorage.clear();
        const data = await signOut({ redirect: false, callbackUrl: "/login" });
        window.location.href = data.url;
    };

    return { handleSignOut };
}