'use client'

import { useMemo, useState } from 'react'
import { Dropdown } from './components/Dropdown'
import { RestaurantCard } from './components/RestaurantCard'
import { Restaurant } from './types/restaurant'
import { FILTER_VALUES } from './constants/filters'

export function RestaurantList ({ restaurants } : { restaurants : Restaurant[] }) {
    const [filter, setFilter] = useState(FILTER_VALUES.ASC)

    const handleChange = (event: { key: string, label: string }) => {
        setFilter(event)
    }
    
    const data = useMemo(() => {
        return restaurants.sort((a,b) => {
            if (filter.key === FILTER_VALUES.DESC.key) return b.name.localeCompare(a.name)
            if (filter.key === FILTER_VALUES.ASC_RATING.key) return a.rating - b.rating
            if (filter.key === FILTER_VALUES.DESC_RATING.key) return b.rating - a.rating
            return a.name.localeCompare(b.name)
        })
    },[restaurants, filter])

    return (
        <section className='w-full h-full overflow-hidden flex flex-col'>
            <header className='flex flex-row items-center gap-1 py-2'>
                <input type="text" className='flex-grow rounded border border-gray-200 h-8' />
                <Dropdown value={filter} onChange={handleChange} />
            </header>
            <section className='w-full grid grid-cols-1 gap-2 flex-1 overflow-y-auto py-2'>
                {
                    data.map(item => (
                        <RestaurantCard restaurant={item} key={item.id} />
                    ))
                }
            </section>
        </section>
    )
}