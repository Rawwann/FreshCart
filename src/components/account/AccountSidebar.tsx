"use client";

import { FaLocationDot, FaGear, FaChevronRight } from "react-icons/fa6";

type Tab = "addresses" | "settings";

interface AccountSidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const navItems: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "addresses", label: "My Addresses", icon: <FaLocationDot size={14} /> },
  { id: "settings", label: "Settings", icon: <FaGear size={14} /> },
];

export default function AccountSidebar({ activeTab, setActiveTab }: AccountSidebarProps) {
  return (
    <aside className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-5 pb-3 border-b border-gray-100">
        <p className="text-sm font-bold text-black">My Account</p>
      </div>

      {/* Nav Items */}
      <nav className="p-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center justify-between gap-3 px-3 py-3 rounded-xl
                text-sm font-medium transition-all duration-200 group
                ${isActive
                  ? "bg-green-50 text-green-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                }
              `}
            >
              <span className="flex items-center gap-3">
                {/* Icon container */}
                <span
                  className={`
                    w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors
                    ${isActive
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-600"
                    }
                  `}
                >
                  {item.icon}
                </span>
                {item.label}
              </span>
              <FaChevronRight
                size={16}
                className={`${isActive ? "text-green-500" : "text-gray-300 group-hover:text-gray-400"} transition-colors`}
              />
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
