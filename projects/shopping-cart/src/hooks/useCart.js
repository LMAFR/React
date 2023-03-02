import { useContext } from 'react'
import { CartContext } from '../contexts/cart'

export const useCart = () => {
    const cart = useContext(CartContext)

    if (cart === undefined) {
        throw new Error('To read a context, the custom hook should be within a provider.')
    }

    return cart
}