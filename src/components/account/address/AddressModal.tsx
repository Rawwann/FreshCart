"use client";

import React from "react";
import { FaXmark } from "react-icons/fa6";
import { inputBase, inputError } from "@/constants/account/account-styles";

interface AddressModalProps {
    editId: number | null;
    register: any;
    handleSubmit: any;
    errors: any;
    onClose: () => void;
}

export default function AddressModal({ editId, register, handleSubmit, errors, onClose }: AddressModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
            <div className="absolute inset-0 backdrop-blur-sm" onClick={onClose} />

            <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h3 className="text-base font-bold text-gray-800">
                            {editId !== null ? "Edit Address" : "Add New Address"}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">Fill in your delivery address details</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        <FaXmark size={18} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Address Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Home, Office"
                                {...register("name")}
                                className={errors.name ? inputError : inputBase}
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Full Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Street, building, floor..."
                                {...register("fullAddress")}
                                className={errors.fullAddress ? inputError : inputBase}
                            />
                            {errors.fullAddress && (
                                <p className="mt-1 text-xs text-red-500">{errors.fullAddress.message}</p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="01xxxxxxxxx"
                                    {...register("phone")}
                                    className={errors.phone ? inputError : inputBase}
                                />
                                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter city"
                                    {...register("city")}
                                    className={errors.city ? inputError : inputBase}
                                />
                                {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 h-11 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 h-11 rounded-xl bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold transition-colors shadow-sm shadow-green-500/30"
                        >
                            {editId !== null ? "Update Address" : "Add Address"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}