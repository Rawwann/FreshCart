
import { Address } from "@/schema/account.schema";

// ─── Sidebar Tabs ─────────────────────────────────────────────────────────────

export const ACCOUNT_TABS = [
    { id: "addresses" as const, label: "My Addresses" },
    { id: "settings" as const, label: "Account Settings" },
] as const;

export type AccountTab = typeof ACCOUNT_TABS[number]["id"];

// ─── Initial Data ────────────────────────────────────────────────────────────────

export const INITIAL_ADDRESSES: Address[] = [
    {
        id: 1,
        name: "Nasr City",
        fullAddress: "Nasr City",
        phone: "01097514862",
        city: "Nasr City",
    },
];