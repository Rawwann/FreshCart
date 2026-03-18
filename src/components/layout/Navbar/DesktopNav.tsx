"use client";

import Link from "next/link";
import { ChevronDown, Heart, Search, ShoppingCart, User, Menu } from "lucide-react";
import { FaHeadset } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { NAV_LINKS, CATEGORIES_DROPDOWN } from "@/constants/layout/navbar.constants";
import DropdownItem from "./DropdownItem";

interface DesktopNavProps {
    wishlistCount: number;
    cartCount: number;
    onOpenMobileMenu: () => void;
}

export default function DesktopNav({ wishlistCount, cartCount, onOpenMobileMenu }: DesktopNavProps) {
    const { data: session, status } = useSession();
    const isLoggedIn = status === "authenticated";

    return (
        <nav className="flex flex-wrap justify-between items-center px-4 md:px-10 xl:px-32 py-4 gap-4 sm:gap-6">
            {/* Logo */}
            <Link href="/" className="shrink-0">
                <img src="/FreshCart.svg" alt="FreshCart Logo" className="h-6 lg:h-8 w-auto" />
            </Link>

            {/* Search Bar */}
            <form className="hidden lg:flex flex-1 max-w-2xl">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more..."
                        className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 text-sm transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                    />
                    <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors active:scale-95">
                        <Search className="w-4 h-4" />
                    </button>
                </div>
            </form>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-[#354152] font-medium">
                {NAV_LINKS.filter(({ label }) => label !== "Categories").map(({ label, href }) => (
                    <Link key={label} href={href} className="hover:text-green-600 transition">{label}</Link>
                ))}

                {/* Categories Dropdown */}
                <div className="relative group cursor-pointer py-4">
                    <div className="flex items-center gap-1 group-hover:text-green-600 transition">
                        Categories <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </div>
                    <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 flex flex-col py-2">
                        {CATEGORIES_DROPDOWN.map(({ label, href }) => (
                            <Link key={label} href={href} className="px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                <Link href="/brands" className="hover:text-green-600 transition">Brands</Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-1 sm:gap-3">
                <div className="hidden xl:flex items-center gap-3 pr-5 border-r border-gray-200 hover:opacity-80 transition-opacity cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                        <FaHeadset className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px] text-gray-400 font-medium">Support</span>
                        <span className="text-sm text-[#354152] font-semibold leading-none">24/7 Help</span>
                    </div>
                </div>

                <Link href="/wishlist" title="Wishlist" className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group flex">
                    <Heart className="w-6 h-6 text-[#354152] group-hover:text-green-600 transition-colors" />
                    {wishlistCount > 0 && (
                        <span className="absolute top-0 right-0 flex items-center justify-center w-4.5 h-4.5 bg-[#fa2b36] text-white text-[10px] font-bold rounded-full border-2 border-white">
                            {wishlistCount}
                        </span>
                    )}
                </Link>

                <Link href="/cart" title="Cart" className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group flex">
                    <ShoppingCart className="w-6 h-6 text-[#354152] group-hover:text-green-600 transition-colors" />
                    {cartCount > 0 && (
                        <span className="absolute top-0 right-0 flex items-center justify-center w-4.5 h-4.5 bg-green-600 text-white text-[10px] font-bold rounded-full border-2 border-white">
                            {cartCount}
                        </span>
                    )}
                </Link>

                {isLoggedIn ? (
                    <div className="relative group">
                        <button className="text-[#354152] hover:text-green-600 transition p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                            <User className="w-6 h-6" />
                        </button>

                        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] overflow-hidden">
                            <div className="p-4 flex items-center gap-3 bg-gray-50/50">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <User className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-gray-900 leading-tight">
                                        {session?.user?.name || "User Name"}
                                    </span>
                                    <span className="text-[11px] text-gray-400">Account Settings</span>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            <div className="p-2">
                                <DropdownItem href="/profile" icon={<User size={16} />} label="My Profile" />
                                <DropdownItem href="/orders/allorders" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>} label="My Orders" />
                                <DropdownItem href="/wishlist" icon={<Heart size={16} />} label="My Wishlist" />
                                <DropdownItem href="/profile" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>} label="Addresses" />
                                <DropdownItem href="/profile" icon={<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} label="Settings" />
                            </div>

                            <hr className="border-gray-100" />

                            <div className="p-2">
                                <button
                                    onClick={() => signOut()}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Link href="/login" className="hidden sm:flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full hover:bg-green-700 transition font-medium ml-2">
                        <User className="w-4 h-4" /> Sign In
                    </Link>
                )}

                <button onClick={onOpenMobileMenu} className="lg:hidden ml-1 flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors active:scale-95">
                    <Menu className="w-5 h-5" />
                </button>
            </div>
        </nav>
    );
}