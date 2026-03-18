
export const getWishlistDetailsClasses = (isInWishlist: boolean, className: string): string =>
    `flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 ${isInWishlist
        ? "border-red-200 text-red-600 bg-red-50"
        : "border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600"
    } ${className}`;

export const getWishlistIconClasses = (isInWishlist: boolean): string =>
    `p-2 rounded-full transition-all duration-300 cursor-pointer ${isInWishlist
        ? "text-red-600 bg-red-50"
        : "text-gray-400 bg-white hover:text-red-500 shadow-sm"
    }`;