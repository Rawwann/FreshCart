
export const SLIDES = [
    {
        id: 1,
        headline: "Fresh Products Delivered to your Door",
        subtext: "Get 20% off your first order",
        bgImage: "/supermarket.png",
        button1: { text: "Shop Now", link: "/products", textColor: "text-green-500" },
        button2: { text: "View Deals", link: "/categories" },
        titleWidth: "lg:max-w-[580px] md:max-w-[450px] max-w-[280px]"
    },
    {
        id: 2,
        headline: "Premium Quality Guaranteed",
        subtext: "Fresh from farm to your table",
        bgImage: "/supermarket.png",
        button1: { text: "Shop Now", link: "/products", textColor: "text-blue-500" },
        button2: { text: "Learn More", link: "/about" },
        titleWidth: "lg:max-w-[450px] md:max-w-[400px] max-w-[280px]"
    },
    {
        id: 3,
        headline: "Fast & Free Delivery",
        subtext: "Same day delivery available",
        bgImage: "/supermarket.png",
        button1: { text: "Order Now", link: "/products", textColor: "text-purple-600" },
        button2: { text: "Delivery Info", link: "/shipping" },
        titleWidth: "lg:max-w-[400px] md:max-w-[350px] max-w-[250px]"
    }
] as const;

export type Slide = typeof SLIDES[number];