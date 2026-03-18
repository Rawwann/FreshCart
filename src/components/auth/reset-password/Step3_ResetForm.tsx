"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaLock } from "react-icons/fa";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { authInputBase, authSubmitButton } from "@/constants/auth/auth-styles";

interface Step3Props {
    newPassword: string;
    setNewPassword: (v: string) => void;
    confirmPassword: string;
    setConfirmPassword: (v: string) => void;
    showPassword: boolean;
    setShowPassword: (v: boolean) => void;
    showConfirmPassword: boolean;
    setShowConfirmPassword: (v: boolean) => void;
    handleResetPassword: () => void;
    isLoading: boolean;
}

export function Step3_ResetForm({
    newPassword, setNewPassword, confirmPassword, setConfirmPassword,
    showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword,
    handleResetPassword, isLoading
}: Step3Props) {
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="space-y-4">
                <PasswordField
                    label="New Password"
                    value={newPassword}
                    onChange={setNewPassword}
                    show={showPassword}
                    setShow={setShowPassword}
                />
                <PasswordField
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    show={showConfirmPassword}
                    setShow={setShowConfirmPassword}
                />
            </div>

            <Button className={authSubmitButton} onClick={handleResetPassword} disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Reset Password"}
            </Button>
        </div>
    );
}

function PasswordField({ label, value, onChange, show, setShow }: any) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[#374151] text-sm font-semibold font-exo leading-5">{label}</label>
            <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] z-10 group-focus-within:text-[#16A34A] transition-colors">
                    <FaLock className="w-4 h-4" />
                </div>
                <input
                    type={show ? "text" : "password"}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className={authInputBase + " pr-12"}
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] transition-colors">
                    {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
            </div>
        </div>
    );
}