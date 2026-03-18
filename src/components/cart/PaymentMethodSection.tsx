"use client";

import React from 'react';
import {
    FaCheck,
    FaMoneyBillWave,
    FaCreditCard,
    FaCcVisa,
    FaCcMastercard,
    FaShieldHalved,
    FaCcAmex,
} from "react-icons/fa6";

type PaymentMethod = 'cash' | 'online';

interface PaymentMethodSectionProps {
    paymentMethod: PaymentMethod;
    setPaymentMethod: (method: PaymentMethod) => void;
}

export default function PaymentMethodSection({ paymentMethod, setPaymentMethod }: PaymentMethodSectionProps) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <div className="flex items-center gap-2 text-white">
                    <FaCreditCard size={18} />
                    <h2 className="text-lg font-bold">Payment Method</h2>
                </div>
                <p className="text-green-50 text-xs">Choose how you&apos;d like to pay</p>
            </div>

            <div className="p-6 space-y-4">
                {/* Cash on Delivery Option */}
                <button
                    onClick={() => setPaymentMethod('cash')}
                    className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center gap-5 group relative
                        ${paymentMethod === 'cash'
                            ? 'border-green-500 bg-gradient-to-r from-green-50 to-white shadow-md'
                            : 'border-gray-100 hover:border-green-200'}`}
                >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg
                        ${paymentMethod === 'cash'
                            ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-green-500/30'
                            : 'bg-gray-100 text-gray-400'}`}>
                        <FaMoneyBillWave size={24} />
                    </div>
                    <div className="text-left">
                        <h4 className={`font-bold text-base ${paymentMethod === 'cash' ? 'text-green-900' : 'text-gray-700'}`}>Cash on Delivery</h4>
                        <p className="text-gray-500 text-xs font-medium">Pay when your order arrives at your doorstep</p>
                    </div>
                    <div className={`ml-auto w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all
                        ${paymentMethod === 'cash' ? 'bg-green-600 border-green-600 text-white scale-110' : 'border-gray-200 text-transparent'}`}>
                        <FaCheck size={12} />
                    </div>
                </button>

                {/* Online Payment Option */}
                <button
                    onClick={() => setPaymentMethod('online')}
                    className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center gap-5 group relative
                        ${paymentMethod === 'online'
                            ? 'border-green-500 bg-gradient-to-r from-green-50 to-white shadow-md'
                            : 'border-gray-100 hover:border-green-200'}`}
                >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg
                        ${paymentMethod === 'online'
                            ? 'bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-blue-500/20'
                            : 'bg-gray-100 text-gray-400'}`}>
                        <FaCreditCard size={24} />
                    </div>
                    <div className="text-left">
                        <h4 className={`font-bold text-base ${paymentMethod === 'online' ? 'text-green-900' : 'text-gray-700'}`}>Pay Online</h4>
                        <p className="text-gray-500 text-xs font-medium">Secure payment with Credit/Debit Card via Stripe</p>
                        <div className="flex gap-2 mt-1.5 opacity-60">
                            <FaCcVisa size={18} className="text-blue-800" />
                            <FaCcMastercard size={18} className="text-orange-600" />
                            <FaCcAmex size={18} className="text-blue-600" />
                        </div>
                    </div>
                    <div className={`ml-auto w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all
                        ${paymentMethod === 'online' ? 'bg-green-600 border-green-600 text-white scale-110' : 'border-gray-200 text-transparent'}`}>
                        <FaCheck size={12} />
                    </div>
                </button>

                {/* Security Badge */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-green-50 rounded-xl border border-green-100 mt-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <FaShieldHalved className="text-green-600" size={20} />
                    </div>
                    <div className="space-y-0.5">
                        <h5 className="text-green-900 text-xs font-semibold tracking-wider">Secure & Encrypted</h5>
                        <p className="text-green-700/70 text-[10px] font-medium leading-relaxed">
                            Your payment info is protected with 256-bit SSL encryption
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}