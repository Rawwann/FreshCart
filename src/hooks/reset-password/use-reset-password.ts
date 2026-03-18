"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { forgotPasswordHandler, verifyResetCodeHandler, resetPasswordHandler } from "@/services/auth.service";
import { RESET_PASSWORD_STEPS, getStep2Description } from "@/constants/reset-password/reset-password.constants";

export function useResetPassword() {
    const router = useRouter();

    // States
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Validations
    const isStep1Valid = useMemo(() => email.trim().length > 0 && email.includes("@"), [email]);
    const isStep2Valid = useMemo(() => otp.every((digit) => digit.trim().length === 1), [otp]);

    // Handlers
    const handleSendCode = async () => {
        if (!isStep1Valid) return toast.error("Please enter a valid email address.");
        setIsLoading(true);
        try {
            const res = await forgotPasswordHandler(email.trim());
            if (res.success) {
                toast.success("Reset code sent!");
                setStep(2);
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("Connection error.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyCode = async (codeFromStep?: string) => {
        const finalOtp = codeFromStep || otp.join("").trim();
        if (finalOtp.length < 6) return toast.error("Enter 6-digit code.");
        setIsLoading(true);
        try {
            const res = await verifyResetCodeHandler(finalOtp);
            if (res.success) {
                toast.success("Code verified!");
                setStep(3);
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("Verification failed.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) return toast.error("Passwords do not match.");
        setIsLoading(true);
        try {
            const res = await resetPasswordHandler({ email: email.trim(), newPassword });
            if (res.success) {
                toast.success("Password reset successfully!");
                router.push("/login");
            } else {
                toast.error(res.message);
            }
        } catch (error) {
            toast.error("Server error.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleOtpChange = (value: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const currentStepData = RESET_PASSWORD_STEPS[step - 1];
    const stepTitle = currentStepData.title;
    const stepDescription = step === 2
        ? getStep2Description(email)
        : currentStepData.description;

    return {
        step, setStep,
        email, setEmail,
        otp, handleOtpChange,
        newPassword, setNewPassword,
        confirmPassword, setConfirmPassword,
        showPassword, setShowPassword,
        showConfirmPassword, setShowConfirmPassword,
        isLoading,
        stepTitle, stepDescription,
        handleSendCode, handleVerifyCode, handleResetPassword,
    };
}