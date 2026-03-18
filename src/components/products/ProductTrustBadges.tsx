
import React from 'react';
import { TRUST_BADGES } from '@/constants/products/products.constants';

export default function ProductTrustBadges() {
    return (
        <div className="border-t border-gray-100 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TRUST_BADGES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                        <Icon size={16} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-xs">{title}</h4>
                        <p className="text-[10px] text-gray-500 font-bold">{desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}