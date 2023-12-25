import { Address } from './address'
import { Contact } from './contact'

export type Restaurant = {
    id: string,
    rating: number,
    name: string,
    contact: Contact,
    address: Address
}