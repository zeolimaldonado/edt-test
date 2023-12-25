import { Restaurant } from './types/restaurant'

const requestRestaurants = async () => {
    const res = await fetch('https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json')
    return await res.json()
}

export async function RestaurantList () {
    const restaurants : Restaurant[] = await requestRestaurants()
    return (
        <ul>
            {
                restaurants.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))
            }
        </ul>
    )
}