import { z } from "zod";

export const addressSchema = z.object({
  name: z.string().min(1, "Address name is required"),
  fullAddress: z.string().min(1, "Full address is required"),
  phone: z.string().min(1, "Phone number is required"),
  city: z.string().min(1, "City is required"),
});

export const profileSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number (e.g. 01012345678)"),
});

export const passwordSchema = z
  .object({
    current: z.string().min(1, "Current password is required"),
    newPass: z.string().min(6, "Password must be at least 6 characters"),
    confirm: z.string().min(1, "Please confirm your new password"),
  })
  .refine((d) => d.newPass === d.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export type AddressForm = z.infer<typeof addressSchema>;
export type ProfileForm = z.infer<typeof profileSchema>;
export type PasswordForm = z.infer<typeof passwordSchema>;

export interface Address extends AddressForm {
  id: number;
}