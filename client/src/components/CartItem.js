//Item to display in cart

import React, { useContext } from "react";
import "../assets/cart.style.css"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

function CartItem({book}) {
    const history = useNavigate();
    const _id = book._id;
    const { removeFromCart } = useContext(CartContext)
    const deleteHandler = async () => {
      await axios
        .delete(`${process.env.REACT_APP_backend_url}/Cart/${_id}`)
        .then((res) => res.data)
        .then(() => history("/Cart"))
        
    };
    return(
                <>
                    <div className="items">
                    <div className="item-img">
                        <img src="https://i.pinimg.com/originals/a4/0e/8f/a40e8f3a56c14f0ddb988757cdf4372b.jpg" alt="item image" className="cart-img" />
                    </div>
                    <div className="item-content">
                        <h2>{book.title}</h2>
                        <p>{book.authors}</p>
                        <h4 className="price">Price: {book.price}</h4>
                        <button onClick={()=>removeFromCart(book._id)} class="btn ac" type="submit" >Remove</button>
                    </div>
                </div>
               
                </>
    )
}

export default CartItem;

//.then(() => history("/")) 