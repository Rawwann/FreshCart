
import { FaStar, FaTruck, FaShieldHalved } from "react-icons/fa6";

const REGISTER_FEATURES = [
    {
        icon: <FaStar className="w-5 h-5 text-green-600" />,
        title: "Premium Quality",
        desc: "Premium quality products sourced from trusted suppliers.",
    },
    {
        icon: <FaTruck className="w-5 h-5 text-green-600" />,
        title: "Fast Delivery",
        desc: "Same-day delivery available in most areas",
    },
    {
        icon: <FaShieldHalved className="w-5 h-5 text-green-600" />,
        title: "Secure Shopping",
        desc: "Your data and payments are completely secure",
    },
];

export default function RegisterFeatures() {
    return (
        <div className="flex flex-col gap-6 lg:gap-8 pt-2 lg:pt-8 order-1 lg:order-0 w-full">
            <div className="w-full">
                <h1 className="text-3xl lg:text-5xl font-bold text-[#364153] mb-3 lg:mb-4">
                    Welcome to <span className="text-green-600">FreshCart</span>
                </h1>
                <p className="text-lg lg:text-xl text-[#364153] font-medium leading-relaxed w-full">
                    Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
                </p>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8 py-2 lg:py-6 w-full">
                {REGISTER_FEATURES.map(({ icon, title, desc }) => (
                    <FeatureItem key={title} icon={icon} title={title} desc={desc} />
                ))}
            </div>

            {/* Testimonial Card */}
            <div className="bg-white p-6 rounded-lg shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-gray-100 mt-0 lg:mt-2 w-full lg:w-[90%] xl:w-[85%]">
                <div className="flex items-center gap-4 mb-4">
                    <img src="/avater.png" alt="Sarah Johnson" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                        <h4 className="text-[#364153] font-medium">Sarah Johnson</h4>
                        <div className="flex text-[#FFDF20] mt-1 gap-1">
                            {[...Array(5)].map((_, i) => <FaStar key={i} className="w-4 h-4" />)}
                        </div>
                    </div>
                </div>
                <p className="text-[#4A5565] italic font-medium leading-relaxed text-sm w-full">
                    "FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"
                </p>
            </div>
        </div>
    );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-[#364153]">{title}</h3>
                <p className="text-[#4A5565] font-medium mt-1">{desc}</p>
            </div>
        </div>
    );
}