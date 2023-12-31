import { ADD_TO_CART, REMOVE_FROM_CART } from "./Types";

const CartReducer = (state, action) => {
    console.log(state)
            console.log(action)
    switch (action.type) {
        case ADD_TO_CART: {
            console.log(state)
            console.log(action)
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            }
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                cartItems:state.cartItems.filter((item) => item._id !== action.payload),
            }
        }
        default:
            return state
    }
}

export default CartReducer