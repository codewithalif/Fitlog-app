import CartButton from "@/app/components/Button/CartButton";
import Image from "next/image";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const equipmentPromis = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`,
  );
  const equipment = await equipmentPromis.json();

  return (
    <section className="w-full bg-[#0d0f13] py-8 sm:py-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_1fr] lg:gap-7 xl:gap-9">
          {/* ================= IMAGE ================= */}
          <div className="relative h-[260px] w-full overflow-hidden rounded-xl xs:h-[300px] sm:h-[400px] lg:h-[520px]">
            <Image
              src={equipment.image}
              alt={equipment.name}
              fill
              className="object-cover"
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div>
            {/* Title */}
            <h1 className="font-oswald text-2xl font-bold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
              {equipment.name}
            </h1>

            {/* Description */}
            <p className="font-inter mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              {equipment.description}
            </p>

            {/* Muscle Groups */}
            <div className="font-inter mt-4 flex flex-wrap gap-2">
              {equipment?.muscleGroups?.map((muscle: string) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c6ff00] px-3 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= INFO BOX ================= */}
            <div className="mt-5 overflow-hidden rounded-xl border border-white/5 bg-[#15181e]">
              {[
                { label: "Equipment", value: equipment.equipment },
                { label: "Difficulty", value: equipment.difficulty },
                { label: "Sets", value: equipment.sets },
                { label: "Reps", value: equipment.reps },
                { label: "Duration", value: `${equipment.duration} min` },
                {
                  label: "Calories",
                  value: `${equipment.caloriesBurned} kcal`,
                },
                { label: "Rating", value: equipment.rating },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between gap-3 px-4 py-3 ${
                    i !== arr.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <span className="font-inter shrink-0 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    {row.label}
                  </span>

                  <span className="font-inter truncate text-right text-xs text-gray-200">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-6">
              <h2 className="font-oswald text-sm font-bold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2.5">
                {equipment?.muscleGroups?.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 text-xs leading-5 text-gray-400"
                    >
                      <span className="font-inter shrink-0 text-gray-500">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CartButton equipment={equipment} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
