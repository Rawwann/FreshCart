"use client";

export function useProductCardHover() {
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.10)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'rgba(0, 0, 0, 0) 0px 0px 0px 0px';
        (e.currentTarget as HTMLDivElement).style.transform = 'none';
    };

    return { handleMouseEnter, handleMouseLeave };
}