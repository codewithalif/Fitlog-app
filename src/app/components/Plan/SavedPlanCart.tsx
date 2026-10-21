import { GymData } from "@/app/Interface/GymData";
import Image from "next/image";
import SavePlanButton from "./SavePlanButton";

const SavePlanCart = ({ workout }: { workout: GymData }) => {
  return (
    <div className="@container w-full rounded-xl border border-[#252a32] bg-[#15181e] p-3 @sm:p-4">
      <div className="flex flex-col gap-3 @sm:flex-row @sm:items-center @sm:justify-between @sm:gap-4">

        {/* Left Side */}
        <div className="flex min-w-0 flex-1 items-center gap-3 @sm:gap-4">

          {/* Image */}
          <Image
            src={workout.image}
            alt={workout.name}
            width={95}
            height={64}
            className="h-16 w-20 shrink-0 rounded-lg object-cover @sm:h-20 @sm:w-32 @lg:h-24 @lg:w-36"
          />

          {/* Workout Info */}
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-oswald text-sm font-bold uppercase text-white @sm:text-lg @lg:text-xl">
              {workout.name}
            </h3>

            <p className="mt-0.5 truncate text-xs text-[#777d87] @sm:text-sm">
              {workout.equipment}
            </p>

            {/* Stats */}
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#a0a5ad] @sm:gap-x-4 @sm:text-sm">

              {/* Duration */}
              <span className="flex items-center gap-1">
                <span className="text-[#c8ff00]">◷</span>
                {workout.duration} min
              </span>

              {/* Calories */}
              <span className="flex items-center gap-1">
                <span className="text-[#c8ff00]">♨</span>
                {workout.reps} kcal
              </span>

              {/* Rating */}
              <span className="flex items-center gap-1">
                <span className="text-[#c8ff00]">☆</span>
                {workout.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-end shrink-0 @sm:justify-start">
          <SavePlanButton key={workout.id} workout={workout} />
        </div>
      </div>
    </div>
  );
};

export default SavePlanCart;