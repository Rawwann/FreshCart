"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, passwordSchema, ProfileForm, PasswordForm } from "@/schema/account.schema";

type AlertState = null | "success" | "error";
type ShowPass = { current: boolean; newPass: boolean; confirm: boolean };

export function useSettingsView() {
    const [profileAlert, setProfileAlert] = useState<AlertState>(null);
    const [passwordAlert, setPasswordAlert] = useState<AlertState>(null);
    const [showPass, setShowPass] = useState<ShowPass>({
        current: false,
        newPass: false,
        confirm: false,
    });

    const toggle = (field: keyof ShowPass) =>
        setShowPass((prev) => ({ ...prev, [field]: !prev[field] }));

    const profile = useForm<ProfileForm>({
        resolver: zodResolver(profileSchema),
        mode: "onChange",
        defaultValues: { fullName: "", email: "", phone: "" },
    });

    const password = useForm<PasswordForm>({
        resolver: zodResolver(passwordSchema),
        mode: "onChange",
        defaultValues: { current: "", newPass: "", confirm: "" },
    });

    return {
        profileAlert,
        setProfileAlert,
        passwordAlert,
        setPasswordAlert,
        showPass,
        toggle,
        profile,
        password,
    };
}