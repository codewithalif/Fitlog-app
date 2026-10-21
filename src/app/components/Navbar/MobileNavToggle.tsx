"use client";

import { EquipmentContext } from "@/app/context/CartContext";
import Link from "next/link";
import { useContext } from "react";

export default function MobileNavToggle() {
  const context = useContext(EquipmentContext);

  if (!context) {
    throw new Error(
      "MobileNavToggle must be used inside CartProvider"
    );
  }

  const { addPlan, savePlan } = context;

  return (
    <div className="flex items-center gap-6 px-4 py-3">
      {/* Plan Button */}
      <Link href="/myPlan">
        <button className="flex cursor-pointer items-center gap-2 text-sm text-gray-300">
          <span>Plan</span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c6ff00] text-xs font-medium text-black">
            {addPlan.length > 0 ? addPlan.length : 0}
          </span>
        </button>
      </Link>

      {/* Saved Button */}
      <Link href="/myPlan">
        <button className="flex cursor-pointer items-center gap-2 text-sm text-gray-300">
          <span>Saved</span>

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c6ff00] text-xs font-medium text-black">
            {savePlan.length > 0 ? savePlan.length : 0}
          </span>
        </button>
      </Link>
    </div>
  );
}