
import { FaTruckFast, FaShieldHalved, FaArrowRotateLeft, FaBox, FaStar, FaCheck } from "react-icons/fa6";
import React from "react";

// ─── ProductClient ────────────────────────────────────────────────────────────

export const TRUST_BADGES = [
    {
        icon: FaTruckFast,
        title: "Free Delivery",
        desc: "Orders over $50",
    },
    {
        icon: FaShieldHalved,
        title: "Secure Payment",
        desc: "100% Protected",
    },
    {
        icon: FaArrowRotateLeft,
        title: "30 Days Return",
        desc: "Money back",
    },
] as const;

// ─── ProductTabs ──────────────────────────────────────────────────────────────

export const TAB_DEFINITIONS = [
    { id: "details", icon: FaBox, label: "Product Details" },
    { id: "reviews", icon: FaStar, label: "Reviews" },
    { id: "shipping", icon: FaTruckFast, label: "Shipping & Returns" },
] as const;

export type TabId = typeof TAB_DEFINITIONS[number]["id"];

export const KEY_FEATURES = [
    "Premium Quality Product",
    "100% Authentic Guarantee",
    "Fast & Secure Packaging",
    "Quality Tested",
] as const;

export const RATING_BARS = [
    { stars: 5, pct: 25 },
    { stars: 4, pct: 60 },
    { stars: 3, pct: 10 },
    { stars: 2, pct: 3 },
    { stars: 1, pct: 2 },
] as const;

export const SHIPPING_ITEMS = [
    "Free shipping on orders over $50",
    "Standard delivery: 3-5 business days",
    "Express delivery available at checkout",
    "Track your order in real-time",
] as const;

export const RETURN_ITEMS = [
    "30-day money-back guarantee",
    "Full refund or exchange available",
    "Free return shipping",
    "No questions asked for unused items",
] as const;