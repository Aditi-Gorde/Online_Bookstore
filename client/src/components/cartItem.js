//Item to display in cart

import React from "react";
import "../assets/cart.style.css"
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function CartItem({book}) {
    const history = useNavigate();
    const _id = book._id;
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/Cart/${_id}`)
        .then((res) => res.data)
        .then(() => history("/Cart"))
        
    };
    return(
                <>
                    <div className="items">
                    <div className="item-img">
                        <img src="../public/images/post-item4.jpg" alt="item image" className="cart-img" />
                    </div>

                    <div className="item-content">
                        <h2>{book.title}</h2>
                        <p>{book.authors}</p>
                        <h3 className="price">Price</h3>
                        <button onClick={deleteHandler} class="btn ac" type="submit" >Remove</button>
                    </div>
                </div>
               
                </>
    )
}

export default CartItem;

//.then(() => history("/")) 