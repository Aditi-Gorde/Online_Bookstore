import { useReducer } from "react";
import CartContext from "./CartContext";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./Types";
import CartReducer from "./CartReducer";

const CartState = ({ children }) => {

    const initialState = {
        cartItems: []
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = item => {
        dispatch({type: ADD_TO_CART, payload: item})
    };

    const removeFromCart = (_id) => {
        dispatch({type: REMOVE_FROM_CART, payload: _id});
    }

    return <CartContext.Provider value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart
    }}>
        {children}
    </CartContext.Provider>
}

export default CartState