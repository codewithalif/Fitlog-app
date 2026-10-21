import { GymData } from '@/app/Interface/GymData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface IcartItem {
    gymData: GymData
}
const CartItem = ({ gymData }: IcartItem) => {
    return (
        <Link href={`equipment/${gymData.id}`} >
            <div>
                <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-neutral-900 shadow-xl hover:border-[1px] border-lime-500 cursor-pointer">
                    {/* Image */}
                    <div className="relative h-64 p-2 w-full">
                        <Image
                            src={gymData.image}
                            alt={gymData.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 384px) 100vw, 384px"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        {/* Muscle group badges */}
                        <div className="mb-4 flex flex-wrap gap-2">
                            {gymData.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className=" font-inter rounded-full bg-lime-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-neutral-900"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-extrabold uppercase tracking-wide text-white font-oswald">
                            {gymData.name}
                        </h3>

                        {/* Equipment */}
                        <p className="mt-1 text-sm text-neutral-400 font-inter">{gymData.equipment}</p>

                        {/* Divider */}
                        <div className="my-4 border-t border-neutral-700" />

                        {/* Stats */}
                        <div className="flex items-center gap-6 text-sm text-neutral-300">
                            <div className="flex items-center gap-1.5 font-inter">
                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>{gymData.duration} min</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M7 10v12" />
                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                                </svg>
                                <span>{gymData.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <span>{gymData.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CartItem