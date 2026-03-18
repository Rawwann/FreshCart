"use client";

import AccountHeader from "./AccountHeader";
import AccountSidebar from "./AccountSidebar";
import MyAddressesView from "./MyAddressesView";
import SettingsView from "./SettingsView";
import { useAccountPage } from "@/hooks/account/useAccountPage";

export default function AccountPage() {
  const { activeTab, setActiveTab } = useAccountPage();

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* ─── Header Section  ─── */}
      <AccountHeader />

      {/* ─── Main Content ─── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/4">
            <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Dynamic Content */}
          <div className="w-full md:w-3/4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {activeTab === "addresses" ? <MyAddressesView /> : <SettingsView />}
          </div>

        </div>
      </div>
    </div>
  );
}