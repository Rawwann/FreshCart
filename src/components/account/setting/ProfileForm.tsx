"use client";

import React from "react";
import { FaUser, FaFloppyDisk, FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import { inputBase, inputError } from "@/constants/account/account-styles";

interface ProfileFormProps {
    register: any;
    handleSubmit: any;
    errors: any;
    alert: null | "success" | "error";
}

export default function ProfileForm({ register, handleSubmit, errors, alert }: ProfileFormProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                        <FaUser size={24} className="text-green-600" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-800">Profile Information</h3>
                        <p className="text-xs text-gray-500">Update your personal details</p>
                    </div>
                </div>

                {alert === "success" && (
                    <div className="mb-5 flex items-center gap-2.5 bg-green-50 border border-green-100 text-green-600 text-sm rounded-lg px-4 py-3">
                        <FaCircleCheck size={16} className="shrink-0" />
                        Profile updated successfully!
                    </div>
                )}
                {alert === "error" && (
                    <div className="mb-5 flex items-center gap-2.5 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-3">
                        <FaCircleExclamation size={16} className="shrink-0" />
                        Failed to update profile
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                {...register("fullName")}
                                className={errors.fullName ? inputError : inputBase}
                            />
                            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email")}
                                className={errors.email ? inputError : inputBase}
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="01xxxxxxxxx"
                                {...register("phone")}
                                className={errors.phone ? inputError : inputBase}
                            />
                            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-5 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md shadow-green-500/30"
                    >
                        <FaFloppyDisk size={15} />
                        Save Changes
                    </button>
                </form>
            </div>

            <div className="bg-gray-50 border-t border-gray-100 px-6 md:px-8 py-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Account Information
                </p>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">User ID</span>
                        <span className="text-sm text-gray-400">—</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Role</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-green-100 text-green-700">
                            User
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}