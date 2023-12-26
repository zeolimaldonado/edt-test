import { StarIcon } from './StarIcon';

export function Rating ({ rating } : { rating: number }) {
    return (
        <div className='flex flex-row gap-0'>
            {
                Array.from({ length: 4 }).map((_, index) => (
                    <picture className={`${ rating > index ? 'text-yellow-400' : 'text-white' }`} key={index}>
                        <StarIcon />
                    </picture>
                ))
            }
        </div>
    )
}