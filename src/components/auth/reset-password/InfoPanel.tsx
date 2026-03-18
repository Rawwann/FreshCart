"use client";

import React from "react";
import { FaEnvelope, FaShieldAlt, FaLock } from "react-icons/fa";

export function InfoPanel() {
    return (
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-6 w-full max-w-154">
            <div className="w-full h-96 bg-linear-to-br from-primary-50 via-green-50 to-green-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                {/* Background */}
                <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-green-100/50" />
                <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50" />
                <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-green-100/50" />

                <div className="relative flex flex-col items-center gap-10 z-10">
                    <div className="relative">
                        <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 transition-transform hover:rotate-0 duration-300">
                            <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center">
                                <FaLock className="w-10 h-10 text-[#16A34A]" />
                            </div>
                        </div>
                        <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                            <FaEnvelope className="w-6 h-6 text-[#22C55E]" />
                        </div>
                        <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                            <FaShieldAlt className="w-6 h-6 text-[#16A34A]" />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="w-3 h-3 rounded-full bg-[#4ADE80] animate-pulse" />
                        <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse [animation-delay:150ms]" />
                        <div className="w-3 h-3 rounded-full bg-[#16A34A] animate-pulse [animation-delay:300ms]" />
                    </div>
                </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch flex flex-col justify-start items-center text-center">
                    <h2 className="text-[#111827] text-3xl font-bold font-exo leading-9">Reset Your Password</h2>
                </div>
                <div className="self-stretch flex flex-col justify-start items-center text-center">
                    <p className="text-[#4B5563] text-lg font-medium font-exo leading-7 max-w-130">
                        Don't worry, it happens to the best of us. We'll help you get back into your account in no time.
                    </p>
                </div>

                <div className="self-stretch inline-flex justify-center items-center gap-8 mt-4">
                    <FeatureItem icon={<FaEnvelope className="w-4 h-4" />} label="Email Verification" />
                    <FeatureItem icon={<FaShieldAlt className="w-4 h-4" />} label="Secure Reset" />
                    <FeatureItem icon={<FaLock className="w-4 h-4" />} label="Encrypted" />
                </div>
            </div>
        </div>
    );
}

function FeatureItem({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-[#16A34A]">{icon}</span>
            <span className="text-[#4B5563] text-sm font-medium font-exo">{label}</span>
        </div>
    );
}