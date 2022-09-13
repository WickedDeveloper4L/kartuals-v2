import { cartActionType } from "./cart.type";

const INITIAL_STATE = {
    hidden: true
}

 const CartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case cartActionType.TOGGLE_CART_HIDDEN :
            return{
                ...state,
                hidden: !state.hidden
            }

            default:
                return state;
    }
}

export default CartReducer