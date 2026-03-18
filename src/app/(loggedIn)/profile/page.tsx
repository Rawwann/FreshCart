import { Metadata } from "next";
import AccountPage from "@/components/account/AccountPage";

export const metadata: Metadata = {
  title: "My Account | FreshCart",
  description: "Manage your profile, view orders, and update your personal settings.",
};

export default function AccountRoute() {
  return <AccountPage />;
}