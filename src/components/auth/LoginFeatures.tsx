import { FaTruck, FaShieldHalved, FaHeadset } from "react-icons/fa6";

const MICRO_FEATURES = [
    { icon: <FaTruck className="text-green-600" />, label: "Free Delivery" },
    { icon: <FaShieldHalved className="text-green-600" />, label: "Secure Payment" },
    { icon: <FaHeadset className="text-green-600" />, label: "24/7 Support" },
];

export default function LoginFeatures() {
    return (
        <div className="flex flex-col gap-6 lg:gap-8 w-full order-1 lg:order-0">
            <div className="w-full h-96 relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                    src="/cart.png"
                    alt="FreshCart Shopping"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col gap-4 text-center lg:text-center">
                <h1 className="text-3xl font-bold text-[#101828] leading-tight">
                    FreshCart - Your One-Stop Shop for Fresh Products
                </h1>
                <p className="text-lg text-[#4A5565] font-medium leading-relaxed">
                    Join thousands of happy customers who trust FreshCart for their daily grocery needs
                </p>

                {/* Micro Features */}
                <div className="flex flex-wrap justify-center lg:justify-center items-center gap-6 mt-2">
                    {MICRO_FEATURES.map(({ icon, label }) => (
                        <div key={label} className="flex items-center gap-2 text-sm text-[#6A7282] font-medium">
                            {icon} {label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}