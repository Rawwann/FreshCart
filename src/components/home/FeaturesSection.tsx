import React from 'react';
import { FaTruckFast, FaShieldHalved, FaArrowRotateLeft, FaHeadset } from 'react-icons/fa6';

const features = [
  {
    id: 1,
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: FaTruckFast,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    title: "Secure Payment",
    description: "100% secure checkout",
    icon: FaShieldHalved,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "14-day return policy",
    icon: FaArrowRotateLeft,
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Dedicated assistance",
    icon: FaHeadset,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#f8f9fa] py-10 mt-0 border-y border-gray-100">
      <div className="max-w-[1920px] mx-auto px-4 md:px-10 xl:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out group"
            >
              <div className={`w-12 h-12 shrink-0 ${feature.bgColor} rounded-full flex items-center justify-center`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>

              <div className="flex flex-col">
                <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">{feature.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};