
export const CATEGORIES = [
    "Music",
    "Men's Fashion",
    "Women's Fashion",
    "SuperMarket",
    "Baby & Toys",
    "Home",
    "Books",
    "Beauty & Health",
] as const;

export const BRANDS = [
    "Canon",
    "Dell",
    "Lenovo",
    "SONY",
    "Infinix",
    "Realme",
    "HONOR",
    "Nokia",
] as const;

export const PRICE_PRESETS = [
    { label: "Under 500", min: 0, max: 500 },
    { label: "Under 1K", min: 0, max: 1000 },
    { label: "Under 5K", min: 0, max: 5000 },
    { label: "Under 10K", min: 0, max: 10000 },
] as const;

export const SORT_OPTIONS = [
    { value: "", label: "Relevance" },
    { value: "price", label: "Price: Low to High" },
    { value: "-price", label: "Price: High to Low" },
    { value: "-ratingsAverage", label: "Rating: High to Low" },
    { value: "title", label: "Name: A to Z" },
    { value: "-title", label: "Name: Z to A" },
] as const;