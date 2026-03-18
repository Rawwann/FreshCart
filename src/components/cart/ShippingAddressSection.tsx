"use client";

import React from 'react';
import {
    FaHouse,
    FaLocationDot,
    FaPhone,
    FaCity,
    FaPlus,
    FaCircleInfo,
    FaCheck,
} from "react-icons/fa6";

interface ShippingAddressSectionProps {
    formData: any;
    setFormData: any;
    addressType: string;
    onSelectSaved: () => void;
    onSelectManual: () => void;
}

export default function ShippingAddressSection({
    formData,
    setFormData,
    addressType,
    onSelectSaved,
    onSelectManual,
}: ShippingAddressSectionProps) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <div className="flex items-center gap-2 text-white">
                    <FaHouse size={18} />
                    <h2 className="text-lg font-bold">Shipping Address</h2>
                </div>
                <p className="text-green-50 text-xs">Where should we deliver your order?</p>
            </div>

            <div className="p-6 space-y-6">
                <div className="space-y-4">
                    {/* Saved Address Card */}
                    <div
                        onClick={onSelectSaved}
                        className={`p-4 border-2 rounded-2xl relative cursor-pointer transition-all ${addressType === 'saved'
                            ? 'border-green-500 bg-green-50/30 shadow-md'
                            : 'border-gray-100 bg-white hover:border-green-200'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`w-10 h-10 rounded-xl shadow-sm flex items-center justify-center shrink-0 border ${addressType === 'saved' ? 'bg-white text-green-600 border-green-100' : 'bg-gray-50 text-gray-400 border-gray-100'
                                }`}>
                                <FaLocationDot size={18} />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-gray-900">Saved Address</h4>
                                <p className="text-gray-500 text-xs">Nasr City, Cairo, Egypt</p>
                                <div className="flex items-center gap-4 pt-1 text-[10px] text-gray-400 font-medium">
                                    <span className="flex items-center gap-1"><FaPhone size={10} /> 01097514862</span>
                                </div>
                            </div>
                        </div>

                        {addressType === 'saved' && (
                            <div className="absolute top-4 right-4 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white animate-in zoom-in duration-200">
                                <FaCheck size={10} />
                            </div>
                        )}
                    </div>

                    {/* Use Different Address Button */}
                    <button
                        onClick={onSelectManual}
                        className={`w-full p-4 border-2 border-dashed rounded-2xl flex items-center gap-4 group transition-all ${addressType === 'manual'
                            ? 'border-green-500 bg-green-50'
                            : 'border-green-200 hover:border-green-500 hover:bg-green-50'
                            }`}
                    >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white transition-transform ${addressType === 'manual' ? 'bg-green-600 scale-110' : 'bg-green-500 group-hover:scale-110'
                            }`}>
                            <FaPlus size={18} />
                        </div>
                        <div className="text-left">
                            <h4 className={`font-bold text-sm ${addressType === 'manual' ? 'text-green-800' : 'text-green-700'}`}>
                                Use a different address
                            </h4>
                            <p className="text-green-600/60 text-xs font-medium">Enter a new shipping address manually</p>
                        </div>

                        {addressType === 'manual' && (
                            <div className="ml-auto w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white animate-in zoom-in duration-200">
                                <FaCheck size={10} />
                            </div>
                        )}
                    </button>

                    {/* Manual Form Fields */}
                    {addressType === 'manual' && (
                        <div className="animate-in slide-in-from-top-2 duration-300">
                            <div className="grid grid-cols-1 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">City <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <FaCity className="text-gray-400" size={16} />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="e.g. Cairo, Alexandria, Giza"
                                            className="w-full px-4 py-4 pl-16 border-2 rounded-xl focus:outline-none transition-all border-gray-100 focus:border-green-500"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Street Address <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <FaLocationDot className="text-gray-400" size={16} />
                                        </div>
                                        <textarea
                                            placeholder="Street name, building number, floor, apartment..."
                                            className="w-full px-4 py-4 pl-16 border-2 rounded-xl focus:outline-none transition-all border-gray-100 focus:border-green-500 min-h-[80px] resize-none"
                                            value={formData.details}
                                            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                            <FaPhone className="text-gray-400" size={16} />
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="01xxxxxxxxx"
                                            className="w-full px-4 py-4 pl-16 border-2 rounded-xl focus:outline-none transition-all border-gray-100 focus:border-green-500"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Delivery Info Alert */}
            <div className="p-4 bg-green-50/50 rounded-xl border border-green-100 flex items-center gap-3">
                <FaCircleInfo className="text-green-500 shrink-0" size={20} />
                <div className="space-y-0.5">
                    <h5 className="text-green-700 text-sm font-bold">Delivery Information</h5>
                    <p className="text-green-600/80 text-[11px] font-medium">Please ensure your address is accurate for smooth delivery</p>
                </div>
            </div>
        </div>
    );
}