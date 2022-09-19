import { cartActionType } from "./cart.type";

export const toggleCartHidden = () => ({
    type: cartActionType.TOGGLE_CART_HIDDEN
})

export const addItem= item =>({
    type: cartActionType.ADD_CART_ITEM,
    payload: item
})

export const clearCartItem= item =>({
    type: cartActionType.CLEAR_CART_ITEM,
    payload: item
})