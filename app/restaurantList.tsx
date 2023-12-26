import { Dropdown } from './components/Dropdown'
import { RestaurantCard } from './components/RestaurantCard'
import { Restaurant } from './types/restaurant'

const requestRestaurants = async () => {
    const res = await fetch('https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json')
    return await res.json()
}

export async function RestaurantList () {
    const restaurants : Restaurant[] = await requestRestaurants()
    return (
        <section className='w-full h-full overflow-hidden flex flex-col'>
            <header className='flex flex-row items-center gap-1 py-2'>
                <input type="text" className='flex-grow rounded border border-gray-200 h-8' />
                <Dropdown />
            </header>
            <section className='w-full grid grid-cols-1 gap-2 flex-1 overflow-y-auto py-2'>
                {
                    restaurants.map(item => (
                        <RestaurantCard restaurant={item} key={item.id} />
                    ))
                }
            </section>
        </section>
    )
}