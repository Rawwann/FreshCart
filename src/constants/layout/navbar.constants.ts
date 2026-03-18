
export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "Categories", href: "/categories" },
    { label: "Brands", href: "/brands" },
] as const;

export const CATEGORIES_DROPDOWN = [
    { label: "All Categories", href: "/categories" },
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Women's Fashion", href: "/categories/womens-fashion" },
    { label: "Men's Fashion", href: "/categories/mens-fashion" },
    { label: "Beauty & Health", href: "/categories/beauty-health" },
] as const;