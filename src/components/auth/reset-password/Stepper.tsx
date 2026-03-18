"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa";
import { RESET_PASSWORD_STEPS } from "@/constants/reset-password/reset-password.constants";

export function Stepper({ currentStep }: { currentStep: number }) {
    return (
        <div className="flex items-center justify-center w-full max-w-md mx-auto">
            {RESET_PASSWORD_STEPS.map(({ step, icon: Icon }, index) => (
                <React.Fragment key={step}>
                    <StepCircle
                        active={currentStep === step}
                        completed={currentStep > step}
                        icon={<Icon className="h-4 w-4" />}
                    />
                    {index < RESET_PASSWORD_STEPS.length - 1 && (
                        <StepLine completed={currentStep > step} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

function StepCircle({ active, completed, icon }: { active: boolean; completed: boolean; icon: React.ReactNode }) {
    return (
        <div className={cn(
            "relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
            active ? "bg-[#16A34A] text-white ring-4 ring-[#DCFCE7]" :
                completed ? "bg-[#16A34A] text-white" :
                    "bg-[#F3F4F6] text-[#9CA3AF]"
        )}>
            {completed ? <FaCheck className="h-3.5 w-4 animate-in zoom-in duration-300" /> : icon}
        </div>
    );
}

function StepLine({ completed }: { completed: boolean }) {
    return (
        <div className={cn(
            "h-0.5 w-16 mx-2 transition-colors duration-300",
            completed ? "bg-green-500" : "bg-gray-200"
        )} />
    );
}