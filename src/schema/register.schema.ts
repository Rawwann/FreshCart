import * as z from "zod"

export const defaultValues = {
    email: "",
    name: "",
    password: "",
    repassword: "",
    phone: ""
}

export const registerSchema = z.object({
    email: z.string().email({ error: "Invalid email address" }),
    name: z.string().min(2, { error: "Name must be at least 2 characters long" }).max(100, { error: "Name must be less than 100 characters long" }),
    password: z.string().nonempty({ error: "Password is required" }).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Password must be at least 8 characters long and contain at least one letter and one number" }),
    rePassword: z.string().nonempty({ error: "Please confirm your password" }),
    phone: z.string().regex(/^01[0125][0-9]{8}$/, { error: "Invalid phone number" })
}).refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"]
});

export type RegisterPayloadType = z.infer<typeof registerSchema>;
