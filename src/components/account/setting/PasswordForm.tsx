"use client";

import React from "react";
import { FaLock, FaEye, FaEyeSlash, FaKey, FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import { inputRight, inputRightError } from "@/constants/account/account-styles";

type ShowPass = { current: boolean; newPass: boolean; confirm: boolean };

interface PasswordFormProps {
    register: any;
    handleSubmit: any;
    errors: any;
    alert: null | "success" | "error";
    showPass: ShowPass;
    toggle: (field: keyof ShowPass) => void;
    onInputChange: () => void;
}

export default function PasswordForm({ register, handleSubmit, errors, alert, showPass, toggle, onInputChange }: PasswordFormProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                    <FaLock size={24} className="text-amber-600" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-gray-800">Change Password</h3>
                    <p className="text-xs text-gray-500">Update your account password</p>
                </div>
            </div>

            {alert === "success" && (
                <div className="mb-5 flex items-center gap-2.5 bg-green-50 border border-green-100 text-green-600 text-sm rounded-lg px-4 py-3 animate-in fade-in duration-300">
                    <FaCircleCheck size={16} className="shrink-0" />
                    Password changed successfully!
                </div>
            )}
            {alert === "error" && (
                <div className="mb-5 flex items-center gap-2.5 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-3 animate-in fade-in duration-300">
                    <FaCircleExclamation size={16} className="shrink-0" />
                    Failed to update password.
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Current Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPass.current ? "text" : "password"}
                                placeholder="Enter your current password"
                                {...register("current")}
                                className={errors.current ? inputRightError : inputRight}
                                onChange={(e) => {
                                    register("current").onChange(e);
                                    onInputChange();
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => toggle("current")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPass.current ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        {errors.current && <p className="mt-1 text-xs text-red-500">{errors.current.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            New Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPass.newPass ? "text" : "password"}
                                placeholder="Enter your new password"
                                {...register("newPass")}
                                className={errors.newPass ? inputRightError : inputRight}
                                onChange={(e) => {
                                    register("newPass").onChange(e);
                                    onInputChange();
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => toggle("newPass")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPass.newPass ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        {errors.newPass && <p className="mt-1 text-xs text-red-500">{errors.newPass.message}</p>}
                        {!errors.newPass && <p className="mt-1.5 text-xs text-gray-400">Must be at least 6 characters</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Confirm New Password <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPass.confirm ? "text" : "password"}
                                placeholder="Confirm your new password"
                                {...register("confirm")}
                                className={errors.confirm ? inputRightError : inputRight}
                                onChange={(e) => {
                                    register("confirm").onChange(e);
                                    onInputChange();
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => toggle("confirm")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPass.confirm ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        {errors.confirm && <p className="mt-1 text-xs text-red-500">{errors.confirm.message}</p>}
                    </div>
                </div>

                <button
                    type="submit"
                    className="mt-5 inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md shadow-amber-500/30"
                >
                    <FaKey size={15} />
                    Change Password
                </button>
            </form>
        </div>
    );
}