"use client";

import React from "react";
import { FaLocationDot, FaPhone, FaCity, FaPencil, FaTrashCan } from "react-icons/fa6";

interface AddressCardProps {
    addr: {
        id: number;
        name: string;
        fullAddress: string;
        phone: string;
        city: string;
    };
    onEdit: (addr: any) => void;
    onDelete: (id: number) => void;
}

export default function AddressCard({ addr, onEdit, onDelete }: AddressCardProps) {
    return (
        <div className="group w-full max-w-md bg-white border border-gray-200 rounded-xl p-4 flex items-start justify-between gap-4 shadow-sm">
            <div className="flex items-start gap-3">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-green-100 group-hover:bg-green-200 flex items-center justify-center mt-0.5 transition-colors duration-200">
                    <FaLocationDot size={18} className="text-green-600" />
                </div>
                <div>
                    <p className="font-semibold text-gray-800 text-sm">{addr.name}</p>
                    <p className="text-gray-500 text-sm">{addr.fullAddress}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                        <span className="flex items-center gap-1.5 text-xs text-gray-500">
                            <FaPhone size={12} className="text-gray-400" />
                            {addr.phone}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-gray-500">
                            <FaCity size={12} className="text-gray-400" />
                            {addr.city}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
                <button
                    onClick={() => onEdit(addr)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500 hover:bg-green-100 hover:text-green-600 transition-colors duration-200"
                >
                    <FaPencil size={14} />
                </button>
                <button
                    onClick={() => onDelete(addr.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-600 transition-colors duration-200"
                >
                    <FaTrashCan size={14} />
                </button>
            </div>
        </div>
    );
}