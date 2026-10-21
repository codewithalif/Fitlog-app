import PlanButton from "../components/Plan/PlanButton"
import PlanTab from "../components/Plan/PlanTab"

const page = () => {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
      <div>
        <h1 className="font-oswald text-xl sm:text-2xl">MY PLAN</h1>
        <p className="py-2 font-inter text-xs text-gray-500 sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Counter */}
      <div className="mt-4">
        <PlanButton />
      </div>

      {/* Tab Button */}
      <div className="mt-6">
        <PlanTab />
      </div>
    </div>
  )
}

export default page