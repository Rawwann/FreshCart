"use client"

import { Controller } from "react-hook-form";
import { useLoginForm } from "@/hooks/auth/useLoginForm";
import { LOGIN_INPUT_CLASSES } from "@/constants/auth/auth.constants";
import Link from "next/link";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaFacebookF, FaLock, FaEnvelope, FaUsers, FaStar } from "react-icons/fa6";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
    const { control, handleSubmit, onSubmit, showPassword, setShowPassword } = useLoginForm();

    return (
        <div className="bg-white shadow-[0px_8px_30px_rgba(0,0,0,0.08)] rounded-3xl p-8 lg:p-12 w-full max-w-xl mx-auto border border-gray-50 flex flex-col relative overflow-hidden order-2 lg:order-0">

            {/* Header */}
            <div className="text-center mb-8">
                <div className="text-3xl font-bold mb-2">
                    <span className="text-green-600">Fresh</span><span className="text-[#101828]">Cart</span>
                </div>
                <h2 className="text-2xl font-bold text-[#101828] mb-2">Welcome Back!</h2>
                <p className="text-[#4A5565] font-medium text-sm">Sign in to continue your fresh shopping experience</p>
            </div>

            {/* Social Login */}
            <div className="flex flex-col gap-3 mb-8">
                <button
                    type="button"
                    className="flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200 font-medium text-[#364153] cursor-pointer"
                >
                    <FaGoogle className="text-red-500 w-5 h-5" />
                    <span>Continue with Google</span>
                </button>

                <button
                    type="button"
                    className="flex items-center justify-center gap-3 w-full py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200 font-medium text-[#364153] cursor-pointer"
                >
                    <FaFacebookF className="text-blue-600 w-5 h-5" />
                    <span>Continue with Facebook</span>
                </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center mb-8">
                <div className="grow border-t border-gray-200"></div>
                <span className="shrink-0 mx-4 text-xs font-bold text-[#99A1AF] uppercase tracking-wider">OR CONTINUE WITH EMAIL</span>
                <div className="grow border-t border-gray-200"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <FieldGroup className="flex flex-col gap-2">
                    <Controller name="email" control={control} render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className="text-[#101828] font-semibold text-sm">Email Address</FieldLabel>
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                                <Input {...field} id={field.name} placeholder="Enter your email" className={LOGIN_INPUT_CLASSES} />
                            </div>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )} />
                </FieldGroup>

                <FieldGroup className="flex flex-col gap-2">
                    <Controller name="password" control={control} render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <div className="flex justify-between items-center mb-1">
                                <FieldLabel className="text-[#101828] font-semibold text-sm">Password</FieldLabel>
                                <Link href="/reset-password" title="Forgot Password" className="text-green-600 text-sm font-regular hover:text-green-700">Forgot Password?</Link>
                            </div>
                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                                <input
                                    {...field}
                                    type={showPassword ? "text" : "password"}
                                    id={field.name}
                                    placeholder="Enter your password"
                                    className={LOGIN_INPUT_CLASSES}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )} />
                </FieldGroup>

                <div className="flex items-center gap-3">
                    <input type="checkbox" id="remember" className="size-4 accent-green-600 rounded cursor-pointer" />
                    <label htmlFor="remember" className="text-sm font-medium text-[#364153] cursor-pointer">Keep me signed in</label>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white h-12 rounded-xl text-lg font-bold shadow-lg transition-all active:scale-95">
                    Sign In
                </Button>
            </form>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-gray-100 text-center">
                <p className="text-[#4A5565] font-medium">
                    New to FreshCart? <Link href="/register" className="text-green-600 font-regular hover:text-green-700 transition">Create an account</Link>
                </p>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center items-center gap-6 mt-8">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#6A7282] uppercase">
                    <FaLock className="w-3 h-3" /> SSL Secured
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#6A7282] uppercase">
                    <FaUsers className="w-3.5 h-3.5" /> 50K+ Users
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#6A7282] uppercase">
                    <FaStar className="w-3 h-3 text-yellow-400" /> 4.9 Rating
                </div>
            </div>
        </div>
    );
}