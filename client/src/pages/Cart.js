//Cart functionality to display the cart and items in it

import React, { useContext } from "react";
import CartItem from "../components/CartItem"
import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/cart.style.css"
import CartContext from "../context/CartContext";
import { useAuthContext } from "../hooks/useAuthContext";
import jwt_decode from "jwt-decode";


function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext)
    console.log(cartItems)
    const { user } = useAuthContext();
    console.log(user)


    const [books, setBooks] = useState([]);
    // useEffect(() => {
    //     console.log(user)
    //     axios.get('http://localhost:5000/Cart')
    //       .then((response) => {
    //         setBooks(response.data.books);
    //         console.log(books);
    //       })
    //       .catch((error) => {
    //         console.log("error");
    //         console.error(error);
    //       });
    //   }, []);

    const checkout = () => {
        const token = localStorage.getItem("user");
        const data = jwt_decode(token);

        let ordered_books = [];
        cartItems.forEach(element => {
            ordered_books.push({bookID: element._id}, {price: element.price})
        }); 

        axios.post(`http://localhost:5000/Cart`, {
            memberID: data.user.id,
            books: ordered_books,
            totalPrice: cartItems.reduce((amount, item) =>
            item.price + amount, 0)

        })
        .then(response => {
            alert("You have placed an order!");
            cartItems.forEach(ele => {
                removeFromCart(ele._id)});
            console.log(cartItems);
        })
        .catch(error => console.log(error))

    }

    return (
        <section className="cart-items">
            <h2 className="heading">Cart</h2>
            <div className="container w-full" style={{justifyContent: 'center'}}>
                <div>
                    {user? (cartItems.length === 0 ?
                        (<h4 className="cartStatement">There is no book in your cart.</h4>)
                        : (
                            <div>
                                <ul>
                                    {cartItems.map(item => (
                                        <CartItem key={item._id} book={item}
                                        />
                                    ))}
                                </ul>
                                <strong><div className="cartTotal">
                                    Cart total
                                    <span className="cartTotalPrice">$
                                        {(cartItems.reduce((amount, item) =>
                                            item.price + amount, 0))}
                                    </span>
                                </div></strong>
                            </div>
                        )) : (<h4 className="cartStatement">Please login to access cart!</h4>)
                        }
                </div>

                <div>
                    {user ?
                        (cartItems.length > 0 ?
                            (<button onClick={() => checkout()} className="reserveButton">Apply for book reservation</button>)
                            : "") : ''
                    }

                </div>
            </div>
        </section>
    )
}

export { Cart };