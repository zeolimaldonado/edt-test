import { RestaurantList } from './restaurantList'
import { Restaurant } from './types/restaurant'

const requestRestaurants = async () => {
    const res = await fetch('https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json')
    return await res.json()
}

export async function Restaurants () {
    const restaurants : Restaurant[] = await requestRestaurants()
    return (
        <RestaurantList restaurants={restaurants} />
    )
}