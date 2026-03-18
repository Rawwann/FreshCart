export const LOGIN_INPUT_CLASSES =
    "w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-100 focus-visible:border-green-500 transition-all focus-visible:ring-offset-0 h-auto";

export const REGISTER_INPUT_CLASSES =
    "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-green-600 border-gray-300";

export const LOGIN_MICRO_FEATURES = [
    { icon: "truck", label: "Free Delivery" },
    { icon: "shield", label: "Secure Payment" },
    { icon: "headset", label: "24/7 Support" },
] as const;

export const REGISTER_FEATURES = [
    {
        iconName: "star",
        title: "Premium Quality",
        desc: "Premium quality products sourced from trusted suppliers.",
    },
    {
        iconName: "truck",
        title: "Fast Delivery",
        desc: "Same-day delivery available in most areas",
    },
    {
        iconName: "shield",
        title: "Secure Shopping",
        desc: "Your data and payments are completely secure",
    },
] as const;