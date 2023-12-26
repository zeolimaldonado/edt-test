'use client'

import { useCallback, useState } from 'react'
import { FilterIcon } from './FilterIcon'
import { FILTER_VALUES } from '../constants/filters'

export function Dropdown ({ value, onChange } : { value: { key: string, label: string }, onChange: (data: { key: string, label: string }) => void }) {
    const [open, setOpen] = useState(false)

    const handleCallbakc = useCallback((data: { key: string, label: string }) => () => {
        onChange(data)
    },[onChange])

    const handleFilter = () => {
        setOpen(!open)
    }

    return (
        <div className="relative lg:max-w-sm">
            <div onClick={handleFilter} className=' max-h-8 h-8 px-2 flex items-center justify-center border border-gray-300 rounded hover:cursor-pointer'>
                <FilterIcon />
            </div>
            <div className={`${!open && 'hidden'} absolute min-w-max right-0 top-full p-4 mt-2 mr-1 bg-white shadow rounded`}>
                <ul>
                    {
                        Object.values(FILTER_VALUES).map(item => (
                            <li onClick={handleCallbakc(item)} key={item.key} className={`px-3 py-2 hover:bg-blue-300 hover:text-white rounded ${value.key === item.key && 'bg-blue-300 text-white'}`}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}