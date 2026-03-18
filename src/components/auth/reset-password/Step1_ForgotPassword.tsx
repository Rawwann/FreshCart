"use client";

import React from "react";
import Link from "next/link";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { authInputBase, authSubmitButton } from "@/constants/auth/auth-styles";

interface Step1Props {
    email: string;
    setEmail: (email: string) => void;
    handleSendCode: () => void;
    isLoading: boolean;
}

export function Step1_ForgotPassword({ email, setEmail, handleSendCode, isLoading }: Step1Props) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <label className="text-[#374151] text-sm font-semibold font-exo leading-5">Email Address</label>
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10 group-focus-within:text-[#16A34A] transition-colors">
                        <FaEnvelope className="w-4 h-4" />
                    </div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className={authInputBase}
                    />
                </div>
            </div>

            <Button onClick={handleSendCode} disabled={isLoading} className={authSubmitButton}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Send Reset Code"}
            </Button>

            <div className="flex justify-center items-center mt-2">
                <Link href="/login" className="inline-flex items-center gap-2 text-green-600 text-sm font-medium font-exo leading-5 hover:text-green-700 transition-colors">
                    <FaArrowLeft className="w-3 h-3" /> Back to Sign In
                </Link>
            </div>
        </>
    );
}