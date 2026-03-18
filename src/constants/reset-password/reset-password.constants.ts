
import { FaEnvelope, FaKey, FaLock } from "react-icons/fa";

// ─── Step Definitions ─────────────────────────────────────────────────────────

export const RESET_PASSWORD_STEPS = [
    {
        step: 1 as const,
        icon: FaEnvelope,
        title: "Forgot Password?",
        description: "No worries, we'll send you a reset code.",
    },
    {
        step: 2 as const,
        icon: FaKey,
        title: "Check Your Email",
        description: "Enter the 6-digit code sent to your email.",
    },
    {
        step: 3 as const,
        icon: FaLock,
        title: "Create New Password",
        description: "Your new password must be different from previous passwords.",
    },
] as const;

export const RESET_PASSWORD_STEP_COUNT = RESET_PASSWORD_STEPS.length;

export const getStep2Description = (email: string): string =>
    `Enter the 6-digit code sent to ${email || "your email"}.`;