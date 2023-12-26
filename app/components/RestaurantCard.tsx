import { FacebookIcon, FacebookShareButton } from 'next-share';
import { Restaurant } from '../types/restaurant';
import { EmailIcon } from './EmailIcon';
import { PhoneIcon } from './PhoneIcon';
import { Rating } from './Rating';
import { WorldIcon } from './WorldIcon';

export function RestaurantCard ({ restaurant } : { restaurant: Restaurant }) {

    return (
        <div className='w-full border border-gray-200 rounded shadow p-3 space-y-2'>
            <h5>{restaurant.name}</h5>
            <section className='flex flex-col gap-1 text-xs'>
                <div className='flex items-center gap-1'>
                    <EmailIcon width={16} height={16} />
                    <span>{restaurant.contact.email}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <PhoneIcon width={16} height={16} />
                    <span>{restaurant.contact.phone}</span>
                </div>
                <div className='flex items-center gap-1'>
                    <WorldIcon width={16} height={16} />
                    <a className='text-blue-400' target='blank' href={restaurant.contact.site}>Visita su sitio</a>
                </div>
            </section>
            <section className='flex flex-col text-xs'>
                <span>{restaurant.address.street}</span>
                <span>{restaurant.address.city}, {restaurant.address.state}</span>
            </section>
            <section className='flex justify-between items-center'>
                <article className='w-1/3'>
                    <Rating rating={restaurant.rating} />
                </article>
                <article>
                    <FacebookShareButton
                        url={restaurant.contact.site}
                        quote={`Visita ${restaurant.name}, un buen restaurante para comer, visitanos en ${restaurant.address.street}, ${restaurant.address.city}, ${restaurant.address.state}`}
                    >
                        <FacebookIcon size={20} className='rounded-full' />
                    </FacebookShareButton>
                </article>
            </section>
        </div>
    )
}