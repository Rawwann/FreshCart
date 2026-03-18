"use client";

import React from 'react';
import { PROMO_CARDS } from '@/constants/home/promo.constants';
import { PromoCard } from '@/components/home/PromoCard';

export const PromoCards = () => {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-10 bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 md:px-10 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROMO_CARDS.map((card) => (
            <PromoCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};