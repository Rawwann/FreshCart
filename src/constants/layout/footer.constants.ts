
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaPhone,
    FaEnvelope,
    FaLocationDot,
} from "react-icons/fa6";

export const footerLinks = {
    shop: [
        { label: "All Products", href: "/products" },
        { label: "Categories", href: "/categories" },
        { label: "Brands", href: "/brands" },
        { label: "Electronics", href: "/category/electronics" },
        { label: "Men's Fashion", href: "/category/mens-fashion" },
        { label: "Women's Fashion", href: "/category/womens-fashion" },
    ],
    account: [
        { label: "My Account", href: "/profile" },
        { label: "Order History", href: "/orders/allorders" },
        { label: "Wishlist", href: "/wishlist" },
        { label: "Shopping Cart", href: "/cart" },
        { label: "Sign In", href: "/login" },
        { label: "Create Account", href: "/register" },
    ],
    support: [
        { label: "Contact Us", href: "/contact" },
        { label: "Help Center", href: "/help" },
        { label: "Shipping Info", href: "/shipping" },
        { label: "Returns & Refunds", href: "/returns" },
        { label: "Track Order", href: "/track-order" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookie" },
    ],
};

export const SOCIAL_ICONS = [
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
] as const;

export const CONTACT_INFO = [
    { icon: FaPhone, text: "+1 (800) 123-4567", href: undefined, iconClass: "text-green-500", hoverClass: "hover:text-green-400" },
    { icon: FaEnvelope, text: "support@freshcart.com", href: "mailto:support@freshcart.com", iconClass: "text-green-500", hoverClass: "hover:text-green-400" },
    { icon: FaLocationDot, text: "123 Commerce Street, New York, NY 10001", href: undefined, iconClass: "text-green-500", hoverClass: "" },
] as const;