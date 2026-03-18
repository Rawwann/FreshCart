"use client";

import Link from "next/link";
import { LogOut, Mail, Phone, User, UserPlus } from "lucide-react";
import { FaTruck, FaGift } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { useSignOut } from "@/hooks/auth/useSignOut";

export default function TopBar() {
    const { data: session, status } = useSession();
    const isLoggedIn = status === "authenticated";
    const user = session?.user;
    const { handleSignOut } = useSignOut();

    return (
        <div className="hidden lg:flex justify-between items-center px-4 md:px-10 xl:px-32 py-2 border-b border-gray-100 text-sm">
            {/* Left Side */}
            <div className="flex gap-6 items-center text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                    <FaTruck className="w-4 h-4 text-green-600" />
                    <span>Free Shipping on Orders 500 EGP</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaGift className="w-4 h-4 text-green-600" />
                    <span>New Arrivals Daily</span>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex gap-6 items-center">
                {/* Contact */}
                <div className="flex items-center gap-4 text-gray-500 font-medium">
                    <span className="flex items-center gap-2 hover:text-green-600 transition cursor-pointer">
                        <Phone className="w-4 h-4" /> +1 (800) 123-4567
                    </span>
                    <a href="mailto:support@freshcart.com" className="flex items-center gap-2 hover:text-green-600 transition">
                        <Mail className="w-4 h-4" /> support@freshcart.com
                    </a>
                </div>

                {/* Divider */}
                <div className="h-4 w-px bg-gray-300"></div>

                {/* User Status */}
                <div className="flex items-center gap-4 text-[#354152] font-medium">
                    {isLoggedIn ? (
                        <>
                            <Link href="/profile" className="flex items-center gap-2 hover:text-green-600 transition">
                                <User className="w-4 h-4" /> {user?.name || "User"}
                            </Link>
                            <button
                                onClick={handleSignOut}
                                className="flex items-center gap-2 hover:text-red-500 transition"
                            >
                                <LogOut className="w-4 h-4" /> Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="flex items-center gap-1 hover:text-green-600 transition">
                                <User className="w-4 h-4" /> Sign In
                            </Link>
                            <Link href="/register" className="flex items-center gap-1 hover:text-green-600 transition">
                                <UserPlus className="w-4 h-4" /> Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}