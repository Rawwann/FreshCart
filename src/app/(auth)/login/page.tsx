import { Metadata } from "next";
import LoginFeatures from "@/components/auth/LoginFeatures";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
    title: "Login | FreshCart",
    description: "Welcome back! Login to access your cart, wishlist, and personalized offers.",
};

export default function LoginPage() {
    return (
        <section className="py-8 lg:py-16 bg-white min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex items-center lg:items-center justify-center gap-12">
                <div className="hidden lg:flex w-154 flex-col gap-6">
                    <LoginFeatures />
                </div>
                <div className="w-full lg:w-154">
                    <LoginForm />
                </div>
            </div>
        </section>
    );
}