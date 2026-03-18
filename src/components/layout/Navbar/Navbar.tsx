"use client";

import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";
import { useSession } from "next-auth/react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
    const { data: session, status } = useSession();

    const isLoggedIn = status === 'authenticated';

    const { cartItemsCount } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { wishlistCount } = useWishlist();

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <TopBar />

            <header className="sticky top-0 z-[100] w-full border-b border-gray-100 bg-white shadow-sm transition-all">
                <DesktopNav
                    wishlistCount={wishlistCount}
                    cartCount={cartItemsCount}
                    onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
                />
            </header>

            <MobileDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
}