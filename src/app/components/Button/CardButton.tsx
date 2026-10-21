"use client";

import { EquipmentContext } from "@/app/context/CartContext";
import { GymData } from "@/app/Interface/GymData";
import { useContext } from "react";
import { toast } from "react-toastify";

interface CartButtonProps {
  equipment: GymData;
}

const CartButton = ({ equipment }: CartButtonProps) => {
    console.log(equipment)
  const context = useContext(EquipmentContext);

  if (!context) {
    throw new Error("CartButton must be used inside CartProvider");
  }

  const {
    addPlan,
    setAddPlan,
    savePlan,
    setSavePlan,
  } = context;

  const handleAddQqi = () => {
    const exist = addPlan.some(
      (eqi) => eqi.id === equipment.id
    );

    if (exist) {
      toast.warning("This item already added");
      return;
    }

    setAddPlan([...addPlan, equipment]);
    toast.success("Item Added successfully");
  };

  const handleSaveQqi = () => {
    const exist = savePlan.some(
      (eqi) => eqi.id === equipment.id
    );

    if (exist) {
      toast.warning("This item already added");
      return;
    }

    setSavePlan([...savePlan, equipment]);
    toast.success("Item Added successfully");
  };

  console.log(addPlan)

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAddQqi}
        type="button"
        className="flex items-center justify-center gap-2 rounded-lg bg-[#c6ff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#b5eb00]"
      >
        <span>▣</span>
        Add to today&apos;s plan
      </button>

      <button
        onClick={handleSaveQqi}
        type="button"
        className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-transparent px-5 py-3 text-xs font-medium text-gray-300 transition hover:border-white/20 hover:bg-white/5"
      >
        <span>♡</span>
        Save for later
      </button>
    </div>
  );
};

export default CartButton;