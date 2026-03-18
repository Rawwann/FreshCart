"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    FaHouse,
    FaArrowLeft,
    FaCarrot,
    FaLemon,
    FaSeedling,
    FaAppleWhole,
    FaCartShopping,
} from "react-icons/fa6";

interface Destination {
    label: string;
    href: string;
    active: boolean;
}

interface FloatingIcon {
    icon: React.ElementType;
    pos: React.CSSProperties;
    size: string;
    color: string;
    delay: string;
    dur: string;
}

const FLOATING_ICONS: FloatingIcon[] = [
    { icon: FaAppleWhole, pos: { top: "8%", left: "5%" }, size: "2rem", color: "#bbf7d0", delay: "1s", dur: "8s" },
    { icon: FaCarrot, pos: { top: "20%", right: "10%" }, size: "2rem", color: "#bbf7d0", delay: "1s", dur: "8s" },
    { icon: FaLemon, pos: { bottom: "25%", left: "8%" }, size: "2rem", color: "#bbf7d0", delay: "0.5s", dur: "7s" },
    { icon: FaSeedling, pos: { bottom: "15%", right: "15%" }, size: "2.5rem", color: "#bbf7d0", delay: "2s", dur: "9s" },
    { icon: FaAppleWhole, pos: { top: "50%", left: "15%" }, size: "1.5rem", color: "#dcfce7", delay: "1.5s", dur: "5s" },
    { icon: FaCarrot, pos: { top: "40%", right: "5%" }, size: "1.5rem", color: "#dcfce7", delay: "0.8s", dur: "6s" },
];

const DESTINATIONS: Destination[] = [
    { label: "All Products", href: "/products", active: true },
    { label: "Categories", href: "/categories", active: false },
    { label: "Today's Deals", href: "/deals", active: false },
    { label: "Contact Us", href: "/contact", active: false },
];

export default function NotFound() {
    const router = useRouter();

    return (
        <>
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-14px) rotate(4deg); }
                    66% { transform: translateY(-7px) rotate(-3deg); }
                }
                .nf-float {
                    position: absolute;
                    pointer-events: none;
                    animation: float var(--nf-dur) ease-in-out infinite;
                    animation-delay: var(--nf-delay);
                }
            `}</style>

            <div style={{ position: "relative", minHeight: "100vh", background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "4rem 1rem" }}>

                {/* Gradient blobs */}
                <div style={{ position: "absolute", top: 0, right: 0, width: "500px", height: "500px", background: "radial-gradient(circle, rgba(187,247,208,0.35) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "400px", height: "400px", background: "radial-gradient(circle, rgba(187,247,208,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />

                {/* Floating icons */}
                {FLOATING_ICONS.map(({ icon: Icon, pos, size, color, delay, dur }, i) => (
                    <div
                        key={i}
                        className="nf-float"
                        style={{
                            ...pos,
                            fontSize: size,
                            color: color,
                            "--nf-dur": dur,
                            "--nf-delay": delay,
                        } as React.CSSProperties}
                    >
                        <Icon />
                    </div>
                ))}

                {/* Main content */}
                <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%" }}>

                    <div style={{ maxWidth: "448px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        {/* Cart icon block */}
                        <div style={{ position: "relative", width: "260px", height: "230px", marginBottom: "3.5rem" }}>
                            {/* White card */}
                            <div style={{ position: "absolute", top: "16px", left: "50%", transform: "translateX(-50%)", width: "210px", height: "170px", background: "white", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,0.08)", border: "1px solid #f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(240,253,244,0.8) 0%, transparent 60%, rgba(220,252,231,0.4) 100%)" }} />
                                <FaCartShopping style={{ position: "relative", fontSize: "5rem", color: "#4ade80", opacity: 0.9 }} />
                            </div>

                            {/* 404 badge */}
                            <div style={{ position: "absolute", top: "-8px", right: "-8px" }}>
                                <div style={{ position: "absolute", inset: "-7px", borderRadius: "9999px", background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }} />
                                <div style={{ position: "relative", width: "72px", height: "72px", borderRadius: "9999px", background: "linear-gradient(135deg, #22c55e, #16a34a)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(22,163,74,0.45)" }}>
                                    <span style={{ color: "white", fontWeight: 900, fontSize: "1rem", letterSpacing: "-0.02em" }}>404</span>
                                </div>
                            </div>

                            {/* Smiley face */}
                            <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
                                <div style={{ width: "10px", height: "10px", borderRadius: "9999px", background: "#4ade80" }} />
                                <div style={{ width: "30px", height: "14px", borderBottom: "3px solid #4ade80", borderBottomLeftRadius: "9999px", borderBottomRightRadius: "9999px" }} />
                                <div style={{ width: "10px", height: "10px", borderRadius: "9999px", background: "#4ade80" }} />
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 style={{ fontSize: "2.75rem", fontWeight: 900, color: "#111827", marginBottom: "1rem", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                            Oops! Nothing Here
                        </h1>

                        {/* Subtitle */}
                        <p style={{ color: "#6b7280", fontSize: "1rem", fontWeight: 500, lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "300px" }}>
                            Looks like this page went out of stock! Don't worry,
                            there's plenty more fresh content to explore.
                        </p>

                        {/* Action Buttons */}
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem", width: "100%" }}>
                            <Link
                                href="/"
                                className="group"
                                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "#16a34a", color: "white", padding: "1rem 2rem", borderRadius: "16px", fontWeight: 700, fontSize: "1rem", textDecoration: "none", boxShadow: "0 8px 20px rgba(22,163,74,0.35)", transition: "all 0.2s ease" }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#15803d"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#16a34a"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                            >
                                <FaHouse style={{ fontSize: "1rem" }} />
                                Go to Homepage
                            </Link>

                            <button
                                onClick={() => router.back()}
                                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "white", color: "#374151", padding: "1rem 2rem", borderRadius: "16px", fontWeight: 700, fontSize: "1rem", border: "1px solid #e5e7eb", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", cursor: "pointer", transition: "all 0.2s ease" }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#f9fafb"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                            >
                                <FaArrowLeft style={{ fontSize: "1rem" }} />
                                Go Back
                            </button>
                        </div>
                    </div>

                    {/* Popular Destinations */}
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "0 1rem" }}>
                        <div style={{ background: "white", borderRadius: "24px", border: "1px solid #f3f4f6", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", padding: "1.5rem", width: "fit-content", minWidth: "max-content" }}>
                            <p style={{ textAlign: "center", fontSize: "0.7rem", fontWeight: 700, color: "#9ca3af", textTransform: "none", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
                                Popular Destinations
                            </p>
                            <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                                {DESTINATIONS.map((dest) => (
                                    <Link
                                        key={dest.label}
                                        href={dest.href}
                                        style={{
                                            padding: "0.5rem 1.25rem",
                                            borderRadius: "12px",
                                            fontWeight: 600,
                                            fontSize: "0.875rem",
                                            textDecoration: "none",
                                            whiteSpace: "nowrap",
                                            transition: "background 0.15s ease",
                                            background: dest.active ? "#f0fdf4" : "#f3f4f6",
                                            color: dest.active ? "#15803d" : "#374151",
                                        }}
                                    >
                                        {dest.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}