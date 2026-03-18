/**
 * Formats a given number into a standardized EGP currency string.
 *
 * @param price - The price to format
 * @returns A formatted currency string (e.g., "EGP 1,234.56")
 */
export const formatPrice = (price: number): string => {
  const roundedPrice = Math.round(price);
  const formattedNumber = new Intl.NumberFormat('en-US').format(roundedPrice);
  return `${formattedNumber}`;
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};