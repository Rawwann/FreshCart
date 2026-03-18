"use client"

import { Controller } from "react-hook-form";
import { useRegisterForm } from "@/hooks/auth/useRegisterForm";
import { REGISTER_INPUT_CLASSES } from "@/constants/auth/auth.constants";
import { getPasswordStrength } from "@/utils/password.utils";
import Link from "next/link";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaFacebookF, FaUserPlus } from "react-icons/fa6";

export default function RegisterForm() {
    const { control, handleSubmit, onSubmit } = useRegisterForm();

    return (
        <div className="bg-white shadow-[0px_4px_15px_-3px_rgba(0,0,0,0.1)] rounded-2xl p-6 sm:p-10 border border-gray-50 w-full max-w-lg mx-auto lg:mx-0 order-2 lg:order-0">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold text-[#364153]">Create Your Account</h2>
                <p className="text-[#364153] font-medium mt-2">Start your fresh journey with us today</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <button type="button" className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-[#101828]">
                    <FaGoogle className="text-red-500 w-4 h-4" /> Google
                </button>
                <button type="button" className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-[#101828]">
                    <FaFacebookF className="text-blue-600 w-4 h-4" /> Facebook
                </button>
            </div>

            <div className="relative flex items-center py-4 mb-6">
                <div className="grow border-t border-gray-200"></div>
                <span className="shrink-0 mx-4 text-[#364153] font-medium">or</span>
                <div className="grow border-t border-gray-200"></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <FieldGroup className="flex flex-col gap-2">
                    <Controller name="name" control={control} render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name} className="text-[#364153] font-medium">Name*</FieldLabel>
                            <Input {...field} id={field.name} placeholder="Ali" className={REGISTER_INPUT_CLASSES} />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )} />
                </FieldGroup>

                <FieldGroup className="flex flex-col gap-2">
                    <Controller name="email" control={control} render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name} className="text-[#364153] font-medium">Email*</FieldLabel>
                            <Input {...field} id={field.name} placeholder="ali@example.com" type="email" className={REGISTER_INPUT_CLASSES} />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )} />
                </FieldGroup>

                <FieldGroup className="flex flex-col gap-2">
                    <Controller name="password" control={control} render={({ field, fieldState }) => {
                        const strength = getPasswordStrength(field.value);
                        return (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name} className="text-[#364153] font-medium">Password*</FieldLabel>
                                <Input {...field} id={field.name} placeholder="create a strong password" type="password" className={REGISTER_INPUT_CLASSES} />
                                <div className="flex items-center gap-3 mt-2">
                                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className={`h-full transition-all duration-300 ${strength.color} ${strength.width}`}></div>
                                    </div>
                                    <span className="text-sm font-medium text-[#364153] min-w-12.5 text-right">{strength.text}</span>
                                </div>
                                <p className="text-xs font-medium text-[#6A7282] mt-1">Must be at least 8 characters with numbers and symbols</p>
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        );
                    }} />
                </FieldGroup>

                <FieldGroup className="flex flex-col gap-2">
                    <Controller name="rePassword" control={control} render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name} className="text-[#364153] font-medium">Confirm Password*</FieldLabel>
                            <Input {...field} id={field.name} placeholder="confirm your password" type="password" className={REGISTER_INPUT_CLASSES} />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )} />
                </FieldGroup>

                <FieldGroup className="flex flex-col gap-2">
                    <Controller name="phone" control={control} render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name} className="text-[#364153] font-medium">Phone Number*</FieldLabel>
                            <Input {...field} id={field.name} placeholder="+1 234 567 8900" className={REGISTER_INPUT_CLASSES} />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )} />
                </FieldGroup>

                <div className="flex items-center gap-2 py-2">
                    <input type="checkbox" id="terms" required className="size-4 accent-green-600 cursor-pointer" />
                    <label htmlFor="terms" className="ms-2 text-[#364153] font-medium text-sm">
                        I agree to the <Link href="/terms" className="text-green-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link> *
                    </label>
                </div>

                <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700 h-12 text-base font-semibold flex items-center justify-center gap-2 transition-colors">
                    <FaUserPlus className="w-5 h-5" />
                    <span>Create My Account</span>
                </Button>
            </form>

            <div className="text-center mt-8 border-t border-gray-100 pt-6">
                <p className="text-[#364153] font-medium">
                    Already have an account? <Link href="/login" className="text-green-600 hover:underline">Sign In</Link>
                </p>
            </div>
        </div>
    );
}