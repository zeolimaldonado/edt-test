'use client'

import { useState } from 'react'
import { FilterIcon } from './FilterIcon'

export function Dropdown () {
    const [open, setOpen] = useState(false)

    const handleFilter = () => {
        setOpen(!open)
    }

    return (
        <div className="relative lg:max-w-sm">
            <div onClick={handleFilter} className=' max-h-8 h-8 px-2 flex items-center justify-center border border-gray-300 rounded'>
                <FilterIcon />
            </div>
            <div className={`${!open && 'hidden'} absolute min-w-max right-0 top-full p-4 mt-2 bg-white`}>
                <ul>
                    <li>Ordenar ascendente</li>
                    <li>Ordenar descendente</li>
                    <li>Rating</li>
                </ul>
            </div>
        </div>
    )
}