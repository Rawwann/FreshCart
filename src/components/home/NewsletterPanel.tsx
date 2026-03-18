"use client";

import React from 'react';
import { Mail, MoveRight, CircleCheck } from 'lucide-react';
import { useNewsletter } from '@/hooks/home/useNewsletter';
import { PILLS } from '@/constants/home/newsletter.constants';

export const NewsletterPanel = () => {
    const { email, setEmail, status, handleSubmit } = useNewsletter();

    return (
        <div className="flex-1 flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-[0px_10px_15px_-3px_#00BC7D4D]"
                    style={{ background: 'linear-gradient(135deg, #00BC7D 0%, #00BBA7 100%)' }}
                >
                    <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="text-[14px] font-bold text-[#009966] uppercase tracking-wide">Newsletter</span>
                    <span className="text-[12px] text-[#6A7282] font-medium">50,000+ subscribers</span>
                </div>
            </div>

            <h1 className="text-black font-bold text-[36px] leading-[49.5px] mb-3">
                Get the Freshest Updates <span className="text-[#009966]">Delivered Free</span>
            </h1>

            <p className="text-[#6A7282] text-[18px] font-medium leading-[28px] mb-8">
                Weekly recipes, seasonal offers & exclusive member perks.
            </p>

            {/* Pills Badges */}
            <div className="flex flex-wrap gap-4 mb-10">
                {PILLS.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center px-4 rounded-full bg-white/90 border border-[#D0FAE5] shadow-sm backdrop-blur-[8px]"
                        style={{ width: '197px', height: '50px', gap: '10px' }}
                    >
                        <div className="w-7 h-7 flex items-center justify-center bg-[#D0FAE5] rounded-full">
                            <item.icon className="w-4 h-4 text-[#009966]" />
                        </div>
                        <span className="text-[13px] font-semibold text-[#364153]">{item.text}</span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full">
                <div className="relative flex-1 max-w-[623.5px]">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-5 pr-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all text-base shadow-sm"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "success"}
                    className={`group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-500 shadow-lg ${status === "success"
                        ? "bg-green-700 text-white scale-[0.98]"
                        : "bg-linear-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-teal-500 text-white shadow-green-500/30 hover:shadow-green-500/40 hover:scale-[1.02]"
                        }`}
                    style={{ width: '166.5px', height: '60px' }}
                >
                    {status === "success" ? (
                        <><CircleCheck className="w-5 h-5" /> You're in! </>
                    ) : (
                        <>Subscribe <MoveRight className="w-5 h-5" /></>
                    )}
                </button>
            </form>

            <p className="text-[#99A1AF] text-[12px] font-medium mt-3">✨ Unsubscribe anytime. No spam, ever.</p>
        </div>
    );
};