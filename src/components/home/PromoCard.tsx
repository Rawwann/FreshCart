"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { PromoCardData } from '@/constants/home/promo.constants';

interface PromoCardProps {
    card: PromoCardData;
}

export const PromoCard: React.FC<PromoCardProps> = ({ card }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: card.animationX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative overflow-hidden rounded-3xl ${card.gradient} p-8 md:p-10 text-white min-h-[300px] flex flex-col justify-center`}
        >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider">
                    <span>{card.badge}</span> {card.badgeText}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-2">{card.headline}</h3>

                <p className="text-white/80 text-sm md:text-base mb-4 font-medium">
                    {card.description}
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-black">{card.discount}</span>
                    <span className="text-sm text-white/80 font-medium">
                        Use code: <strong className="text-white">{card.code}</strong>
                    </span>
                </div>

                <Link
                    href={card.href}
                    className={`bg-white ${card.buttonColor} px-6 py-2.5 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-md inline-flex items-center gap-2`}
                >
                    {card.buttonText} <FaArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
};