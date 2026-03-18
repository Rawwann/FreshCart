"use client"

import React from "react"
import { useResetPassword } from "@/hooks/reset-password/use-reset-password"
import { InfoPanel } from "@/components/auth/reset-password/InfoPanel"
import { Stepper } from "@/components/auth/reset-password/Stepper"
import { Step1_ForgotPassword } from "@/components/auth/reset-password/Step1_ForgotPassword"
import { Step2_VerifyCode } from "@/components/auth/reset-password/Step2_VerifyCode"
import { Step3_ResetForm } from "@/components/auth/reset-password/Step3_ResetForm"
import Link from "next/link"

export default function ResetPasswordPage() {
    const {
        step, setStep, email, setEmail, otp, handleOtpChange,
        newPassword, setNewPassword, confirmPassword, setConfirmPassword,
        showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword,
        isLoading, stepTitle, stepDescription,
        handleSendCode, handleVerifyCode, handleResetPassword
    } = useResetPassword();

    return (
        <main className="min-h-screen bg-white flex items-center justify-center py-10 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex items-center lg:items-center justify-center gap-12">

                <div className="hidden lg:flex w-154 flex-col gap-6">
                    <InfoPanel />
                </div>

                <div className="w-full lg:w-154 min-h-[600.5px] bg-white rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.08)] border border-gray-50 p-8 md:p-12 flex flex-col transition-all duration-500">

                    <header className="flex flex-col items-center justify-center mb-6">
                        <Link href="/" className="text-3xl font-bold font-exo tracking-tight">
                            <span className="text-[#16A34A]">Fresh</span><span className="text-[#1F2937]">Cart</span>
                        </Link>
                    </header>

                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#1F2937] font-exo leading-8">{stepTitle}</h2>
                        <p className="mt-2 text-base text-[#4B5563] font-medium font-exo leading-6">{stepDescription}</p>
                    </div>

                    <div className="w-full mb-10">
                        <Stepper currentStep={step} />
                    </div>

                    <div className="mt-8 flex flex-col gap-6">
                        {step === 1 && (
                            <Step1_ForgotPassword
                                email={email}
                                setEmail={setEmail}
                                handleSendCode={handleSendCode}
                                isLoading={isLoading}
                            />
                        )}
                        {step === 2 && (
                            <Step2_VerifyCode
                                otp={otp}
                                handleOtpChange={handleOtpChange}
                                handleVerifyCode={handleVerifyCode}
                                handleSendCode={handleSendCode}
                                setStep={setStep}
                                isLoading={isLoading}
                            />
                        )}
                        {step === 3 && (
                            <Step3_ResetForm
                                newPassword={newPassword}
                                setNewPassword={setNewPassword}
                                confirmPassword={confirmPassword}
                                setConfirmPassword={setConfirmPassword}
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                                showConfirmPassword={showConfirmPassword}
                                setShowConfirmPassword={setShowConfirmPassword}
                                handleResetPassword={handleResetPassword}
                                isLoading={isLoading}
                            />
                        )}
                    </div>

                    {step === 1 && (
                        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col items-center">
                            <p className="text-base text-gray-600 font-medium font-exo">
                                Remember your password? {" "}
                                <Link href="/login" className="text-green-600 font-semibold hover:text-green-700">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </main>
    )
}