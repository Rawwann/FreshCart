"use server";

import { LoginPayloadType } from "@/schema/login.schema";
import { RegisterPayloadType } from "@/schema/register.schema";
import { cookies } from "next/headers";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1/auth";

export async function loginHandler(formValues: LoginPayloadType) {
    try {
        const resp = await fetch(`${BASE_URL}/signin`, {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await resp.json();

        if (!resp.ok) {
            return { success: false, message: data.message };
        }

        const cookie = await cookies();
        cookie.set("token", data.token, {
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: true,
            // secure: {} 
        });

        return { success: true };

    } catch (error) {
        console.error("Login error:", error);
        return { success: false, message: "An unexpected error occurred" };
    }
}

export async function registerHandler(formValues: RegisterPayloadType) {
    try {
        const resp = await fetch(`${BASE_URL}/signup`, {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await resp.json();

        if (!resp.ok) {
            return {
                success: false,
                message: data.message || "invalid data"
            };
        }

        return { success: true, message: "success" };

    } catch (error) {
        console.error("Registration error:", error);
        return { success: false, message: "error" };
    }
}

export async function forgotPasswordHandler(email: string) {
    try {
        const resp = await fetch(`${BASE_URL}/forgotPasswords`, {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" },
        });

        const data = await resp.json();
        if (!resp.ok) return { success: false, message: data.message || "Email not found" };

        return { success: true, message: data.message };
    } catch (error) {
        return { success: false, message: "Network error occurred" };
    }
}

export async function verifyResetCodeHandler(resetCode: string) {
    try {
        const resp = await fetch(`${BASE_URL}/verifyResetCode`, {
            method: "POST",
            body: JSON.stringify({ resetCode }),
            headers: { "Content-Type": "application/json" },
        });

        const data = await resp.json();
        if (!resp.ok) return { success: false, message: data.message || "Invalid code" };

        return { success: true, status: data.status };
    } catch (error) {
        return { success: false, message: "Verification failed" };
    }
}

export async function resetPasswordHandler(payload: { email: string; newPassword: string }) {
    try {
        const resp = await fetch(`${BASE_URL}/resetPassword`, {
            method: "PUT",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
        });

        const data = await resp.json();
        if (!resp.ok) return { success: false, message: data.message || "Failed to reset password" };

        return { success: true, token: data.token };
    } catch (error) {
        return { success: false, message: "Server error occurred" };
    }
}