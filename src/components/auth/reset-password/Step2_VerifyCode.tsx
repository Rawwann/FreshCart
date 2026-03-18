"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import { authSubmitButton } from "@/constants/auth/auth-styles";

interface Step2Props {
    otp: string[];
    handleVerifyCode: (code?: string) => void;
    handleSendCode: () => void;
    setStep: (step: 1 | 2 | 3) => void;
    isLoading: boolean;
    handleOtpChange: (v: string, idx: number) => void;
}

export function Step2_VerifyCode({ handleVerifyCode, handleSendCode, setStep, isLoading, handleOtpChange, otp }: Step2Props) {
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isTouched) return;
        if (inputValue.length === 0) setError("Reset code is required");
        else if (inputValue.length < 6) setError("Reset code must be 6 digits");
        else setError(null);
    }, [inputValue, isTouched]);

    const onVerifyClick = () => {
        setIsTouched(true);
        if (inputValue.length < 6) {
            setError(inputValue.length === 0 ? "Reset code is required" : "Reset code must be 6 digits");
            return;
        }
        handleVerifyCode(inputValue);
    };

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
                <label className="text-[#1F2937] text-sm font-semibold font-exo leading-5">Verification Code</label>
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10 group-focus-within:text-[#16A34A] transition-colors">
                        <FaShieldAlt className="w-4 h-4" />
                    </div>
                    <input
                        type="text"
                        maxLength={6}
                        value={inputValue}
                        onBlur={() => setIsTouched(true)}
                        onChange={(e) => {
                            if (!isTouched) setIsTouched(true);
                            const val = e.target.value.replace(/[^0-9]/g, "");
                            setInputValue(val);
                            for (let i = 0; i < 6; i++) handleOtpChange(val[i] || "", i);
                        }}
                        placeholder="••••••"
                        className={`w-full h-14 pl-12 pr-4 py-3.5 border-2 rounded-xl outline-none transition-all duration-300 text-center text-2xl font-medium font-inter tracking-[12px] text-[#1F2937] placeholder:text-[#9CA3AF]/50 bg-white ${error ? "border-red-500 focus:ring-red-100" : "border-[#E5E7EB] focus:border-[#16A34A] focus:ring-[#DCFCE7]"}`}
                    />
                </div>
                {error && <span className="text-red-500 text-xs font-medium mt-1">{error}</span>}
            </div>

            <div className="flex items-center justify-center gap-1">
                <span className="text-[#4B5563] text-sm font-medium font-exo">Didn't receive the code?</span>
                <button type="button" onClick={() => { setIsTouched(false); setInputValue(""); handleSendCode(); }} className="text-green-600 hover:text-green-700 text-sm font-semibold font-exo transition-colors duration-300 cursor-pointer">
                    Resend Code
                </button>
            </div>

            <div className="flex flex-col gap-4">
                <Button className={authSubmitButton} onClick={onVerifyClick} disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Verify Code"}
                </Button>
                <div className="flex justify-center items-center">
                    <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-2 text-[#4B5563] text-sm font-medium font-exo hover:text-[#16A34A] transition-colors">
                        <FaArrowLeft className="w-3 h-3" /> Change email address
                    </button>
                </div>
            </div>
        </div>
    );
}