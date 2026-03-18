"use client";

import { useState } from 'react';

export function useNewsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return { email, setEmail, status, handleSubmit };
}