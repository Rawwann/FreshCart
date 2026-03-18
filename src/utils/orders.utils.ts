
import { FaTruckFast, FaClock, FaCreditCard, FaMoneyBillWave } from "react-icons/fa6";
import React from "react";

export type StatusDetails = {
    label: string;
    color: string;
    bg: string;
    statusIcon: React.ReactElement;
    paymentIcon: React.ReactElement;
    paymentBg: string;
    paymentText: string;
};

export const getStatusDetails = (paymentMethod: string): StatusDetails => {
    if (paymentMethod === "card") {
        return {
            label: "On the way",
            color: "text-blue-600",
            bg: "bg-blue-100",
            statusIcon: React.createElement(FaTruckFast, { size: 12 }),
            paymentIcon: React.createElement(FaCreditCard, { size: 18 }),
            paymentBg: "bg-purple-100",
            paymentText: "text-purple-600",
        };
    }
    return {
        label: "Processing",
        color: "text-amber-600",
        bg: "bg-amber-100",
        statusIcon: React.createElement(FaClock, { size: 12 }),
        paymentIcon: React.createElement(FaMoneyBillWave, { size: 18 }),
        paymentBg: "bg-gray-100",
        paymentText: "text-gray-600",
    };
};