//Item to display in cart

import React from "react";
import "../assets/cart.style.css"

function cartItem(book) {
    return(
                <div className="items">
                    <div className="item-img">
                        <img src="../../public/images/post-item4.jpg" alt="item image" className="cart-img" />
                    </div>

                    <div className="item-content">
                        <h2>{book.title}</h2>
                        <p>{book.authors}</p>
                        <h3 className="price">Price</h3>
                    </div>
                </div>
    )
}

export default cartItem;