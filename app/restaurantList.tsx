'use client'

import { useMemo, useState } from 'react'
import { Dropdown } from './components/Dropdown'
import { RestaurantCard } from './components/RestaurantCard'
import { Restaurant } from './types/restaurant'
import { FILTER_VALUES } from './constants/filters'
import { LocationIcon } from './components/LocationIcon'
import { SettingsIcons } from './components/Settings'

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
            <header className='flex flex-row items-center justify-between gap-1 py-2'>
                <section className='hidden lg:flex w-1/3 gap-2'>
                    <div className='flex items-center justify-center h-8 w-8 border border-gray-300 rounded'>
                        <SettingsIcons />
                    </div>
                    <div className='flex items-center gap-2 border border-gray-300 rounded h-8 px-2 w-4/5'>
                        <LocationIcon />
                        <span className='text-sm text-slate-500'>Mi ubicación</span>
                    </div>
                </section>
                <section className='w-full lg:w-2/3 flex items-center gap-1'>
                    <input type="text" className='flex-grow rounded border border-gray-200 h-8' />
                    <Dropdown value={filter} onChange={handleChange} />
                </section>
            </header>
            <div className='w-full flex-grow flex flex-wrap gap-2 py-2 overflow-hidden'>
                <section className='w-full h-full lg:w-1/4 grid grid-cols-1 gap-2 overflow-y-auto py-2'>
                    {
                        data.map(item => (
                            <RestaurantCard restaurant={item} key={item.id} />
                        ))
                    }
                </section>
                <section className='hidden lg:block flex-grow py-2'>
                    <div className='w-full h-full bg-gray-200'></div>
                </section>
            </div>
        </section>
    )
}