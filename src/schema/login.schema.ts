import * as z from "zod"

export const defaultValues = {
    email: "",
    password: ""
}

export const loginSchemsa = z.object({
    email: z.string().email({ error: "Invalid email address" }),
    password: z.string().nonempty({ error: "Password is required" }).regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Password must be at least 8 characters long and contain at least one letter and one number" })
})

export type LoginPayloadType = z.infer<typeof loginSchemsa>
