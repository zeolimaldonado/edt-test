import Image from 'next/image'
import { Restaurants } from './restaurants'

export default function Home() {
  return (
    <main className='w-full h-[calc(100%-56px)] container p-2 mx-auto'>
      <Restaurants />
    </main>
  )
}
