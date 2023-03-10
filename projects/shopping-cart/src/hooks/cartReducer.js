export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART:
            {
                const { id } = actionPayload // actionPayload is the product that will be added
                // Check if the product is already in the cart
                const productInCartIndex = state.findIndex(item => item.id === id)

                if (productInCartIndex >= 0) {
                    const newState = structuredClone(state)
                    newState[productInCartIndex].quantity += 1
                    updateLocalStorage(newState)
                    return newState
                } else { // Else, add the item to the cart with quantity = 1
                    const newState = [
                        ...state, {
                            ...actionPayload,
                            quantity: 1
                        }
                    ]
                    updateLocalStorage(newState)
                    return newState
                }
            }
        case CART_ACTION_TYPES.REMOVE_FROM_CART:

            const { id } = actionPayload // actionPayload is the product that will be added
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        case CART_ACTION_TYPES.CLEAR_CART:
            {
                updateLocalStorage([])
                return []
            }
    }
}