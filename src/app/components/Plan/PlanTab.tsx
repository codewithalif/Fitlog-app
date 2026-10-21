"use client";

import { EquipmentContext } from "@/app/context/CartContext";
import { useContext, useState } from "react";
import TodaysPlanCart from "./TodaysPlanCart";
import { GymData } from "@/app/Interface/GymData";
import SavePlanCart from "./SavedPlanCart";
import Link from "next/link";

const PlanTab = () => {

    const { addPlan, savePlan, activeTab, setActiveTab } = useContext(EquipmentContext)
    const [select, setSelect] = useState("Sort By")

    const filteredItem = (item: GymData[]) => {
        const equipment = [...item]
        if (select === "duration") {
            equipment.sort((a, b) => b.duration - a.duration)
        } else if (select === "rating") {
            equipment.sort((a, b) => b.rating - a.rating)
        } else if (select === "caloriesBurned") {
            equipment.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
        }
        return equipment
    }

    const saveItem = filteredItem(savePlan)
    const addItem = filteredItem(addPlan)

    return (
        <div className="w-full px-4 sm:px-6">
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0">
                {/* Today's Plan */}
                <div className="flex w-full sm:w-fit items-center rounded-xl border border-[#242932] bg-[#171a20]">
                    <button
                        onClick={() => setActiveTab("today")}
                        className={`flex-1 sm:flex-none rounded-lg px-3 sm:px-4 py-2 text-xs font-medium transition-all duration-200 ${activeTab === "today"
                            ? "bg-[#252b34] text-white shadow-sm"
                            : "text-[#858b96] hover:text-white"
                            }`}
                    >
                        Today's Plan
                    </button>

                    {/* Saved */}
                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`flex-1 sm:flex-none rounded-lg px-3 sm:px-5 py-2 text-xs font-medium transition-all duration-200 ${activeTab === "saved"
                            ? "bg-[#252b34] text-white shadow-sm"
                            : "text-[#858b96] hover:text-white"
                            }`}
                    >
                        Saved
                    </button>
                </div>

                {/* filter tab */}
                <div className="w-full sm:w-auto">
                    <select
                        onChange={(e) =>
                            setSelect(e.target.value as "duration" | "rating" | "caloriesBurned")
                        }
                        defaultValue="Server location"
                        className="select select-neutral w-full sm:w-auto"
                    >
                        <option disabled={true}>Sort By</option>
                        <option value={"duration"}>Duration</option>
                        <option value={"rating"}>Rating</option>
                        <option value={"caloriesBurned"}>Calories Burned</option>
                    </select>
                </div>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "today" && (
                    <div className="rounded-xl border border-dashed border-[#292e36] py-10 px-4 sm:px-0 space-y-3 text-center">
                        {addPlan.length > 0 ? (
                            <div className="grid grid-cols-1  gap-4 text-left">
                                {addItem.map((workout: GymData) => (
                                    <TodaysPlanCart
                                        key={workout.id}
                                        workout={workout}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">
                                    NOTHING HERE YET
                                </h2>

                                <p className="mt-2 text-sm text-[#858b96]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link href={"/"}>
                                    <button className="mt-5 rounded-full bg-[#c8ff00] px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-[#b8ed00]">
                                        Go to workouts
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === "saved" && (
                    <div className="rounded-xl border border-dashed border-[#292e36] py-10 px-4 sm:px-0 space-y-3 text-center">
                        {savePlan.length > 0 ? (
                            <div className="grid grid-cols-1   gap-4 text-left">
                                {saveItem.map((workout) => (
                                    <SavePlanCart
                                        key={workout.id}
                                        workout={workout}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">
                                    NOTHING HERE YET
                                </h2>

                                <p className="mt-2 text-sm text-[#858b96]">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link href={"/"}>
                                    <button className="mt-5 rounded-full bg-[#c8ff00] px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-[#b8ed00]">
                                        Go to workouts
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlanTab;