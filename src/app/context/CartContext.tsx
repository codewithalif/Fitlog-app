"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { GymData } from "../Interface/GymData";

type EquipmentContextType = {
  addPlan: GymData[];
  setAddPlan: Dispatch<SetStateAction<GymData[]>>;
  savePlan: GymData[];
  setSavePlan: Dispatch<SetStateAction<GymData[]>>;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

export const EquipmentContext = createContext<EquipmentContextType>({
  addPlan: [],
  setAddPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
  activeTab: "saved",
  setActiveTab: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [addPlan, setAddPlan] = useState<GymData[]>([]);
  const [savePlan, setSavePlan] = useState<GymData[]>([]);
  const [activeTab, setActiveTab] = useState("saved");

  return (
    <EquipmentContext.Provider
      value={{
        addPlan,
        setAddPlan,
        savePlan,
        setSavePlan,
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </EquipmentContext.Provider>
  );
};

export default CartProvider;