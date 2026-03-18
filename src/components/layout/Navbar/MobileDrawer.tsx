"use client";

import Link from "next/link";
import { Heart, Search, ShoppingCart, X, User as UserIcon } from "lucide-react";
import { FaHeadset } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { useSignOut } from "@/hooks/auth/useSignOut";
import { NAV_LINKS } from "@/constants/layout/navbar.constants";

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
    const { data: session, status } = useSession();
    const isLoggedIn = status === "authenticated";
    const user = session?.user;
    const { handleSignOut } = useSignOut();

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-60 lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-75 sm:w-87.5 bg-white z-70 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <Link href="/" onClick={onClose}>
                        <img src="/FreshCart.svg" alt="FreshCart Logo" className="h-6 w-auto" />
                    </Link>
                    <button onClick={onClose} className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
                    <form className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                        />
                        <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors active:scale-95">
                            <Search className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="flex flex-col space-y-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                onClick={onClose}
                                className="block px-4 py-2.5 text-base font-medium text-[#354152] rounded-md hover:bg-green-50 hover:text-green-600 transition-colors"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    <div className="border-t border-gray-100"></div>

                    <div className="flex flex-col space-y-1">
                        <Link href="/wishlist" onClick={onClose} className="flex items-center gap-4 px-4 py-2.5 rounded-md text-[#354152] font-medium hover:bg-green-50 hover:text-green-600 transition-colors group">
                            <div className="w-9 h-9 rounded-full bg-red-50 text-red-500 flex items-center justify-center group-hover:bg-red-100 transition-colors"><Heart className="w-4 h-4" /></div>
                            Wishlist
                        </Link>
                        <Link href="/cart" onClick={onClose} className="flex items-center gap-4 px-4 py-2.5 rounded-md text-[#354152] font-medium hover:bg-green-50 hover:text-green-600 transition-colors group">
                            <div className="w-9 h-9 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-100 transition-colors"><ShoppingCart className="w-4 h-4" /></div>
                            Cart
                        </Link>
                    </div>

                    <div className="border-t border-gray-100"></div>

                    {isLoggedIn ? (
                        <>
                            <div className="px-4 py-3 bg-gray-50 rounded-lg flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                    <UserIcon className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">Welcome back</span>
                                    <span className="text-sm font-bold text-gray-900 truncate max-w-[140px]">{user?.name || "User"}</span>
                                </div>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="flex items-center gap-2 hover:text-red-500 transition"
                            >
                                <UserIcon className="w-4 h-4" /> Sign Out
                            </button>
                        </>
                    ) : (
                        <div className="grid grid-cols-2 gap-3 mt-2">
                            <Link href="/login" onClick={onClose} className="flex items-center justify-center py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">Sign In</Link>
                            <Link href="/register" onClick={onClose} className="flex items-center justify-center py-2.5 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors">Sign Up</Link>
                        </div>
                    )}

                    <div className="mt-auto pt-6">
                        <Link href="/contact" onClick={onClose} className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-green-50 transition-colors group">
                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0"><FaHeadset className="w-5 h-5" /></div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-[#354152]">Need Help?</span>
                                <span className="text-sm font-medium text-green-600">Contact Support</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}