import { Metadata } from "next";
import RegisterFeatures from "@/components/auth/RegisterFeatures";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
    title: "Create an Account | FreshCart",
    description: "Join FreshCart today and explore thousands of fresh products at your fingertips.",
};

export default function RegisterPage() {
    return (
        <section className="py-12 lg:py-20 bg-white min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
                <div className="w-full lg:max-w-154 flex flex-col gap-8 order-1 lg:order-0">
                    <RegisterFeatures />
                </div>
                <div className="w-full lg:max-w-154 order-2 lg:order-0">
                    <RegisterForm />
                </div>
            </div>
        </section>
    );
}