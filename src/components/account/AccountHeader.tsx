"use client";
import { FaUser } from "react-icons/fa6";

export default function AccountHeader() {
    return (
        <div className="relative w-full py-12 px-6 md:px-16 overflow-hidden bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-black/5 blur-2xl pointer-events-none" />

            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-white/80 text-xs font-medium mb-4">
                <span>Home</span>
                <span className="text-white/40">/</span>
                <span className="text-white font-semibold">My Account</span>
            </div>

            {/* Avatar + Title */}
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                    <FaUser size={28} className="text-white" />
                </div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">My Account</h1>
                    <p className="text-white/80 text-sm mt-0.5">Manage your addresses and account settings</p>
                </div>
            </div>
        </div>
    );
}