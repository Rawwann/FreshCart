"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterPayloadType, registerSchema } from "@/schema/register.schema";
import { defaultValues } from "@/schema/login.schema";
import { registerHandler } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useRegisterForm() {
    const router = useRouter();

    const { handleSubmit, control } = useForm<RegisterPayloadType>({
        defaultValues,
        resolver: zodResolver(registerSchema),
        mode: "onChange",
    });

    async function onSubmit(formValues: RegisterPayloadType) {
        const resp = await registerHandler(formValues);
        if (resp.success) {
            toast.success("Registration successful! Welcome.");
            router.push("/");
        } else {
            toast.error(resp.message || "Registration failed!");
        }
    }

    return {
        control,
        handleSubmit,
        onSubmit,
    };
}