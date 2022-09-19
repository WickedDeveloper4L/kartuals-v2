import { cartActionType } from "./cart.type";
import { addItemToCart } from "./cart.utils";


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

 const CartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case cartActionType.TOGGLE_CART_HIDDEN :
            return{
                ...state,
                hidden: !state.hidden
            };
        case cartActionType.ADD_CART_ITEM :
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionType.CLEAR_CART_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
            default:
                return state;
    }
}

export default CartReducer