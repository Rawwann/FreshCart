
export const calculateDiscountPercentage = (price: number, priceAfterDiscount: number): number => {
    return Math.round(((price - priceAfterDiscount) / price) * 100) || 0;
};