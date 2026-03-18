"use client";

import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { toast } from "sonner";
import AddressCard from "./address/AddressCard";
import AddressModal from "./address/AddressModal";
import { useMyAddresses } from "@/hooks/account/useMyAddresses";

export default function MyAddressesView() {
  const {
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
  } = useMyAddresses();

  return (
    <div>
      <div className="flex items-center justify-between mb-4 px-1">
        <div>
          <h2 className="text-xl font-bold text-gray-800">My Addresses</h2>
          <p className="text-sm text-gray-500 mt-0.5">Manage your saved delivery addresses</p>
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
        >
          <FaPlus size={16} />
          Add Address
        </button>
      </div>

      <div className="w-full flex-1 space-y-6">
        {addresses.map((addr) => (
          <AddressCard
            key={addr.id}
            addr={addr}
            onEdit={openEdit}
            onDelete={handleDelete}
          />
        ))}

        {addresses.length === 0 && (
          <div className="w-full bg-white rounded-2xl border border-gray-100 p-16 text-center shadow-sm mx-auto flex flex-col items-center justify-center transition-all duration-300">
            <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-6 shadow-inner">
              <FaLocationDot size={32} className="text-gray-400 opacity-60" />
            </div>
            <h3 className="text-xl font-bold text-[#1F2937] mb-2 font-exo">No Addresses Yet</h3>
            <p className="text-gray-500 text-sm max-w-70 leading-relaxed mb-8 font-exo font-medium">
              Add your first delivery address to make checkout faster and easier.
            </p>
            <button
              onClick={openAdd}
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20"
            >
              <FaPlus size={18} strokeWidth={3} />
              Add Your First Address
            </button>
          </div>
        )}
      </div>

      {showModal && (
        <AddressModal
          editId={editId}
          register={register}
          handleSubmit={handleSubmit(onValid, () => toast.error("Please fill in all required fields"))}
          errors={errors}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}