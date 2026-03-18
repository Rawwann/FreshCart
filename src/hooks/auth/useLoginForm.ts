"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginPayloadType, loginSchemsa, defaultValues } from "@/schema/login.schema";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

export function useLoginForm() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const { handleSubmit, control } = useForm<LoginPayloadType>({
        defaultValues,
        resolver: zodResolver(loginSchemsa),
        mode: "onChange",
    });

    async function onSubmit(formValues: LoginPayloadType) {
        const result = await signIn("credentials", {
            email: formValues.email,
            password: formValues.password,
            redirect: false,
        });

        if (result?.ok) {
            toast.success("Login successful! Welcome back.");
            router.push("/");
            router.refresh();
        } else {
            toast.error(result?.error || "Login failed! Please check your credentials.");
        }
    }

    return {
        control,
        handleSubmit,
        onSubmit,
        showPassword,
        setShowPassword,
    };
}