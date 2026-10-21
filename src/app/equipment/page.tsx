import { GymData } from '@/app/Interface/GymData'
import CartItem from '../components/Cart/CartItem'

const CartSection = async () => {
    const gymDataPromise = await fetch("https://api.api-store.workers.dev/api/fitlog")
    const gymData = await gymDataPromise.json()

    return (
        <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-10">
            <h1 className="font-oswald text-xl sm:text-2xl lg:text-3xl">
                THE LIBRARY
            </h1>

            <p className="pt-2 text-sm text-gray-500 sm:pt-3 sm:text-base lg:text-xl">
                Twelve lifts covering every major muscle group.
            </p>

            <div className="my-6 grid grid-cols-1 gap-4 sm:my-8 sm:grid-cols-2 lg:my-10 lg:grid-cols-3 xl:grid-cols-4">
                {gymData.map((data: GymData) => (
                    <CartItem key={data.id} gymData={data} />
                ))}
            </div>
        </div>
    )
}

export default CartSection