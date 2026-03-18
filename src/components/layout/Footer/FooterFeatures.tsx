
import {
    FaTruck,
    FaArrowRotateLeft,
    FaShieldHalved,
    FaHeadset,
} from "react-icons/fa6";

const FOOTER_FEATURES = [
    { icon: FaTruck, title: "Free Shipping", desc: "On orders over 500 EGP" },
    { icon: FaArrowRotateLeft, title: "Easy Returns", desc: "14-day return policy" },
    { icon: FaShieldHalved, title: "Secure Payment", desc: "100% secure checkout" },
    { icon: FaHeadset, title: "24/7 Support", desc: "Contact us anytime" },
] as const;

export default function FooterFeatures() {
    return (
        <div className="bg-[#f0fdf4] border-y border-green-100 py-8 px-4 md:px-10 xl:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {FOOTER_FEATURES.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                            <Icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-gray-900 font-semibold text-sm">{title}</h4>
                            <p className="text-gray-500 text-xs mt-1">{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}