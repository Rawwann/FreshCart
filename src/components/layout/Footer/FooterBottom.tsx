
import { FaCreditCard } from "react-icons/fa6";

const PAYMENT_METHODS = [
    { label: "Visa" },
    { label: "Mastercard" },
    { label: "PayPal" },
] as const;

export default function FooterBottom() {
    return (
        <div className="bg-[#101828] border-t border-[#1e2939] py-6 px-4 md:px-10 xl:px-32">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[#6a7282] text-sm">
                    © 2026 FreshCart. All rights reserved.
                </p>

                <div className="flex items-center gap-6 text-[#6a7282] text-sm">
                    {PAYMENT_METHODS.map(({ label }) => (
                        <div key={label} className="flex items-center gap-2">
                            <FaCreditCard className="w-5 h-5" /> {label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}