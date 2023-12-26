import Image from 'next/image'
import { Restaurants } from './restaurants'

export default function Home() {
  return (
    <main className='w-full h-screen container p-2'>
      <Restaurants />
    </main>
  )
}
