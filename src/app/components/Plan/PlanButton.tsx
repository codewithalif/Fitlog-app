'use client'
import { EquipmentContext } from '@/app/context/CartContext'
import { GymData } from '@/app/Interface/GymData'
import { useContext } from 'react'

const PlanButton = () => {
    const { activeTab, addPlan, savePlan } = useContext(EquipmentContext)

    const plan = activeTab === "saved" ? savePlan : addPlan

    const exercise = plan.length
    const totalMinute = plan.reduce((total: number, item: GymData) => total + item.duration, 0)
    const totalCalories = plan.reduce((total: number, item: GymData) => total + item.caloriesBurned, 0)

    return (
        <div className="grid grid-cols-3 gap-4 rounded-2xl bg-black px-4 py-8 my-10 sm:px-6">
            <div className="flex flex-col items-center">
                <span className="font-inter text-gray-500">Excercise</span>
                <span className="font-oswald text-xl font-bold text-[#CCFF00] md:text-4xl">{exercise}</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="font-inter text-gray-500">Minutes</span>
                <span className="font-oswald text-xl font-bold md:text-4xl">{totalMinute}</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="font-inter text-gray-500">Calories</span>
                <span className="font-oswald text-xl font-bold md:text-4xl">{totalCalories}</span>
            </div>
        </div>
    )
}

export default PlanButton