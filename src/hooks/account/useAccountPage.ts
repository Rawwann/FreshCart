import { useState } from "react";
import { AccountTab } from "@/constants/account/account.constants";

export function useAccountPage() {
    const [activeTab, setActiveTab] = useState<AccountTab>("addresses");

    return { activeTab, setActiveTab };
}