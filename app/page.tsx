import Image from 'next/image'
import { RestaurantList } from './restaurantList'

export default function Home() {
  return (
    <main className='w-full h-screen container p-2'>
      <RestaurantList />
    </main>
  )
}
