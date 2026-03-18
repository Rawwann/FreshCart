"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { addressSchema, Address, AddressForm } from "@/schema/account.schema";
import { INITIAL_ADDRESSES } from "@/constants/account/account.constants";

export function useMyAddresses() {
    const [addresses, setAddresses] = useState<Address[]>(INITIAL_ADDRESSES);
    const [showModal, setShowModal] = useState(false);
    const [editId, setEditId] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddressForm>({
        resolver: zodResolver(addressSchema),
    });

    const openAdd = () => {
        setEditId(null);
        reset({ name: "", fullAddress: "", phone: "", city: "" });
        setShowModal(true);
    };

    const openEdit = (addr: Address) => {
        setEditId(addr.id);
        reset({ name: addr.name, fullAddress: addr.fullAddress, phone: addr.phone, city: addr.city });
        setShowModal(true);
    };

    const handleDelete = (id: number) => {
        setAddresses((prev) => prev.filter((a) => a.id !== id));
        toast.success("Address deleted successfully");
    };

    const onValid = (data: AddressForm) => {
        if (editId !== null) {
            setAddresses((prev) => prev.map((a) => (a.id === editId ? { ...a, ...data } : a)));
            toast.success("Address updated successfully");
        } else {
            setAddresses((prev) => [...prev, { id: Date.now(), ...data }]);
            toast.success("Address added successfully");
        }
        setShowModal(false);
    };

    return {
        addresses,
        showModal,
        setShowModal,
        editId,
        register,
        handleSubmit,
        errors,
        openAdd,
        openEdit,
        handleDelete,
        onValid,
    };
}