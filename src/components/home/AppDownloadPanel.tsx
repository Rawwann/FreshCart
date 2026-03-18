"use client";

import React from 'react';
import { Star } from 'lucide-react';
import { APP_STORE_BUTTONS } from '@/constants/home/newsletter.constants';

export const AppDownloadPanel = () => {
    return (
        <div
            className="rounded-[24px] p-8 flex flex-col justify-between text-white relative overflow-hidden"
            style={{
                width: '491px',
                height: '392.75px',
                background: 'linear-gradient(135deg, #101828 0%, #1E2939 100%)'
            }}
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl pointer-events-none"></div>

            <div>
                <span className="inline-flex items-center justify-center rounded-full bg-[#00BC7D33] border border-[#00BC7D4D] text-[#00BC7D] text-[10px] font-bold mb-6 gap-2 w-[110px] h-[30px]">
                    📱 MOBILE APP
                </span>
                <h2 className="text-[24px] font-bold mb-2">Shop Faster on Our App</h2>
                <p className="text-[#99A1AF] text-[14px] font-medium leading-[22.75px] mb-8">
                    Get app-exclusive deals & 15% off your first order.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                {APP_STORE_BUTTONS.map((btn) => (
                    <button
                        key={btn.store}
                        className="w-full h-[59px] flex items-center gap-4 px-4 rounded-xl border border-white/10 bg-white/10 hover:bg-white/20 transition-all text-left"
                    >
                        <btn.icon className="w-6 h-6 text-white" />
                        <div className="flex flex-col leading-tight">
                            <span className="text-[9px] text-gray-400 font-bold tracking-widest">{btn.text}</span>
                            <span className="text-[15px] font-bold">{btn.store}</span>
                        </div>
                    </button>
                ))}
            </div>

            <div className="flex items-center gap-2 mt-4">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />)}
                </div>
                <span className="text-[#99A1AF] text-[12px] font-medium">4.9 • 100K+ downloads</span>
            </div>
        </div>
    );
};