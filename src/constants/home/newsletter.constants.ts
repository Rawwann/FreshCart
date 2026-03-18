
import { Leaf, Truck, Tag } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa6';

export const PILLS = [
    { icon: Leaf, text: 'Fresh Picks Weekly' },
    { icon: Truck, text: 'Free Delivery Codes' },
    { icon: Tag, text: 'Members-Only Deals' },
] as const;

export const APP_STORE_BUTTONS = [
    { icon: FaApple, text: 'DOWNLOAD ON', store: 'App Store' },
    { icon: FaGooglePlay, text: 'GET IT ON', store: 'Google Play' },
] as const;