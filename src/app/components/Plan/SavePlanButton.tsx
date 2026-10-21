import { EquipmentContext } from '@/app/context/CartContext'
import { GymData } from '@/app/Interface/GymData'
import Link from 'next/link'
import { useContext } from 'react'
import { toast } from 'react-toastify'

const SavePlanButton = ({ workout }: { workout: GymData }) => {
  const {  setSavePlan } = useContext(EquipmentContext)

  const handleDelet = () => {
    setSavePlan((prev) => prev.filter((item) => item.id !== workout.id))
    toast.warning("Item removed")
  }

  return (
    <div className="flex w-full items-center justify-end gap-2 sm:w-auto">

      {/* View Details */}
      <Link
        href={`/equipment/${workout.id}`}
        className="whitespace-nowrap rounded-full border border-[#353b45] px-3 py-1.5 text-[10px] text-[#d1d4d8] transition hover:border-[#c8ff00] hover:text-white sm:px-4 sm:py-2 sm:text-xs"
      >
        View Details
      </Link>

      {/* Close */}
      <button
        onClick={handleDelet}
        className="shrink-0 px-1 text-lg text-[#626873] transition hover:text-white"
        aria-label="Remove workout"
      >
        ×
      </button>
    </div>
  )
}

export default SavePlanButton