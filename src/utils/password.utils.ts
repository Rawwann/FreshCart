
export type PasswordStrength = {
    width: "w-0" | "w-1/3" | "w-2/3" | "w-full";
    color: "bg-transparent" | "bg-red-500" | "bg-yellow-400" | "bg-green-500";
    text: "Weak" | "Medium" | "Strong";
};

export const getPasswordStrength = (pass: string = ""): PasswordStrength => {
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (pass.match(/[a-z]/)) score += 1;
    if (pass.match(/[A-Z]/)) score += 1;
    if (pass.match(/[0-9]/)) score += 1;
    if (pass.match(/[^a-zA-Z0-9]/)) score += 1;

    if (pass.length === 0) return { width: "w-0", color: "bg-transparent", text: "Weak" };
    if (score <= 2) return { width: "w-1/3", color: "bg-red-500", text: "Weak" };
    if (score <= 4) return { width: "w-2/3", color: "bg-yellow-400", text: "Medium" };
    return { width: "w-full", color: "bg-green-500", text: "Strong" };
};